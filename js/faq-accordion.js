export function initFaqAccordion() {
  const faqSection = document.querySelector('.faq');
  if (!faqSection) return;

  const details = faqSection.querySelectorAll('details.faq__item');

  details.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      details.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
}