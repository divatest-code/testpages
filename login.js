// Wait until the page loads
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const message = document.getElementById("message");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // prevent page reload

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username === "" || password === "") {
            showMessage("Please fill in both fields.", "red");
            return;
        }

        // Since static site --> no real login
        showMessage("This is a static site. No real login is possible.", "orange");

        // You can redirect somewhere:
        // window.location.href = "dashboard.html";
    });

    function showMessage(text, color) {
        message.textContent = text;
        message.style.color = color;
        message.style.display = "block";
    }
});
