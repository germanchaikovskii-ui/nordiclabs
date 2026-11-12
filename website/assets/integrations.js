const strip = document.querySelector('.integrations');
const track = strip.querySelector('.integration-track');
const list = track.querySelector('ul');
const copy = list.cloneNode(true);
copy.setAttribute('aria-hidden', 'true');
track.append(copy);
const button = strip.querySelector('button');
const motion = matchMedia('(prefers-reduced-motion: reduce)');
function setScrolling(enabled) {
  strip.classList.toggle('scrolling', enabled);
  button.textContent = enabled ? 'Pause scrolling' : 'Resume scrolling';
}
function applyPreference() {
  button.hidden = motion.matches;
  setScrolling(!motion.matches);
}
button.addEventListener('click', () => setScrolling(!strip.classList.contains('scrolling')));
motion.addEventListener('change', applyPreference);
applyPreference();
