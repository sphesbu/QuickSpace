const smallnav = document.querySelector(".smallnav");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-links li");


smallnav.addEventListener("click", () =>{
    navlinks.classList.toggle("open");
});

