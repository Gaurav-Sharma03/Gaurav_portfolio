
  // Smooth scroll to the About section when the Learn More button is clicked
  const ctaBtn = document.querySelector('.cta-btn');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const aboutSection = document.querySelector('#about');
      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  }

  // Basic form submission with a simple message and reset form
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Message Sent! I'll get back to you soon.");

      // Reset the form after submission
      event.target.reset();
    });
  }

  // Get all nav links
  const navLinks = document.querySelectorAll('.nav-link');
  if (navLinks.length > 0) {
    // Add event listener for click on each nav link
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        // Remove active class from all links
        navLinks.forEach(link => link.parentElement.classList.remove('active'));

        // Add active class to the clicked link
        this.parentElement.classList.add('active');
      });
    });
  }

  // Get the navbar toggler (hamburger menu)
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.getElementById('navbarNav');
  
  if (navbarToggler && navbarCollapse) {
    // Toggle active class on navbar collapse when hamburger menu is clicked
    navbarToggler.addEventListener('click', function() {
      navbarCollapse.classList.toggle('active');
    });
  }

  // Project modal open and close functions
  function openModal(projectId) {
    const projectModal = document.getElementById('projectModal' + projectId);
    if (projectModal) {
      projectModal.style.display = 'block';
    }
  }

  function closeModal(projectId) {
    const projectModal = document.getElementById('projectModal' + projectId);
    if (projectModal) {
      projectModal.style.display = 'none';
    }
  }

