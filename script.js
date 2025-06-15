let button_1 = document.getElementById("button1");
let body = document.body;
let pop = document.getElementById("popup");
let icon = document.getElementById("icon");

function popup_cv(event) {
    event.stopPropagation();
    let text = document.getElementById("popup_text");
    text.textContent = "CV not availible right now. Apologies.";
    pop.style.display = 'flex';
    pop.style.justifyContent = 'space-between';
    icon.addEventListener("click", () => {
        pop.style.display = "none";
    });
}

button_1.addEventListener("click", popup_cv);