const strip = document.querySelector('.integrations');
const track = strip.querySelector('.integration-track');
const duplicate = track.querySelector('ul').cloneNode(true);
duplicate.setAttribute('aria-hidden', 'true');
track.append(duplicate);
strip.classList.add('scrolling');
