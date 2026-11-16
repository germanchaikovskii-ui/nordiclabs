(() => {
  const steps = [...document.querySelectorAll('.pilot-step')];
  const links = [...document.querySelectorAll('.rail-step')];
  if (!steps.length || !('IntersectionObserver' in window)) return;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const visible = new Set();
  let active = -1;
  const reveal = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('seen');
        reveal.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});
  steps.forEach(step => reveal.observe(step));
  const progress = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const index = Number(entry.target.dataset.step);
      if (entry.isIntersecting) visible.add(index);
      else visible.delete(index);
    });
    if (!visible.size) return;
    const next = Math.min(...visible);
    if (next === active) return;
    active = next;
    links.forEach((link, index) => {
      link.classList.toggle('done', index <= active);
      if (index === active) link.setAttribute('aria-current', 'step');
      else link.removeAttribute('aria-current');
    });
  }, {rootMargin: '-40% 0px -50% 0px', threshold: 0});
  steps.forEach(step => progress.observe(step));
  const syncMotion = () => document.documentElement.classList.toggle('pilot-motion', !motion.matches);
  motion.addEventListener('change', syncMotion);
  syncMotion();
})();
