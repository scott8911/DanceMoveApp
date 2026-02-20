/* ===== MOVES DATA ===== */
const moves = [
  {
    name: "Down Bounce",
    video: "https://res.cloudinary.com/dpde5dep1/video/upload/v1771568605/move1_nxbkhw.mp4",
    tag: "Bounce • Beginner • Groove",
    description: "Classic bounce groove focusing on grounded rhythm and body control.",
    keyFocus: "- Downward energy<br>- Core control<br>- Timing on 1 & 2"
  },
  {
    name: "2 Steps",
    video: "https://res.cloudinary.com/dpde5dep1/video/upload/v1771570948/dance_move_2_-_2_steps_auvbzj.mp4",
    tag: "Step • Beginner • Groove",
    description: "Basic 2-step move with emphasis on timing and footwork.",
    keyFocus: "- Foot coordination<br>- Timing<br>- Smooth transitions"
  }
];

/* ===== NAVIGATION ===== */
function goTo(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

/* ===== VIDEO CONTROLS ===== */
function setSpeed(rate) {
  const video = document.getElementById('cloudinaryPlayer');
  video.playbackRate = rate;
}

function toggleLoop() {
  const video = document.getElementById('cloudinaryPlayer');
  video.loop = !video.loop;
}

/* ===== SAVE MOVE (placeholder) ===== */
function saveMove() {
  alert("Move saved!");
}

/* ===== INIT ===== */
document.addEventListener("DOMContentLoaded", () => {

  const moveList = document.getElementById("moveList");
  const moveTitle = document.getElementById("moveTitle");
  const moveTag = document.getElementById("moveTag");
  const moveDescription = document.getElementById("moveDescription");
  const moveKeyFocus = document.getElementById("moveKeyFocus");
  const mainVideo = document.getElementById("cloudinaryPlayer");

  moves.forEach((moveObj) => {

    const item = document.createElement("div");
    item.className = "card move-item";

    item.innerHTML = `
      <div class="move-name">${moveObj.name}</div>
      <div class="move-preview">
        <video muted loop playsinline preload="metadata" width="120" height="80">
          <source src="${moveObj.video}" type="video/mp4">
        </video>
      </div>
    `;

    const previewVideo = item.querySelector("video");

    // Hover preview
    item.addEventListener("mouseenter", () => {
      previewVideo.currentTime = 0;
      previewVideo.play().catch(()=>{});
    });

    item.addEventListener("mouseleave", () => {
      previewVideo.pause();
    });

    // Click to main video
    item.addEventListener("click", () => {
      moveTitle.textContent = moveObj.name;
      moveTag.innerHTML = moveObj.tag;
      moveDescription.innerHTML = moveObj.description;
      moveKeyFocus.innerHTML = moveObj.keyFocus;

      mainVideo.pause();
      mainVideo.src = moveObj.video;
      mainVideo.load();
      mainVideo.play().catch(err => {
        console.warn("Autoplay blocked or video error", err);
      });

      goTo("moveDetail");
    });

    moveList.appendChild(item);
  });

  // Optional: filter by search input
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    moveList.querySelectorAll(".move-item").forEach(card => {
      const name = card.querySelector(".move-name").textContent.toLowerCase();
      card.style.display = name.includes(query) ? "block" : "none";
    });
  });

});
