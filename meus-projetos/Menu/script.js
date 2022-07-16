var openMenu = document.querySelector(".menu")
let navList = document.querySelector(".nav-list")

function openNav(){
    
    openMenu.classList.remove("menu")
    navList.classList.remove("hide")
    openMenu.classList.add('open-menu')
    
    
}
function closeMenu(){
    
    openMenu.classList.add("menu")
    navList.classList.add("hide")
}