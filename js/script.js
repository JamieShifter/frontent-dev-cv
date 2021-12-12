console.log("Witam!");

let send = document.querySelector(".sendButton");
let button = document.querySelector(".displayMode");
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


