(() => {
  const root = document.getElementById('oibok-detailed-model');
  if (!root) return;
  const model = root.querySelector('.oi-model');
  const svg = root.querySelector('.oi-connectors');
  const detail = root.querySelector('#oi-detail');
  const detailTitle = root.querySelector('#oi-detail-title');
  const announcement = root.querySelector('#oi-announcement');
  const closeButton = root.querySelector('#oi-close');
  const buttons = Array.from(root.querySelectorAll('button[data-key]'));
  const fields = Object.fromEntries(Array.from(detail.querySelectorAll('[data-field]')).map(node => [node.dataset.field, node]));
  const slots = Object.fromEntries(Array.from(root.querySelectorAll('[data-detail-slot]')).map(node => [node.dataset.detailSlot, node]));
  const payload = JSON.parse(document.getElementById('oi-model-data').textContent);
  const {chapters, resources, areas: data} = payload;
  const base = `${root.dataset.basePath || ''}/`;
  buttons.forEach(button => { button.disabled = false; });
  closeButton.disabled = false;

  let selected = null;
  let activeButton = null;
  const ns = 'http://www.w3.org/2000/svg';
  const createSvg = (name, attrs, parent = svg) => {
    const element = document.createElementNS(ns, name);
    Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, String(value)));
    parent.appendChild(element);
    return element;
  };
  const relative = node => {
    const rect = node.getBoundingClientRect();
    const origin = model.getBoundingClientRect();
    return {x: rect.left - origin.left, y: rect.top - origin.top, w: rect.width, h: rect.height, right: rect.right - origin.left, bottom: rect.bottom - origin.top, cx: rect.left - origin.left + rect.width / 2, cy: rect.top - origin.top + rect.height / 2};
  };
  const node = key => relative(root.querySelector(`button[data-key="${key}"]`));
  function path(d, keys = []) {
    const active = keys.includes(selected);
    createSvg('path', {d, class: 'oi-path', 'data-active': String(active), 'marker-end': `url(#oi-arrow-${active ? 'active' : 'neutral'})`});
  }
  function railLabel(text, x, y, angle) {
    const label = createSvg('text', {x, y, class: 'oi-path-label oi-small', 'text-anchor': 'middle', transform: `rotate(${angle},${x},${y})`});
    label.textContent = text;
  }
  function draw() {
    const width = model.clientWidth;
    const height = model.offsetHeight;
    if (!width || !height) return;
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    svg.replaceChildren();
    const defs = createSvg('defs', {});
    [['neutral', 'var(--muted)'], ['active', 'var(--accent)']].forEach(([key, fill]) => {
      const marker = createSvg('marker', {id: `oi-arrow-${key}`, viewBox: '0 0 8 8', refX: 7, refY: 4, markerWidth: 5, markerHeight: 5, orient: 'auto-start-reverse'}, defs);
      createSvg('path', {d: 'M 0 0 L 8 4 L 0 8 Z', fill}, marker);
    });
    const stages = Object.fromEntries(['orient', 'coordinate', 'improve'].map(key => [key, relative(root.querySelector(`[data-transform="${key}"]`))]));
    const heads = Object.fromEntries(['orient', 'coordinate', 'improve'].map(key => [key, relative(root.querySelector(`[data-transform="${key}"] .oi-transform-heading`))]));
    const entry = relative(root.querySelector('.oi-entry'));
    path(`M ${width / 2} ${entry.bottom + 5} V ${heads.orient.y - 8}`, ['sense', 'context', 'know', 'orientation']);
    const s = node('sense'), k = node('know'), c = node('context');
    path(`M ${s.cx} ${s.y - 5} V ${c.cy} H ${c.x - 5}`, ['sense', 'context']);
    path(`M ${c.right + 5} ${c.cy} H ${k.cx} V ${k.y - 5}`, ['context', 'know']);
    const orientCaps = relative(root.querySelector('[data-transform="orient"] .oi-capabilities'));
    const orientationTop = relative(root.querySelector('.oi-orientation')).y;
    const mergeY = orientationTop - 19;
    path(`M ${s.cx} ${orientCaps.bottom + 5} V ${mergeY} H ${width / 2} V ${orientationTop - 6}`, ['sense', 'orientation']);
    path(`M ${k.cx} ${orientCaps.bottom + 5} V ${mergeY} H ${width / 2}`, ['know', 'orientation']);
    const ch = node('choose'), mo = node('mobilise');
    path(`M ${ch.right + 4} ${ch.cy} H ${mo.x - 5}`, ['choose', 'mobilise']);
    const coordCaps = relative(root.querySelector('[data-transform="coordinate"] .oi-capabilities'));
    const feedbackTop = relative(root.querySelector('.oi-feedback')).y;
    path(`M ${mo.cx} ${coordCaps.bottom + 5} V ${feedbackTop - 19} H ${width / 2} V ${feedbackTop - 6}`, ['mobilise', 'feedback']);
    const le = node('learn'), ad = node('adapt');
    path(`M ${le.right + 4} ${le.cy} H ${ad.x - 5}`, ['learn', 'adapt']);
    path(`M ${width / 2} ${stages.orient.bottom + 8} V ${heads.coordinate.y - 8}`, ['orientation', 'choose']);
    path(`M ${width / 2} ${stages.coordinate.bottom + 8} V ${heads.improve.y - 8}`, ['feedback', 'learn']);
    const narrow = width <= 540;
    const leftRail = narrow ? 8 : 12;
    const rightRail = width - leftRail;
    const returnY = le.cy;
    path(`M ${stages.improve.x - 4} ${returnY} H ${leftRail} V ${heads.orient.cy} H ${stages.orient.x - 6}`, ['learn', 'adapt', 'connections']);
    path(`M ${stages.improve.right + 4} ${returnY} H ${rightRail} V ${heads.coordinate.cy} H ${stages.coordinate.right + 6}`, ['learn', 'adapt', 'connections']);
    railLabel('Revisit understanding', leftRail + 13, (heads.orient.cy + returnY) / 2, -90);
    railLabel('Retain or revise response', rightRail - 13, (heads.coordinate.cy + returnY) / 2, 90);
  }
  function setList(field, values) {
    fields[field].replaceChildren();
    values.forEach(value => {
      const li = document.createElement('li');
      li.textContent = value;
      fields[field].appendChild(li);
    });
  }
  function setLinks(field, values) {
    fields[field].replaceChildren();
    values.forEach(([label, href]) => {
      const anchor = document.createElement('a');
      anchor.textContent = label;
      anchor.href = href;
      fields[field].appendChild(anchor);
    });
  }
  function closeDetail(returnFocus = false) {
    const previous = activeButton;
    selected = null;
    activeButton = null;
    detail.hidden = true;
    root.appendChild(detail);
    buttons.forEach(button => {
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-pressed', 'false');
    });
    announcement.textContent = 'Detail closed. Full OIBOK map available.';
    if (returnFocus && previous) previous.focus({preventScroll: true});
    draw();
  }
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const key = button.dataset.key;
      if (selected === key) { closeDetail(); return; }
      const item = data[key];
      selected = key;
      activeButton = button;
      buttons.forEach(other => {
        other.setAttribute('aria-expanded', String(other === button));
        other.setAttribute('aria-pressed', String(other === button));
      });
      detailTitle.textContent = item.title;
      ['kind', 'purpose', 'people', 'ai', 'boundary', 'breakdown', 'question'].forEach(field => { fields[field].textContent = item[field]; });
      setList('work', item.work);
      setList('evidence', item.evidence);
      setLinks('sources', item.sources.map(id => [chapters[id][0], `${base}knowledge/${chapters[id][1]}/`]));
      setLinks('tools', item.tools.map(id => [resources[id][0], base + resources[id][1]]));
      slots[button.dataset.slot].appendChild(detail);
      detail.hidden = false;
      announcement.textContent = `${item.title}: details expanded below this part of the model.`;
      draw();
    });
  });
  closeButton.addEventListener('click', () => closeDetail(true));
  detail.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeDetail(true);
  });
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(draw);
    observer.observe(model);
  } else {
    window.addEventListener('resize', draw);
  }
  if (document.fonts?.ready) document.fonts.ready.then(draw);
  draw();
})();
