const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#navigation');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
  });
  const close = () => { toggle.setAttribute('aria-expanded', 'false'); menu.classList.remove('is-open'); };
  menu.addEventListener('click', event => { if (event.target.closest('a')) close(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { close(); toggle.focus(); } });
}
const stages = document.querySelectorAll('.stage[id]');
if (stages.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      stages.forEach(stage => stage.classList.toggle('is-active', stage === entry.target));
      document.querySelectorAll('.phase-nav a').forEach(link => {
        const active = link.hash === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'step'); else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
  stages.forEach(stage => observer.observe(stage));
}

// Illuminate the continuous rail as the visitor progresses through the lifecycle.
const timeline = document.querySelector('.timeline');
if (timeline) {
  let scheduled = false;
  const updateProgress = () => {
    const bounds = timeline.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (innerHeight * .45 - bounds.top) / bounds.height));
    timeline.style.setProperty('--progress', progress);
    scheduled = false;
  };
  addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(updateProgress); } }, {passive:true});
  addEventListener('resize', updateProgress);
  updateProgress();
}
