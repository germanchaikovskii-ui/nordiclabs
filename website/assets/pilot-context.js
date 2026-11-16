(() => {
  // Explicit source in the URL survives reloads and keeps separate tabs independent.
  const sources = {
    conventional: {department: 'industrial', label: 'Industrial AI', path: 'industrial/conventional/'},
    nuclear: {department: 'industrial', label: 'Industrial AI', path: 'industrial/nuclear/'},
    robotics: {department: 'robotics', label: 'Robotics AI', path: 'robotics/'}
  };
  const root = new URL('../../../', location.href);
  if (new URLSearchParams(location.search).get('source') === 'robotics') {
    location.replace(new URL('robotics/pilot/' + location.hash, root).href);
    return;
  }
  const source = sources[new URLSearchParams(location.search).get('source')];
  // Direct visits offer both departments rather than guessing a recipient.
  if (!source) return;
  document.querySelectorAll('[data-pilot-contact]').forEach(link => {
    link.hidden = link.dataset.pilotContact !== source.department;
    if (!link.hidden) link.innerHTML = 'Discuss Your Pilot <span aria-hidden="true">↗</span>';
  });
  document.querySelectorAll('[data-pilot-email]').forEach(link => {
    link.hidden = link.dataset.pilotEmail !== source.department;
  });
  const back = document.querySelector('.pilot-back');
  back.href = new URL(source.path, root).href;
  back.textContent = '← ' + source.label;
  const reference = document.querySelector('[data-pilot-reference]');
  reference.href = new URL(source.path + 'reference-solutions/', root).href;
  reference.innerHTML = 'Explore Reference Solutions <span aria-hidden="true">↗</span>';
  const nav = document.querySelector('.navigation a[href="../../../' + source.department + '/"]');
  if (nav) nav.setAttribute('aria-current', 'location');
})();
