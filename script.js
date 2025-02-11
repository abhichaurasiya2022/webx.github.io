document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded successfully!");

    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Thank you for contacting us! We'll get back to you soon.");
            form.reset();
        });
    }
});
