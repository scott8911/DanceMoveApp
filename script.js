function goTo(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function openMove(moveName) {
    const moveTitle = document.getElementById('moveTitle');
    const videoButton = document.getElementById('playVideo');

    moveTitle.innerText = moveName.toUpperCase();

    let videoSrc = '';
    if (moveName === 'The Wop') {
        videoSrc = 'videos/move1.mp4';
    } else if (moveName === 'Smurf') {
        videoSrc = 'videos/move2.mp4';
    } else {
        videoSrc = '';
    }

    videoButton.setAttribute('data-src', videoSrc);

    const videoElement = document.getElementById('demoVideo');
    videoElement.style.display = 'none';
    videoElement.pause();
    videoElement.currentTime = 0;

    goTo('moveDetail');
}

function playVideo(btn) {
    const video = document.getElementById('demoVideo');
    const src = btn.getAttribute('data-src');

    if (!src) {
        alert('No video available for this move.');
        return;
    }

    video.querySelector('source').src = src;
    video.load();
    video.style.display = 'block';
    video.play();
}