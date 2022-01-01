{
    const welcome = () => {
        console.log("Witam!");
    }

    const sendForm = () => {
        const send = document.querySelector(".js_sendButton");
        send.addEventListener("click", () => {
            alert("Dzięki za kliknięcie!");
        });
    }

    const changeTheme = () => {
        const button = document.querySelector(".js_displayMode");
        const body = document.querySelector(".body");
    
        button.addEventListener("click", () => {
            if (body.className === "body" && button.textContent === "Dark Mode") {
                body.className = "darkmode";
                button.textContent = "Light Mode";
            } else {
                body.className = "body";
                button.textContent = "Dark Mode";
            }
        })
    }

    const init = () => {
        welcome();
        sendForm();
        changeTheme();
    }

    init()
}

