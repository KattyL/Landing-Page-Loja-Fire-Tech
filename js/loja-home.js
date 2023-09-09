// função da loja

const products = [
    {
        name: "Cadeira Fire-Tech",
        price: 900.00,
        image: "../imagens/cadeira.png"
    },
    {
        name: "Headset Fire-Tech",
        price: 180.00,
        image: "../imagens/fone.png"
    },
    {
        name: "Teclado Fire-tech",
        price: 220.00,
        image: "../imagens/teclado.png" 
    },
    {
        name: "Mouse Fire-tech",
        price: 180.00,
        image: "../imagens/mouse.png" 
    },
    {
        name: "PC Gamer Fire-tech",
        price: 2220.00,
        image: "../imagens/cpu.png" 
    },
    {
        name: "Óculos VR Fire-tech",
        price: 220.00,
        image: "../imagens/vr.png" 
    },


    //lista de produtos

    // Precisa arrumar o Total do carrinho para R$
    //itens do varrinho - tirar o R
    // tirar o R do nome dos itens
    // arrumar preço a receber dos itens

];

function displayProducts() {
    const productList = document.querySelector(".lista");

    products.forEach((product, index) => {
        const productItem = document.createElement("div");
        productItem.classList.add("item");

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productItem.appendChild(productImage);

        const productName = document.createElement("h3");
        productName.textContent = product.name;
        productItem.appendChild(productName);

        const productPrice = document.createElement("p");
        productPrice.textContent = `Preço: R$${product.price.toFixed(2)}`;
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
    cartInfo.textContent = `Total: $${totalPrice.toFixed(2)} (R${cart.length} itens)`;

    const cartList = document.querySelector(".cart-list");
    cartList.innerHTML = "";

    cart.forEach((product) => {
        const cartItem = document.createElement("div");
        cartItem.textContent = `R${product.name} - R$${product.price.toFixed(2)}`;
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
