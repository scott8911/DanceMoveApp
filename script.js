function goTo(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function openMove(moveName) {
    const moveTitle = document.getElementById('moveTitle');
    const videoSource = document.getElementById('videoSource');
    const video = document.getElementById('demoVideo');

    moveTitle.innerText = moveName.toUpperCase();

    if (moveName === 'Down Bounce') {
        videoSource.src = "https://res.cloudinary.com/dpde5dep1/video/upload/move1_gethq6.mp4";
    }

    video.load();
    video.playbackRate = 1;
    video.loop = false;

    goTo('moveDetail');
}

function setSpeed(rate) {
    const video = document.getElementById('demoVideo');
    video.playbackRate = rate;
}

function toggleLoop() {
    const video = document.getElementById('demoVideo');
    video.loop = !video.loop;
}
