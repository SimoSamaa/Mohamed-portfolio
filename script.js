AOS.init();
// line progress scrollY =====================
window.addEventListener("scroll", lineProgressScrollY);

let lineProgress = document.createElement("div");
lineProgress.className = "lineProgress";
document.body.prepend(lineProgress);

function lineProgressScrollY() {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let all = 100 * (scrollTop / scrollHeight);
    lineProgress.style.width = all + "%";
}

// scrollY links ===================================
let menuLinks = document.querySelectorAll(".menu-links li a");
let section = document.querySelectorAll("section");

function scrollYsection() {
    let sec = section.length;
    while (sec-- && window.scrollY - 200 < section[sec].offsetTop) {
        menuLinks.forEach(links => links.classList.remove("scrollY"));
        menuLinks[sec].classList.add("scrollY");
    };
};
scrollYsection();
window.addEventListener("scroll", scrollYsection);

// whatsapp ==================================
let whatsappBtn = document.querySelector(".whatsapp-btn");

window.addEventListener("scroll", () => {
    // console.log(this.scrollY); to show number of scrolling Y
    if (scrollY >= 100) {
        whatsappBtn.classList.add("show");
    } else whatsappBtn.classList.remove("show");
});
// sidebar ===================================
const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

const local = window.localStorage.getItem("mode");
if (local && local === "dark") {
    modeText.textContent = localStorage["data-text"]
    body.classList.toggle("dark");
}

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        modeText.textContent = "Light mode";
        localStorage.setItem("mode", "dark");
    } else {
        modeText.textContent = "Dark mode";
        localStorage.setItem("mode", "light");
    }

    window.localStorage.setItem("data-text", modeText.textContent);
});

// svg ===================================
let skills = document.querySelector("#skills");
let htmlCircle = document.querySelector(" .html circle");
let cssCircle = document.querySelector(" .css circle");
let jsCircle = document.querySelector(" .js circle");
let start = false;

window.addEventListener("scroll", function () {
    if (window.scrollY >= skills.offsetTop - 200) {
        if (start) return;
        let number = document.getElementById("number"),
            number2 = document.getElementById("number-2"),
            number3 = document.getElementById("number-3");

        let counter = 0,
            counter2 = 0,
            counter3 = 0;

        setInterval(() => {
            if (counter == 90) {
                clearInterval();
            } else {
                counter += 1;
                number.innerHTML = counter + "%";
            }
            // css
            if (counter2 == 80) {
                clearInterval();
            } else {
                counter2 += 1;
                number2.innerHTML = counter2 + "%";
            }
            //js
            if (counter3 == 70) {
                clearInterval();
            } else {
                counter3 += 1;
                number3.innerHTML = counter3 + "%";
            }
        }, 20);

        htmlCircle.style.cssText =
            "animation: animate-2 1.8s linear 1 forwards;-webkit-animation: animate-2 1.8s linear 1 forwards;";
        cssCircle.style.cssText =
            "animation: animate-3 1.7s linear 1 forwards;-webkit-animation: animate-3 1.7s linear 1 forwards;";
        jsCircle.style.cssText =
            "animation: animate-4 1.6s linear 1 forwards;-webkit-animation: animate-4 1.6s linear 1 forwards;";
        start = true;
    }
});

// footer copyright year
const copyrighYeart = document.querySelector(".copyrigh-yeart");
let myDate = new Date();
copyrighYeart.textContent = myDate.getFullYear();

const faveIcon = window.matchMedia('(prefers-color-scheme: dark)'),
    favicon = document.querySelector('link[rel="icon"]');

function controleFaveIconMode() {
    if (faveIcon.matches) {
        favicon.href = "./img/logo-white.png";
    } else {
        favicon.href = "./img/logo-black.png";
    }
};

controleFaveIconMode(faveIcon);
faveIcon.addListener(controleFaveIconMode);

