// Smooth scroll to the About section when the Learn More button is clicked
document.querySelector('.cta-btn').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});

// Basic form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message Sent! I'll get back to you soon.");
});

const hamburgerMenu = document.getElementById('hamburger-menu');
const navBar = document.querySelector('.nav-bar');

hamburgerMenu.addEventListener('click', () => {
    navBar.classList.toggle('active');
});




function openModal(projectId) {
    document.getElementById('projectModal' + projectId).style.display = 'block';
}

function closeModal(projectId) {
    document.getElementById('projectModal' + projectId).style.display = 'none';
}