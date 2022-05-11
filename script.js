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

// whatsapp ==================================
let whatsappBtn = document.querySelector(".whatsapp-btn");

window.addEventListener("scroll", () => {
    console.log(this.scrollY);
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

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
    } else {
        modeText.innerText = "Dark mode";
    }
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
        let number = document.getElementById("number");
        number2 = document.getElementById("number-2");
        number3 = document.getElementById("number-3");

        let counter = 0;
        counter2 = 0;
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
            if (counter3 == 50) {
                clearInterval();
            } else {
                counter3 += 1;
                number3.innerHTML = counter3 + "%";
            }
        }, 20);

        htmlCircle.style.cssText =
            "animation: animate-2 2s linear 1 forwards;-webkit-animation: animate-2 2s linear 1 forwards;";
        cssCircle.style.cssText =
            "animation: animate-3 2s linear 1 forwards;-webkit-animation: animate-3 1.7s linear 1 forwards;";
        jsCircle.style.cssText =
            "animation: animate-4 2s linear 1 forwards;-webkit-animation: animate-4 1s linear 1 forwards;";
        start = true;
    }
});


