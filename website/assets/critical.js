(() => {
  const items = [...document.querySelectorAll('[data-reveal]')];
  if (!items.length || !('IntersectionObserver' in window)) return;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let observer;
  function setup() {
    if (observer) observer.disconnect();
    items.forEach(item => item.classList.remove('critical-pending'));
    if (motion.matches) return;
    observer = new IntersectionObserver(entries => {
      let delay = 0;
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.style.transitionDelay = `${delay}ms`;
        delay += 100;
        entry.target.classList.remove('critical-pending');
        observer.unobserve(entry.target);
      });
    }, {threshold: .08, rootMargin: '0px 0px -6% 0px'});
    const unread = items.filter(item => item.getBoundingClientRect().bottom >= 0);
    unread.forEach(item => {
      item.classList.add('critical-pending');
      observer.observe(item);
    });
  }
  motion.addEventListener('change', setup);
  setup();
})();
