// função da loja

const products = [
    {
        name: "Cadeira Fire-Tech",
        price: 900.00,
        image: "../imagens/cadeira.png",
        productDetailLink: "item-cadeira-1.html"
    },
    {
        name: "Headset Fire-Tech",
        price: 180.00,
        image: "../imagens/fone.png",
        productDetailLink: "item-headset-1.html"
    },
    {
        name: "Teclado Fire-tech",
        price: 220.00,
        image: "../imagens/teclado.png", 
        productDetailLink: "item-teclado-1.html"
    },
    {
        name: "Mouse Fire-tech",
        price: 180.00,
        image: "../imagens/mouse.png",
        productDetailLink: "item-mouse-blue.html"
    },
    {
        name: "PC Gamer Fire-tech",
        price: 2220.00,
        image: "../imagens/cpu.png",
        productDetailLink: "item-hardware-1.html"
    },
    {
        name: "Óculos VR Fire-tech",
        price: 220.00,
        image: "../imagens/vr.png",
        productDetailLink: "item-acessorio-vr.html"
    },
    {
        name: "PC Gamer RGBA Fire-Tech",
        price: 3320.00,
        image: "../imagens/pcrgba.png",
        productDetailLink: "item-hardware-2.html"
    },
    {
        name: "Volante e pedal Fire-Tech",
        price: 420.00,
        image: "../imagens/volante.png",
        productDetailLink: "item-acessorio-volante.html"
    },
    {
        name: "Mouse Gamer Fire-Tech",
        price: 220.00,
        image: "../imagens/mouselaranja.png",
        productDetailLink: "item-teclado-red.html"
    },
    {
        name: "Teclado RGBA Fire-Tech",
        price: 210.00,
        image: "../imagens/teclado (2).png",
        productDetailLink: "item-teclado-2.html"
    },
    {
        name: "Headset Ultra-Confort Fire-Tech",
        price: 430.00,
        image: "../imagens/headsetred.png",
        productDetailLink: "item-headset-2.html"
    },
    {
        name: "Cadeira Gamer Azul Fire-Tech",
        price: 1220.00,
        image: "../imagens/cadeiraazul.png",
        productDetailLink: "item-cadeira-2.html"
    },
    

    //lista de produtos


];



function displayProducts() {
    const productList = document.querySelector(".lista");

    products.forEach((product, index) => {
        const productItem = document.createElement("div");
        productItem.classList.add("item");

        const productLink = document.createElement("a");
        productLink.href = product.productDetailLink; 
        productItem.appendChild(productLink);
        
        const productImage = document.createElement("img");
        productImage.src = product.image;
        productItem.appendChild(productImage);

        productLink.appendChild(productImage);
        productItem.appendChild(productLink);

        const productName = document.createElement("h3");
        productName.textContent = product.name;
        productItem.appendChild(productName);

        const productPrice = document.createElement("p");
        productPrice.textContent = `Preço: R$ ${product.price.toFixed(2)}`;
        productItem.appendChild(productPrice);

        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Adicionar ao Carrinho";
        addToCartButton.addEventListener("click", () => addToCart(index));
        productItem.appendChild(addToCartButton);

        productList.appendChild(productItem);
    });
}

document.querySelectorAll(".item button").forEach((button, index) => {
    button.addEventListener("click", () => addToCart(index));


});

const productLinks = document.querySelectorAll(".item a[data-product-link]");
productLinks.forEach((link) => {
    link.addEventListener("click", handleProductClick);
});

function handleProductClick(event) {
    event.preventDefault();

    
    const productLink = event.currentTarget.getAttribute("data-product-link");

    window.location.href = productLink;
}

function addToCart(productIndex) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(products[productIndex]);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartInfo();
}

function updateCartInfo() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);

    const cartInfo = document.querySelector(".cart-info");
    cartInfo.textContent = `Total: R$ ${totalPrice.toFixed(2)} (${cart.length} itens)`;

    const cartList = document.querySelector(".cart-list");
    cartList.innerHTML = "";

    cart.forEach((product) => {
        const cartItem = document.createElement("div");
        cartItem.textContent = `${product.name} - R$ ${product.price.toFixed(2)}`;
        cartList.appendChild(cartItem);
    });
}

function clearCart() {
    localStorage.removeItem("cart");
    updateCartInfo();
}

window.addEventListener("DOMContentLoaded", () => {
    displayProducts();
    updateCartInfo();

    const clearCartButton = document.querySelector(".clear-cart-button");
    clearCartButton.addEventListener("click", clearCart);
});


const checkoutButton = document.getElementById("checkout-button");

checkoutButton.addEventListener("click", () => {
    const paymentPageURL = "../paginas/loja-pagamento.html";

    const popupWidth = 800;
    const popupHeight = 600;
    const left = (window.innerWidth - popupWidth) / 2;
    const top = (window.innerHeight - popupHeight) / 2;

    window.open(paymentPageURL, "Pagamento", `width=${popupWidth}, height=${popupHeight}, left=${left}, top=${top}`);
});

///encontrar uma forma de aplicar Valor do carrinho à página de pagamento
