// Smooth scroll to the About section when the Learn More button is clicked
document.querySelector('.cta-btn').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});

// Basic form submission with a simple message
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message Sent! I'll get back to you soon.");
});

// Hamburger menu toggle functionality
const hamburgerMenu = document.getElementById('hamburger-menu');
const navBar = document.querySelector('.navbar-nav');
const cancelBtn = document.querySelector('.cancel-btn');

// Open and close the hamburger menu
hamburgerMenu.addEventListener('click', () => {
    navBar.classList.toggle('active');
});

// Close the menu when the cancel button is clicked
cancelBtn.addEventListener('click', () => {
    navBar.classList.remove('active');
});

// Project modal open and close functions
function openModal(projectId) {
    document.getElementById('projectModal' + projectId).style.display = 'block';
}

function closeModal(projectId) {
    document.getElementById('projectModal' + projectId).style.display = 'none';
}
