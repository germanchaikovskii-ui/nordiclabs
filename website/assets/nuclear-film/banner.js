(() => {
  const banner = document.querySelector(".nuclear-film");
  const video = banner.querySelector("video");
  const control = banner.querySelector("button");
  const cues = [...banner.querySelectorAll("[data-start]")];
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let current = cues[0];

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
    video.play().catch(updateControl);
  }

  control.hidden = false;
  control.addEventListener("click", () => {
    if (video.paused) play();
    else video.pause();
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
    if (motion.matches) video.pause();
  });
  if (!motion.matches) play();
})();
