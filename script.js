function goTo(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}
function openMove(moveName) {
    const moveTitle = document.getElementById('moveTitle');
    const videoContainer = document.getElementById('videoContainer');
    const biliPlayer = document.getElementById('biliPlayer');

    moveTitle.innerText = moveName.toUpperCase();

    let videoUrl = '';

    if (moveName === 'Down Bounce') {
        videoUrl = 'https://player.bilibili.com/player.html?bvid=BV1K4ZiB9EAc&page=1';
    }

    if (videoUrl) {
        biliPlayer.src = videoUrl;
        videoContainer.style.display = 'block';
    } else {
        videoContainer.style.display = 'none';
    }

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
