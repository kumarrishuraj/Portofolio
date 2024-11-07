// Select the form and response message element
const form = document.getElementById('contactForm');
const responseMessage = document.getElementById('responseMessage');

// Add an event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page refresh

    // Show the response message
    responseMessage.classList.remove('hidden');

    // Set a timeout to hide the message after 3 seconds (3000 milliseconds)
    setTimeout(() => {
        responseMessage.classList.add('hidden');
    }, 3000);

    // Optionally clear the form
    form.reset();
});
