// função da loja

const products = [
    {
        name: "Cadeira Gamer Laranja Fire-Tech",
        price: 900.00,
        image: "../imagens/cadeira.png",
        productDetailLink: "item-cadeira-1.html"
    },
    {
        name: "Headset Basic Line Fire-Tech",
        price: 180.00,
        image: "../imagens/fone.png",
        productDetailLink: "item-headset-1.html"
    },
    {
        name: "Teclado Ergonômico Fire-tech",
        price: 220.00,
        image: "../imagens/teclado.png", 
        productDetailLink: "item-teclado-1.html"
    },
    {
        name: "Mouse Gamer Azul Fire-tech",
        price: 180.00,
        image: "../imagens/mouse.png",
        productDetailLink: "item-mouse-blue.html"
    },
    {
        name: "PC Gamer XY-1355 Fire-tech",
        price: 2220.00,
        image: "../imagens/cpu.png",
        productDetailLink: "item-hardware-1.html"
    },
    {
        name: "Óculos VR High-Definition Fire-tech",
        price: 220.00,
        image: "../imagens/vr.png",
        productDetailLink: "item-acessorio-vr.html"
    },
    {
        name: "PC Gamer XT-3040 Fire-Tech",
        price: 3320.00,
        image: "../imagens/pcrgba.png",
        productDetailLink: "item-hardware-2.html"
    },
    {
        name: "Volante e pedal USB Fire-Tech",
        price: 420.00,
        image: "../imagens/volante.png",
        productDetailLink: "item-acessorio-volante.html"
    },
    {
        name: "Mouse Gamer RGB Fire-Tech",
        price: 220.00,
        image: "../imagens/mouselaranja.png",
        productDetailLink: "item-teclado-red.html"
    },
    {
        name: "Teclado RGBA Basic Fire-Tech",
        price: 190.00,
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

        const buyNowButton = document.createElement("button");
        buyNowButton.textContent = "Comprar Agora";
        buyNowButton.addEventListener("click", () => buyNow(product.price));
        productItem.appendChild(buyNowButton);

        productList.appendChild(productItem);
    });
}
function buyNow(productPrice) {
    const paymentPageURL = `../paginas/loja-pagamento.html?price=${productPrice}`;
    window.location.href = paymentPageURL;
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

///encontrar uma forma de aplicar Valor do produto à página de pagamento
