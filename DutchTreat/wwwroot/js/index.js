$(document).ready(() => {
    console.log("Hello, Pluralsight");

    $("#form").hide();

    $("#buyButton").click((e) => {
        console.log("Buying Button");
    });

    $(".product-props li").click(() => {
        console.log("You clicked " + $(this).text());
    });

    let $loginToggle = $("#loginToggle");
    let $popupForm = $(".popup-form");

    $loginToggle.click(() => {
        $(".popup-form").slideToggle(500);
    });
});