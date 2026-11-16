(() => {
  const banner = document.querySelector(".nuclear-film");
  if (!banner) return;
  const video = banner.querySelector("video");
  const control = banner.querySelector("button");
  const cues = [...banner.querySelectorAll("[data-start]")];
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let current = cues[0];
  let userPaused = false;
  let userRequestedPlay = false;
  let playPending = false;
  let inView = true;
  // Set media properties before the first attempt, including on restored pages.
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.preload = "metadata";
  video.autoplay = !motion.matches;

  function updateCaption() {
    const next = cues.findLast(cue => Number(cue.dataset.start) <= video.currentTime) || cues[0];
    if (current !== next) {
      current.hidden = true;
      next.hidden = false;
      current = next;
    }
  }

  function updateControl() {
    control.textContent = video.paused ? "Play video" : "Pause video";
  }

  function play() {
    if (playPending || !video.paused || userPaused || document.hidden || !inView ||
        (motion.matches && !userRequestedPlay) || video.error) return;
    video.muted = true;
    playPending = true;
    Promise.resolve(video.play()).catch(updateControl).finally(() => {
      playPending = false;
      if (document.hidden || !inView) video.pause();
      updateControl();
    });
  }

  control.hidden = false;
  control.addEventListener("click", () => {
    if (video.paused) {
      userPaused = false;
      userRequestedPlay = true;
      play();
    } else {
      userPaused = true;
      video.autoplay = false;
      video.pause();
    }
  });
  video.addEventListener("timeupdate", updateCaption);
  video.addEventListener("seeked", updateCaption);
  video.addEventListener("play", updateControl);
  video.addEventListener("pause", updateControl);
  video.addEventListener("error", () => {
    video.hidden = true;
    control.hidden = true;
    current.hidden = true;
    cues[0].hidden = false;
  });
  motion.addEventListener("change", () => {
    userRequestedPlay = false;
    video.autoplay = !motion.matches && !userPaused;
    if (motion.matches) video.pause();
    else play();
  });
  // Retry when media becomes ready or the browser restores a background page.
  // User pauses and reduced-motion preferences remain authoritative.
  video.addEventListener("loadeddata", play);
  video.addEventListener("canplay", play);
  window.addEventListener("pageshow", play);
  function syncPlayback() {
    if (document.hidden || !inView) video.pause();
    else play();
  }
  document.addEventListener("visibilitychange", syncPlayback);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      syncPlayback();
    }, {rootMargin: '100px 0px'}).observe(banner);
  }
  // Some mobile browsers require interaction even for muted inline video.
  document.addEventListener("pointerdown", event => {
    if (!control.contains(event.target)) play();
  }, {passive: true});
  document.addEventListener("keydown", event => {
    if (!control.contains(event.target)) play();
  });
  updateControl();
  play();
})();
