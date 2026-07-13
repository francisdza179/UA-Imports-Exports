/* ============================================================
   UA IMPORTS & EXPORTS — Form Handling (Web3Forms)
   Delivers form submissions to uaimportsexports@gmail.com in
   the background, without opening the visitor's mail client.
   ============================================================ */

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export function initForms() {
  const forms = document.querySelectorAll('.quick-inquiry__form, .contact-form');
  if (!forms.length) return;

  forms.forEach((form) => {
    const status = form.querySelector('.form-status');
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (status) {
        status.textContent = 'Sending your message…';
        status.className = 'form-status form-status--loading';
        status.hidden = false;
      }
      if (submitButton) submitButton.disabled = true;

      try {
        const response = await fetch(WEB3FORMS_ENDPOINT, {
          method: 'POST',
          body: new FormData(form),
        });
        const result = await response.json();

        if (result.success) {
          if (status) {
            status.textContent = "Thanks! Your message has been sent. We'll get back to you within 24 hours.";
            status.className = 'form-status form-status--success';
          }
          form.reset();
        } else {
          throw new Error(result.message || 'Submission failed.');
        }
      } catch (error) {
        if (status) {
          status.textContent = 'Sorry, something went wrong. Please try again or email us directly at uaimportsexports@gmail.com.';
          status.className = 'form-status form-status--error';
        }
      } finally {
        if (submitButton) submitButton.disabled = false;
      }
    });
  });
}
