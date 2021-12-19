console.log("Witam!");

let send = document.querySelector(".js_sendButton");
let button = document.querySelector(".js_displayMode");
let body = document.querySelector(".body");

send.addEventListener("click", () => {
    alert("Dzięki za kliknięcie!");
});

button.addEventListener("click", () => {
    if (body.className === "body" && button.textContent === "Dark Mode") {
        body.className = "darkmode";
        button.textContent = "Light Mode";
    } else {
        body.className = "body";
        button.textContent = "Dark Mode";
    }
})


