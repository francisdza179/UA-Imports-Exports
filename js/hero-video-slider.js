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
  let pendingTimeouts = new Set();

  const INTERVAL_TIME = 5000;
  const FADE_DURATION = 1800;

  function clearPendingTimeouts() {
    pendingTimeouts.forEach((id) => clearTimeout(id));
    pendingTimeouts.clear();
  }

  function preloadVideo(video) {
    if (video && video.getAttribute('preload') !== 'auto') {
      video.setAttribute('preload', 'auto');
      video.load();
    }
  }

  function showVideo(index) {
    clearPendingTimeouts();

    videos.forEach((video, i) => {
      video.classList.remove('is-active', 'is-reset');
      if (i !== index) {
        const id = setTimeout(() => {
          pendingTimeouts.delete(id);
          if (!video.classList.contains('is-active')) {
            video.pause();
            video.classList.add('is-reset');
            requestAnimationFrame(() => {
              video.classList.remove('is-reset');
            });
          }
        }, FADE_DURATION);
        pendingTimeouts.add(id);
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

    // Preload the next video for smoother transitions
    const nextIndex = (index + 1) % videos.length;
    preloadVideo(videos[nextIndex]);

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

  // Preload first batch for smooth startup
  function warmUpVideos() {
    for (let i = 1; i < Math.min(4, videos.length); i++) {
      preloadVideo(videos[i]);
    }
  }

  // Progressively preload remaining videos after playback starts
  function preloadRemainingVideos() {
    for (let i = 4; i < videos.length; i++) {
      preloadVideo(videos[i]);
    }
  }

  function startPlayer() {
    if (started) return;
    started = true;
    warmUpVideos();
    showVideo(0);
    startAutoplay();
    setTimeout(preloadRemainingVideos, FADE_DURATION + 200);
  }

  // Start as soon as first video can play
  const firstVideo = videos[0];
  if (firstVideo.readyState >= 2) {
    startPlayer();
  } else {
    firstVideo.addEventListener('canplay', () => {
      startPlayer();
    }, { once: true });
    setTimeout(startPlayer, 3000);
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  });
}
