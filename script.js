const search_bar = document.getElementById("search-form");
const search_button = document.getElementById("search-btn");
const cart_button = document.getElementById("cart-btn");
const cart_bar = document.getElementById("cart-form");
const menu_button = document.getElementById("menu-btn")
const menu_bar = document.getElementById("menu-bar")


search_button.addEventListener("click", ()=>{
    
    search_bar.classList.toggle("active");
});

cart_button.addEventListener("click", ()=>{
    cart_bar.classList.toggle("active");
});

menu_button.addEventListener("click", ()=>{
    menu_bar.classList.toggle("active");
})

document.addEventListener("click", (event) => {

    if (
        !search_bar.contains(event.target) &&
        !search_button.contains(event.target)
    ) {
        search_bar.classList.remove("active");
    }

    if(
        !cart_bar.contains(event.target) &&
        !cart_button.contains(event.target)
    ){
            cart_bar.classList.remove("active");
        }

    if(
        !menu_bar.contains(event.target) &&
        !menu_button.contains(event.target)
    ){
        menu_bar.classList.remove("active");
    }
});


