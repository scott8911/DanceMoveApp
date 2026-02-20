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
const moveTag = document.getElementById("moveTag");
const moveDescription = document.getElementById("moveDescription");
const moveKeyFocus = document.getElementById("moveKeyFocus");
const video = document.getElementById("cloudinaryPlayer");

moves.forEach((moveObj, index) => {
  const item = document.createElement("div");
  item.className = "card move-item";

  item.innerHTML = `
    <div class="move-name">${moveObj.name}</div>
    <div class="move-preview">
      <video 
        muted 
        loop 
        playsinline 
        preload="metadata"
        width="120"
        height="80"
      >
        <source src="${moveObj.video}?v=${index}" type="video/mp4">
      </video>
    </div>
  `;

  const previewVideo = item.querySelector("video");

  // hover preview (stable)
  item.addEventListener("mouseenter", () => {
    previewVideo.currentTime = 0;
    previewVideo.play();
  });

  item.addEventListener("mouseleave", () => {
    previewVideo.pause();
  });

  // click to open detail
  item.addEventListener("click", () => {
    moveTitle.textContent = moveObj.name;

    if (moveTag) moveTag.innerHTML = moveObj.tag || "";
    if (moveDescription) moveDescription.innerHTML = moveObj.description || "";
    if (moveKeyFocus) moveKeyFocus.innerHTML = moveObj.keyFocus || "";

    video.querySelector("source").src = moveObj.video;
    video.load();
    video.play();

    goTo("moveDetail");
  });

  moveList.appendChild(item);
});

