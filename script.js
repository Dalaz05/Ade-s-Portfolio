const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Example: You can add form submission logic here (e.g., sending an email, saving to database)
    alert('Form submission placeholder. This is where you would handle form data.');
    // Clear form fields if needed
    this.reset();
});
