function goTo(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function openMove(moveName) {
    const moveTitle = document.getElementById('moveTitle');
    const player = document.getElementById('cloudinaryPlayer');

    moveTitle.innerText = moveName.toUpperCase();

    if (moveName === 'Down Bounce') {
        player.src = "https://player.cloudinary.com/embed/?cloud_name=dpde5dep1&public_id=move1_gethq6";
    } else {
        player.src = "";
    }

    goTo('moveDetail');
}
