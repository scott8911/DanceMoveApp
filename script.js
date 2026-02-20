const moves = [
  {
    name: "Down Bounce",
    video: "https://res.cloudinary.com/dpde5dep1/video/upload/v1771568605/move1_nxbkhw.mp4"
  },
  {
    name: "2 Steps",
    video: "https://res.cloudinary.com/dpde5dep1/video/upload/v1771570948/dance_move_2_-_2_steps_auvbzj.mp4"
  }
];


function goTo(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}



function setSpeed(rate) {
    const video = document.getElementById('cloudinaryPlayer');
    video.playbackRate = rate;
}

function toggleLoop() {
    const video = document.getElementById('cloudinaryPlayer');
    video.loop = !video.loop;
}

const moveList = document.getElementById("moveList");
const moveTitle = document.getElementById("moveTitle");
const video = document.getElementById("cloudinaryPlayer");

moves.forEach((moveObj) => {
  const item = document.createElement("div");
  item.className = "move-item";
  item.textContent = moveObj.name;

  item.onclick = () => {
    moveTitle.textContent = moveObj.name;
    video.querySelector('source').src = moveObj.video; // load correct video
    video.load();      // reload the new video
    video.play();      // optional: auto-play
    goTo('moveDetail'); // switch to the video screen
  };

  moveList.appendChild(item);
});


