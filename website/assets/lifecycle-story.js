(() => {
  const root = document.documentElement;
  const chapters = [...document.querySelectorAll('.story-stage')];
  if (!chapters.length) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const shortScreen = matchMedia('(max-height: 760px)');
  const button = document.querySelector('.story-mode');
  const navigation = [...document.querySelectorAll('.phase-nav a')];
  const data = chapters.map(chapter => ({chapter, tasks:[...chapter.querySelectorAll('.story-tasks li')]}));
  let showAll = reduced.matches;
  let pending = false;
  const clamp = value => Math.max(0, Math.min(1, value));
  function update() {
    pending = false;
    const top = document.querySelector('.site-header').getBoundingClientRect().height + document.querySelector('.phase-nav').getBoundingClientRect().height;
    document.querySelector('.lifecycle-story').style.setProperty('--scene-top', `${top}px`);
    let active = 0;
    data.forEach(({chapter,tasks}, index) => {
      const rect = chapter.getBoundingClientRect();
      const distance = Math.max(1, rect.height - (innerHeight - top));
      const progress = clamp((top - rect.top) / distance);
      if (rect.top <= top + innerHeight * .2) active = index;
      chapter.style.setProperty('--chapter-progress', progress);
      chapter.style.setProperty('--scene-scale', 1.045 - progress * .045);
      tasks.forEach((task, taskIndex) => {
        const reveal = showAll || reduced.matches || shortScreen.matches ? 1 : clamp((progress - .05 - taskIndex * .115) / .09);
        task.style.setProperty('--task-opacity', reveal);
        task.style.setProperty('--task-offset', `${(1 - reveal) * 16}px`);
      });
    });
    navigation.forEach(link => {
      const current = link.hash === `#${chapters[active].id}`;
      link.classList.toggle('active', current);
      if (current) link.setAttribute('aria-current','step'); else link.removeAttribute('aria-current');
    });
  }
  function schedule() { if (!pending) { pending = true; requestAnimationFrame(update); } }
  function mode() {
    root.classList.toggle('story-static', showAll || reduced.matches);
    button.setAttribute('aria-pressed', String(showAll || reduced.matches));
    button.disabled = reduced.matches;
    button.textContent = showAll || reduced.matches ? 'All tasks shown · enable scroll experience' : 'Show all tasks without animation';
    if (reduced.matches) button.textContent = 'All tasks shown · reduced motion enabled';
    update();
  }
  button.addEventListener('click', () => { showAll = !showAll; mode(); });
  reduced.addEventListener('change', () => {showAll = reduced.matches; mode();});
  shortScreen.addEventListener('change',schedule);
  addEventListener('scroll',schedule,{passive:true});
  addEventListener('resize',schedule);
  root.classList.add('story-ready');
  mode();
})();
