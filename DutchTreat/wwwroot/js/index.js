console.log("Hello, Pluralsight");

let form = document.getElementById("theForm");
form.hidden = true;

let btn = document.getElementById("buyButton");
btn.addEventListener("click", (e) => {
    console.log("Buying Button");
});

let productInfo = document.getElementsByClassName("product-props");
