const scriptURL = "https://script.google.com/macros/s/AKfycbxGbpE7hinyZw0kZ2zMNaiBJBAoqoRfU3Tg8saQ0CBIqWIlt8e3wDsE8iKY7cALjBQvog/exec";

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");
    const status = document.getElementById("status");

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        const data = {
            name:    document.getElementById("name").value,
            email:   document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        status.innerHTML = "Sending... 🐝";

        fetch(scriptURL, {
            method: "POST",
            mode:   "no-cors",
            body:   new URLSearchParams(data)
        })
        .then(() => {
            status.innerHTML = "✓ Message sent successfully";
            form.reset();
        })
        .catch(error => {
            console.error(error);
            status.innerHTML = "❌ Failed to send message";
        });

    });

});