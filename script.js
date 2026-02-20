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
        "https://res.cloudinary.com/dpde5dep1/video/upload/v1771568605/move1_nxbkhw.mp4";
} else if (moveName === '2 Steps') {
    video.querySelector('source').src =
        "https://res.cloudinary.com/dpde5dep1/video/upload/v1771570948/dance_move_2_-_2_steps_auvbzj.mp4";
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

