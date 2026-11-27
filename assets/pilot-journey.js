(() => {
  const sequence = document.querySelector('.pilot-sequence');
  const steps = [...document.querySelectorAll('.pilot-step')];
  const links = [...document.querySelectorAll('.rail-step')];
  if (!sequence || !steps.length) return;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const ns = 'http://www.w3.org/2000/svg';
  const cables = document.createElementNS(ns, 'svg');
  cables.classList.add('construction-cables');
  cables.setAttribute('aria-hidden', 'true');
  const paths = steps.slice(1).map(() => {
    const group = document.createElementNS(ns, 'g');
    const background = document.createElementNS(ns, 'path');
    const foreground = document.createElementNS(ns, 'path');
    background.classList.add('cable-guide');
    foreground.classList.add('cable-fill');
    foreground.setAttribute('pathLength', '1');
    group.append(background, foreground);
    cables.append(group);
    return {background, foreground, value: -1};
  });
  sequence.prepend(cables);
  let points = [];
  let pending = false;
  let needsMeasure = true;
  let active = -1;
  const clamp = value => Math.max(0, Math.min(1, value));
  function measure() {
    // Batch geometry reads only when layout changes, never on ordinary scrolling.
    const base = sequence.getBoundingClientRect();
    const bounds = steps.map(step => step.querySelector('.build-object').getBoundingClientRect());
    points = bounds.map(rect => ({x: rect.left + rect.width / 2 - base.left, y: rect.top + rect.height * .48 - base.top, absolute: rect.top + scrollY + rect.height * .48}));
    cables.setAttribute('viewBox', `0 0 ${base.width} ${base.height}`);
    paths.forEach((path, i) => {
      const a = points[i], b = points[i + 1];
      const d = `M${a.x} ${a.y} L${b.x} ${b.y}`;
      path.background.setAttribute('d', d);
      path.foreground.setAttribute('d', d);
      path.value = -1;
    });
    needsMeasure = false;
  }
  function update() {
    pending = false;
    if (needsMeasure) measure();
    const head = scrollY + innerHeight * .70;
    let next = -1;
    steps.forEach((step, i) => {
      const reached = motion.matches || head >= points[i].absolute;
      // The component is installed only after its incoming cable reaches it.
      step.classList.toggle('seen', reached);
      if (head >= points[i].absolute) next = i;
    });
    paths.forEach((path, i) => {
      const value = motion.matches ? 1 : clamp((head - points[i].absolute) / (points[i + 1].absolute - points[i].absolute));
      if (Math.abs(value - path.value) < .001) return;
      path.foreground.style.strokeDashoffset = String(1 - value);
      path.value = value;
    });
    if (next !== active) {
      active = next;
      links.forEach((link, i) => {
        link.classList.toggle('done', i <= active);
        if (i === active) link.setAttribute('aria-current', 'step');
        else link.removeAttribute('aria-current');
      });
    }
  }
  function schedule() { if (!pending) { pending = true; requestAnimationFrame(update); } }
  function resize() { needsMeasure = true; schedule(); }
  function syncMotion() {
    document.documentElement.classList.toggle('pilot-motion', !motion.matches);
    resize();
  }
  addEventListener('scroll', schedule, {passive:true});
  addEventListener('resize', resize);
  addEventListener('pageshow', resize);
  motion.addEventListener('change', syncMotion);
  if ('ResizeObserver' in window) new ResizeObserver(resize).observe(sequence);
  if (document.fonts) document.fonts.ready.then(resize);
  syncMotion();
})();
