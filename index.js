let uList = document.querySelector(".unorder-list");
let navbar = document.querySelector(".navbar");
let toggler = document.querySelector(".toogler");
toggler.addEventListener('click',()=>{
    uList.classList.toggle("display-none");
    navbar.classList.toggle("heights");
})