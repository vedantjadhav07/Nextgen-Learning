
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    let form = event.target;

    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            "Accept": "application/json"
        }
    }).then(response => {
        if (response.ok) {
            document.getElementById("successMessage").style.display = "block";
            form.reset(); // Clear the form after submission
        } else {
            alert("Something went wrong. Please try again.");
        }
    }).catch(error => {
        alert("Error: " + error);
    });
});

