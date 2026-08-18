const button = document.getElementById("send-button");
const input = document.getElementById("user-input");
const chatContainer = document.getElementById("chat-container");

async function sendMessage() {
    const message = input.value.trim();

    if (!message) {
        return;
    }

    const userMessage = document.createElement("p");
    userMessage.className = "user-message";
    userMessage.textContent = message;

    chatContainer.appendChild(userMessage);

    input.value = "";

    const loadingMessage = document.createElement("p");
    loadingMessage.className = "bot-message";
    loadingMessage.textContent = "Thinking...";

    chatContainer.appendChild(loadingMessage);

    chatContainer.scrollTop = chatContainer.scrollHeight;

    const response = await fetch("/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: message
        })
    });

    const aiResponse = await response.text();

    loadingMessage.textContent = aiResponse;

    chatContainer.scrollTop = chatContainer.scrollHeight;
}

button.addEventListener("click", sendMessage);

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});