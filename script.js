const ball = document.getElementById("ball");
const smoke = document.getElementById("smoke");
const sound = document.getElementById("smokeSound");

const results = [
  "IMG_3406.png",
  "IMG_3405.png",
  "IMG_3404.png",
  "IMG_3403.png",
  "IMG_3402.png",
  "IMG_3401.png"
];

let showingResult = false;

ball.addEventListener("click", () => {
  sound.currentTime = 0;
  sound.play();

  // show smoke
  smoke.style.opacity = 1;

  setTimeout(() => {
    if (!showingResult) {
      // random crystal ball with text
      const randomBall = results[Math.floor(Math.random() * results.length)];
      ball.src = randomBall;
      showingResult = true;
    } else {
      // go back to normal
      ball.src = "ball.PNG";
      showingResult = false;
    }
  }, 500);

  // hide smoke after 1s
  setTimeout(() => {
    smoke.style.opacity = 0;
  }, 1000);
});
