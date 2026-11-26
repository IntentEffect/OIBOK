(() => {
  'use strict';
  if (!document.body.classList.contains('brutalist-preview')) return;

  const standard = document.querySelector('[data-standard-view]');
  standard?.addEventListener('click', () => {
    const target = new URL(standard.getAttribute('href'), window.location.origin);
    target.search = window.location.search;
    target.hash = window.location.hash;
    standard.href = target.pathname + target.search + target.hash;
  });

  // Without JavaScript, all three transformations remain readable in the page.
  const model = document.querySelector('.home .transformations');
  if (!model) return;
  const panels = Array.from(model.children);
  if (panels.length !== 3 || panels.some(panel => !panel.querySelector('h3'))) return;
  const tabs = document.createElement('div');
  tabs.className = 'brutalist-model-tabs';
  tabs.setAttribute('role', 'tablist');
  tabs.setAttribute('aria-label', 'Organisational transformations');
  const buttons = panels.map((panel, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'brutalist-model-tab';
    button.id = `brutalist-model-tab-${index}`;
    button.textContent = panel.querySelector('h3').textContent;
    button.setAttribute('role', 'tab');
    panel.id = `brutalist-model-panel-${index}`;
    panel.classList.add('brutalist-model-panel');
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', button.id);
    panel.tabIndex = 0;
    button.setAttribute('aria-controls', panel.id);
    tabs.append(button);
    return button;
  });
  const select = (index, focus = false) => {
    buttons.forEach((button, position) => {
      button.setAttribute('aria-selected', String(position === index));
      button.tabIndex = position === index ? 0 : -1;
      panels[position].hidden = position !== index;
    });
    if (focus) buttons[index].focus();
  };
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => select(index));
    button.addEventListener('keydown', event => {
      const next = {ArrowRight:(index + 1) % 3, ArrowLeft:(index + 2) % 3, Home:0, End:2}[event.key];
      if (next !== undefined) { event.preventDefault(); select(next, true); }
    });
  });
  model.prepend(tabs);
  model.classList.add('brutalist-model-enhanced');
  select(0);
})();
