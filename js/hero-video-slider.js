/* ============================================================
   UA IMPORTS & EXPORTS — Hero Video Slider
   Smooth crossfade between numbered background videos
   Plays 15 videos in sequence, 5 seconds each
   ============================================================ */

export function initHeroVideoSlider() {
  const videos = document.querySelectorAll('.hero__video');
  const dots = document.querySelectorAll('.hero__video-dot');

  if (videos.length === 0) return;

  let currentIndex = 0;
  let interval = null;
  let started = false;
  const INTERVAL_TIME = 5000;
  const FADE_DURATION = 1800;

  function showVideo(index) {
    videos.forEach((video, i) => {
      video.classList.remove('is-active');
      if (i !== index) {
        video.style.transform = 'translate3d(-50%, -50%, 0) scale(1)';
        setTimeout(() => {
          if (!video.classList.contains('is-active')) {
            video.pause();
          }
        }, FADE_DURATION);
      }
    });

    dots.forEach((dot) => dot.classList.remove('is-active'));

    const targetVideo = videos[index];
    targetVideo.classList.add('is-active');
    targetVideo.currentTime = 0;

    const playPromise = targetVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }

    // Preload the next two videos ahead for smoother transitions
    const nextIndex = (index + 1) % videos.length;
    const nextVideo = videos[nextIndex];
    if (nextVideo && nextVideo.getAttribute('preload') !== 'auto') {
      nextVideo.setAttribute('preload', 'auto');
    }

    if (dots[index]) {
      dots[index].classList.add('is-active');
    }

    currentIndex = index;
  }

  function nextVideo() {
    const nextIndex = (currentIndex + 1) % videos.length;
    showVideo(nextIndex);
  }

  function startAutoplay() {
    stopAutoplay();
    interval = setInterval(nextVideo, INTERVAL_TIME);
  }

  function stopAutoplay() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showVideo(index);
      startAutoplay();
    });
  });

  // Progressively preload first batch for smooth startup
  function warmUpVideos() {
    for (let i = 1; i < Math.min(4, videos.length); i++) {
      const video = videos[i];
      if (video && video.getAttribute('preload') !== 'auto') {
        video.setAttribute('preload', 'auto');
      }
    }
  }

  function startPlayer() {
    if (started) return;
    started = true;
    showVideo(0);
    startAutoplay();
  }

  // Start as soon as first video can play
  const firstVideo = videos[0];
  if (firstVideo.readyState >= 2) {
    warmUpVideos();
    startPlayer();
  } else {
    firstVideo.addEventListener('canplay', () => {
      warmUpVideos();
      startPlayer();
    }, { once: true });
    setTimeout(startPlayer, 2500);
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  });
}
