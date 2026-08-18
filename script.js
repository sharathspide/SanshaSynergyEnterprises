document.addEventListener('DOMContentLoaded', () => {
  const scrollTopButton = document.querySelector('.scroll-top');

  if (scrollTopButton) {
    const toggleVisibility = () => {
      if (window.scrollY > 250) {
        scrollTopButton.classList.add('visible');
      } else {
        scrollTopButton.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    scrollTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const contactForm = document.querySelector('#contactForm');
  if (contactForm) {
    const status = contactForm.querySelector('.form-status');

    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const name = (formData.get('name') || '').toString().trim();
      const email = (formData.get('email') || '').toString().trim();
      const message = (formData.get('message') || '').toString().trim();

      if (!name || !email || !message) {
        status.textContent = 'Please fill in all required fields.';
        status.style.color = '#b42318';
        return;
      }

      const subject = encodeURIComponent(`New inquiry from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );

      window.location.href = `mailto:hello@sanshasynergy.com?subject=${subject}&body=${body}`;
      status.textContent = 'Your email client has been opened. Thank you for contacting us!';
      status.style.color = '#0d7b5f';
      contactForm.reset();
    });
  }
});
