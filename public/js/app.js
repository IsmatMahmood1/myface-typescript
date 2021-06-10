document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById("random-color")) {
        const colorClick = document.getElementById("random-color");
        colorClick.addEventListener("click", randomColor);
    }
    
    const menu = document.getElementById("nav-button");
    menu.addEventListener("click", expandMenu);
    //document.
    document.getElementById("main").addEventListener("click", closeMenu);
});

function randomColor() {
    const myElement = document.getElementsByClassName("list-items");
    for (let i=0; i < myElement.length; i++) {
        myElement[i].style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }
}

function expandMenu(){
    document.getElementById("nav-bar").classList.toggle('show');
}

function closeMenu() {
    if (document.getElementsByClassName("show").length > 0) {
        document.getElementById("nav-bar").classList.toggle('show');
    }
}

