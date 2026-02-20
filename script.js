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
  item.className = "card move-item";

  // layout: name + small video preview
  item.innerHTML = `
    <div class="move-name">${moveObj.name}</div>
    <div class="move-preview">
        <video src="${moveObj.video}" muted loop playsinline></video>
    </div>
  `;

  // autoplay preview on hover
  const previewVideo = item.querySelector("video");
  item.addEventListener("mouseenter", () => previewVideo.play());
  item.addEventListener("mouseleave", () => previewVideo.pause());

  // click to open move detail
  item.onclick = () => {
    moveTitle.textContent = moveObj.name;
    moveTag.innerHTML = moveObj.tag;
    moveDescription.innerHTML = moveObj.description;
    moveKeyFocus.innerHTML = moveObj.keyFocus;

    video.querySelector('source').src = moveObj.video;
    video.load();
    video.play();
    goTo('moveDetail');
  };

  moveList.appendChild(item);
}); 

  item.onclick = () => {
    moveTitle.textContent = moveObj.name;
    video.querySelector('source').src = moveObj.video; // load correct video
    video.load();      // reload the new video
    video.play();      // optional: auto-play
    goTo('moveDetail'); // switch to the video screen
  };

  moveList.appendChild(item);
});


/* ===== DYNAMIC MOVE LIST WITH RELIABLE PREVIEW ===== */
const moveList = document.getElementById("moveList");
const moveTitle = document.getElementById("moveTitle");
const moveTag = document.getElementById("moveTag");
const moveDescription = document.getElementById("moveDescription");
const moveKeyFocus = document.getElementById("moveKeyFocus");
const mainVideo = document.getElementById("cloudinaryPlayer");

moves.forEach((moveObj, index) => {

  const item = document.createElement("div");
  item.className = "move-item";

  item.innerHTML = `
    <div class="move-name">${moveObj.name}</div>
    <div class="move-preview">
      <video 
        muted 
        loop 
        playsinline 
        preload="metadata"
      >
        <source src="${moveObj.video}?v=${index}" type="video/mp4">
      </video>
    </div>
  `;

  const previewVideo = item.querySelector("video");

  // Force correct preview behavior
  previewVideo.addEventListener("loadeddata", () => {
    previewVideo.currentTime = 0;
  });

  // Autoplay (required for consistent preview)
  previewVideo.play().catch(() => {
    // if autoplay blocked, allow hover fallback
    item.addEventListener("mouseenter", () => previewVideo.play());
    item.addEventListener("mouseleave", () => previewVideo.pause());
  });

  // Click to open detail
  item.addEventListener("click", () => {
    moveTitle.textContent = moveObj.name;
    moveTag.innerHTML = moveObj.tag;
    moveDescription.innerHTML = moveObj.description;
    moveKeyFocus.innerHTML = moveObj.keyFocus;

    mainVideo.querySelector("source").src = moveObj.video;
    mainVideo.load();
    mainVideo.play();

    goTo("moveDetail");
  });

  moveList.appendChild(item);
});

