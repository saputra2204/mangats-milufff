const decorations = document.getElementById("bg-decorations");
const clickInvite = document.getElementById("click-invite");
const mainMessage = document.getElementById("main-message");
const character = document.getElementById("character");

clickInvite.addEventListener("click", () => {
  clickInvite.style.display = "none";

  mainMessage.style.opacity = 1;
  character.classList.remove("hidden");

  // Generate background decorations
  const spacing = 50;
  const cols = Math.floor(window.innerWidth / spacing);
  const rows = Math.floor(window.innerHeight / spacing);
  let delay = 0;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const deco = document.createElement("div");
      deco.className = `tiny ${ (x + y) % 2 === 0 ? "heart" : "flower" }`;
      deco.style.left = `${x * spacing}px`;
      deco.style.top = `${y * spacing}px`;
      deco.style.animationDelay = `${delay}s`;
      decorations.appendChild(deco);
      delay += 0.002;
    }
  }
});