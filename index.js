const music_win = new Audio("./music/win.mp3");
const music_lost = new Audio("./music/lost.mp3");
const question = document.querySelector(".question");
let random = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let record = 0;
document.querySelector(".score").textContent = score;

console.log("Random number:", random);

document.querySelector(".btn_check").addEventListener("click", () => {
  const guess = +document.querySelector("input").value;

  if (!guess) {
    displayMassage("Ви не ввели число !");
  } else if (random === guess) {
    question.innerHTML = guess;
    document.querySelector("body").classList.add("boxWin");
    music_win.play();
    displayMassage("Ви вгадали!");
    funRecords();
  } else {
    if (score > 1) {
      if (guess > random) {
        displayMassage("Ваше число більше !");
        score--;
        document.querySelector(".score").textContent = score;
      } else if (guess < random) {
        displayMassage("Ваше число меньше !");
        score--;
        document.querySelector(".score").textContent = score;
      }
    } else {
      displayMassage("Ви програли !");
      music_lost.play();
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").classList.add("boxLost");
    }
  }
});

// button reset
document.querySelector(".btn__reset").addEventListener("click", () => {
  document.querySelector("body").classList.remove("boxWin");
  document.querySelector("body").classList.remove("boxLost");
  displayMassage("Введіть задумане число");
  question.innerHTML = "?";
  document.querySelector("input").value = "";
  random = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  console.log("New random number:", random);
});

// Функція яка записуе рекорд !
const funRecords = () => {
  if (score > record) {
    record = score;
    document.querySelector(".record").textContent = record;
  }
};
//   Функція яка виводить текст на головний екран
const displayMassage = (message) => {
  document.querySelector(".message").textContent = message;
};
