const navToggle = document.querySelector(".mobile-nav-toggle");
const mobileNav = document.querySelector(".mobile-navigation");
const toggle = document.querySelector(".mobile-nav-toggle");


if (mobileNav.getAttribute("aria-expanded") == "false"){
    mobileNav.setAttribute("style", "display: none");
}


function toggleMobile(){
    if (mobileNav.getAttribute("aria-expanded") == "false"){
        mobileNav.setAttribute("aria-expanded", "true");
        mobileNav.setAttribute("style", "display: block");
        console.log("Aria Expanded Set To True");

    }
    else{
        mobileNav.setAttribute("aria-expanded", "false");
        mobileNav.setAttribute("style", "display: none");
        console.log("Aria expanded set to false")
    }
}
toggle.addEventListener("click", toggleMobile)
