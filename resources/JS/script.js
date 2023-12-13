//Global Variables Used
const mobileNav = document.querySelector(".mobile-navigation");
const toggle = document.querySelector(".mobile-nav-toggle");
const logo = document.querySelector(".logo-wrapper");
const logoText = document.querySelector(".softies-text-logo");
const mobileNavBar = document.querySelector(".mobile-nav");
const faqToggle = document.querySelector(".faq-toggle");








//Boolean Initially Hides The Mobile Nav Display 
if (mobileNav.getAttribute("aria-expanded") == "false"){
    mobileNav.setAttribute("style", "display: none");
}

//This Scroll Function Animates The Nav Bar And Gets it Out the way
window.addEventListener("scroll", function(){
    var primHeader = document.querySelector(".primary-nav");
    primHeader.classList.toggle("sticky-primary-nav", window.scrollY > 0);
    logo.classList.toggle("visually-hidden", window.scrollY > 0);
    logoText.classList.toggle("visually-show", window.scrollY > 0);

    var staticTag = document.getElementById("tagline");
    var scrolledTag = document.getElementById("scrolledTagline");


})

// Function toggles the mobile nav on mobile devices
function toggleMobile(){
    if (mobileNav.getAttribute("aria-expanded") == "false"){
        mobileNav.setAttribute("aria-expanded", "true");
        mobileNav.setAttribute("style", "display: block");
    }
    else{
        mobileNav.setAttribute("aria-expanded", "false");
        mobileNav.setAttribute("style", "display: none");
        console.log("Aria expanded set to false");
    }
}
toggle.addEventListener("click", toggleMobile);

