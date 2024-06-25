document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Validate form values
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }

    // Send form data to the server or process it
    console.log('Form submitted', { name, email, message });

    // Clear the form
    document.getElementById('contact-form').reset();
    alert('Thank you for your message. We will get back to you soon!');
});
