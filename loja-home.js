// função da loja

const products = [
    {
        name: "Mouse Gamer XYZ",
        price: 50.00,
        image: "imagem_mouse.jpg"
    },
    {
        name: "Teclado Gamer ABC",
        price: 80.00,
        image: "imagem_teclado.jpg"
    },
    {
        name: "Headset Fire-tech",
        price: 120.00,
        image: "assets/imagens/blaze.png" 
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

