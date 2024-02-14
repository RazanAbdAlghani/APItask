async function getPizza() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const products = data.products;

    const result = products.map(function (product) {
        return `<div class="product">
        <div class="pro-info">
        <h2>${product.title}</h2>
        <span>${product.brand}</span>
        <img src="${product.thumbnail}" alt="this is picture"/>
        <h3>price :${product.price}$</h3>
        </div>
        </div>`
    }).join('');

    document.querySelector(".products").innerHTML = result;

}

getPizza();