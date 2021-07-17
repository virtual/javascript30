// Video player

// Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const actionButton = player.querySelector('[data-action]');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build our functions
function togglePlay() {
  console.log('toggleplay')
    if (video.paused) { // There's no played property
        video.play();
    } else {
        video.pause();
    }
    return false;

}

function skip(el) {
  skipDuration = el.dataset.skip;
  video.currentTime += parseFloat(skipDuration);
}

function handleRangeUpdate(el) {
  video[el.name] = el.value;
}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
    console.log(icon)
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = percent + "%";
}

function scrub(el) {
  const scrubTime = el.offsetX / progress.offsetWidth * video.duration;
  video.currentTime = scrubTime;
}

function toggleFullScreen() {
  video.requestFullScreen();
}

// Hook up our event listeners

// Unnecessary as the video autoplays on click
// video.addEventListener('click', function(e) {
//     console.log('talk')
//     togglePlay();
// })

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', function(e) {
  togglePlay();
})

video.addEventListener('timeupdate', function(e) {
  handleProgress();
})

let mousedown = false;
progress.addEventListener('click', function(e) {
  scrub(e);
})

progress.addEventListener('mousemove', function(e) {
  if (mousedown && scrub(e));
})

progress.addEventListener('mousedown', function(e) {
  mousedown = true;
})
progress.addEventListener('mouseup', function(e) {
  mousedown = false;
})
actionButton.addEventListener('click', function(e) {
  if (video.requestFullscreen) 
        video.requestFullscreen();
    else if (video.webkitRequestFullscreen) 
        video.webkitRequestFullscreen();
    else if (video.msRequestFullScreen) 
      video.msRequestFullScreen();
})

skipButtons.forEach(function(e) {
  e.addEventListener('click', function(e) {
    skip(this);
  })
})

ranges.forEach(function(e) {
  e.addEventListener('click', function(e) {
    handleRangeUpdate(this);
  })
})


// Listen to the video when it is paused to change icon
