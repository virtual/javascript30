// Video player

// Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build our functions
function togglePlay() {

    if (video.paused) { // There's no played property
        video.play();
    } else {
        video.pause();
    }
    return false;

}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
    console.log(icon)
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

// Listen to the video when it is paused to change icon
