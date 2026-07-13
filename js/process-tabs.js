/* ============================================================
   UA IMPORTS & EXPORTS — Process Page Tabs
   Switches between the "For buyers" and "For farmers"
   timelines and swaps the matching heading.
   ============================================================ */

export function initProcessTabs() {
  const section = document.getElementById('process');
  if (!section) return;

  const tabs = section.querySelectorAll('.process__tab');
  const panels = section.querySelectorAll('.process__panel');
  if (!tabs.length || !panels.length) return;

  // Attributes whose value is a role key ("buyers" / "farmers") and which
  // should be shown only for the active panel.
  const swapAttrs = ['data-panel-heading', 'data-panel-eyebrow', 'data-panel-subtext'];

  function activate(tab) {
    const target = tab.dataset.tab;

    tabs.forEach((t) => {
      const active = t === tab;
      t.classList.toggle('active', active);
      t.setAttribute('aria-selected', active ? 'true' : 'false');
    });

    panels.forEach((panel) => {
      const show = panel.dataset.panel === target;
      panel.hidden = !show;
      // Reveal any reveal-animated descendants so nothing stays invisible
      // when a previously hidden panel becomes visible.
      if (show) {
        panel.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-revealed'));
      }
    });

    swapAttrs.forEach((attr) => {
      section.querySelectorAll(`[${attr}]`).forEach((el) => {
        el.hidden = el.getAttribute(attr) !== target;
      });
    });
  }

  tabs.forEach((tab) => tab.addEventListener('click', () => activate(tab)));
}
