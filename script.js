let button = document.getElementById("log");
let navbar = document.getElementById("navbar");
let isClick = false;

let cards = document.getElementsByClassName("card");

const btnDarkMode = document.querySelector(".dark-mode-btn");

if (localStorage.getItem("darkMode") === "dark") {
    document.body.classList.add("dark");
}

btnDarkMode.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.setItem("darkMode",  "light");
    }
})

for (i = 0; i < cards.length; i++) {
    if ((i % 2) == 0) {
        cards[i].style.animation = `odd 1s forwards ${i * 0.2}s`;
    } else {
        cards[i].style.animation = `even 1s forwards ${i * 0.2}s`;
    }
}

button.addEventListener("click", () => {
    if (isClick == false) {
        button.innerText = "Log out";

        let profile = document.createElement("li");
        let link = document.createElement("a");

        link.innerHTML = "<i class='fa-solid fa-user'></i> Profile";
        profile.appendChild(link);
        profile.className = "navbar__item right";
        profile.id = "profile";

        navbar.appendChild(profile);
        
        isClick = true;
    } else {
        button.innerText = "Log in";
        profile = document.getElementById("profile");
        profile.parentNode.removeChild(profile);

        isClick = false;
    }
})

let popup = document.getElementById("popup");
let popupContent = document.getElementById("popup-content"); 

//Функция отображения PopUp
function PopUpShow(){
    popup.style.opacity = 1;
    popup.style.visibility = "visible";
    popupContent.style.opacity = 1;
    popupContent.style.transform = `perspective(600px) translate(0px, 0%) rotateX(0deg)`;
}

//Функция скрытия PopUp
function PopUpHide(){
    popup.style.opacity = 0;
    popup.style.visibility = "hidden";
    popupContent.style.opacity = 0;
    popupContent.style.transform = `perspective(600px) translate(0px, -100%) rotateX(45deg)`;
}

const swiper = new Swiper(".news-slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        renderFraction: function(currentClass, totalClass) {
            return "Новость <span class='" + currentClass + "'></span>" +
            " из " + "<span class='" + totalClass + "'></span>"
        }
    },

    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true
    },

    autoHeight: true,
    
    keyboard: {
        enabled: true,
        onlyInViewport: true
    }
});
