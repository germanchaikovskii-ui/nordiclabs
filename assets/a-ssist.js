const gallery = document.querySelector('[data-assist-gallery]');

if (gallery) {
  const screens = Array.from(gallery.querySelectorAll('[data-screen]'));
  const controls = gallery.querySelector('[data-controls]');
  const count = gallery.querySelector('[data-count]');
  const play = gallery.querySelector('[data-play]');
  const announcement = gallery.querySelector('[data-announcement]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0;
  let playing = !reducedMotion.matches;
  let visible = false;
  let timer;

  function show(next, announce = false) {
    screens[index].hidden = true;
    index = (next + screens.length) % screens.length;
    screens[index].hidden = false;
    count.textContent = `${index + 1} / ${screens.length}`;
    if (announce) announcement.textContent = screens[index].querySelector('figcaption').textContent;
  }

  function schedule() {
    clearInterval(timer);
    play.textContent = playing ? 'Pause' : 'Play';
    if (playing && visible && !document.hidden) {
      timer = setInterval(() => show(index + 1), 6500);
    }
  }

  for (const [selector, step] of [['[data-previous]', -1], ['[data-next]', 1]]) {
    gallery.querySelector(selector).addEventListener('click', () => {
      playing = false;
      show(index + step, true);
      schedule();
    });
  }
  play.addEventListener('click', () => {
    playing = !playing;
    schedule();
  });
  reducedMotion.addEventListener('change', (event) => {
    if (event.matches) playing = false;
    schedule();
  });
  document.addEventListener('visibilitychange', schedule);

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      schedule();
    }, { threshold: .25 }).observe(gallery);
  } else {
    visible = true;
  }

  controls.hidden = false;
  schedule();
}
