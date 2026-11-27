(() => {
  const strip = document.querySelector('.integrations');
  if (!strip) return;
  const track = strip.querySelector('.integration-track');
  const duplicate = track.querySelector('ul').cloneNode(true);
  duplicate.setAttribute('aria-hidden', 'true');
  track.append(duplicate);
  strip.classList.add('scrolling');
  let inView = true;
  const sync = () => strip.classList.toggle('animation-idle', document.hidden || !inView);
  document.addEventListener('visibilitychange', sync);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      sync();
    }).observe(strip);
  }
  sync();
})();
