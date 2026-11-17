(() => {
  const items = [...document.querySelectorAll(':is(.robotics-page, .nuclear-page, .conventional-page) .story-tasks li, .ref-stages li, .ref-cost-grid article, .nuclear-page .flow-party li, .nuclear-page .specialist-agents article, .nuclear-page .trace-chain li, .nuclear-page .execution-steps li')];
  if (!items.length) return;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let observer;
  const timers = new Set();
  function setup() {
    if (observer) observer.disconnect();
    timers.forEach(clearTimeout);
    timers.clear();
    items.forEach(item => item.classList.remove('reveal-waiting'));
    if (motion.matches || document.documentElement.classList.contains('story-static') || !('IntersectionObserver' in window)) return;
    observer = new IntersectionObserver(entries => {
      let delay = 0;
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        const timer = setTimeout(() => {
          entry.target.classList.remove('reveal-waiting');
          timers.delete(timer);
        }, delay);
        timers.add(timer);
        delay += 120;
      });
    }, {threshold: 0.08, rootMargin: '0px 0px -12% 0px'});
    const unread = items.filter(item => item.getBoundingClientRect().bottom >= 0);
    unread.forEach(item => {
      item.classList.add('reveal-waiting');
      observer.observe(item);
    });
  }
  motion.addEventListener('change', setup);
  new MutationObserver(setup).observe(document.documentElement, {attributes:true, attributeFilter:['class']});
  setup();
})();
