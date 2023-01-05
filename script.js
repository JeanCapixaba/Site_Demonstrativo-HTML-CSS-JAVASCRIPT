const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 100)
})

// ISSO FAZ O MENU ROLAR A PÁGINA