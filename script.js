function goTo(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function openMove(moveName) {
    const moveTitle = document.getElementById('moveTitle');
    const video = document.getElementById('cloudinaryPlayer');

    moveTitle.innerText = moveName.toUpperCase();

    if (moveName === 'Down Bounce') {
        video.querySelector('source').src =
            "https://res.cloudinary.com/dpde5dep1/video/upload/move1_gethq6.mp4";
    }

    video.load();              // reload with new source
    video.playbackRate = 1;
    video.loop = false;

    goTo('moveDetail');
}

function setSpeed(rate) {
    const video = document.getElementById('cloudinaryPlayer');
    video.playbackRate = rate;
}

function toggleLoop() {
    const video = document.getElementById('cloudinaryPlayer');
    video.loop = !video.loop;
}
