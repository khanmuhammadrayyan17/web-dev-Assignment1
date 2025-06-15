let button_1 = document.getElementById("button1");
let button_2 = document.getElementById("button2");
let pop = document.getElementById("popup");
let pop2 = document.getElementById("popup2");
let icon = document.getElementById("icon");
let icon2 = document.getElementById("cross2");

function popup_cv() {
    let text = document.getElementById("popup_text");
    text.textContent = "CV not availible right now. Apologies.";
    pop.style.display = 'flex';
    icon.addEventListener("click", () => {
        pop.style.display = "none";
    });
}
function popup_number()
{
    pop2.style.display = "flex";
    document.querySelector('.container').style.filter = "brightness(50%)";
    document.querySelector('#About').style.filter = "brightness(50%)";
    document.querySelector('#projects').style.filter = "brightness(50%)";
    icon2.addEventListener("click", ()=> {
        pop2.style.display = "none";
        document.querySelector('.container').style.filter = "brightness(100%)";
        document.querySelector('#About').style.filter = "brightness(100%)";
        document.querySelector('#projects').style.filter = "brightness(100%)";
    })
}

button_1.addEventListener("click", popup_cv);
button_2.addEventListener("click", popup_number);