const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const celebration = document.getElementById("celebration");
const yaySound = document.getElementById("yaySound");
const secondModal = document.getElementById("secondModal");
const modalOkBtn = document.getElementById("modalOkBtn");

function moveNoButton() {
  const container = document.querySelector(".buttons");
  const rect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = rect.width - btnRect.width;
  const maxY = rect.height - btnRect.height;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// Кнопка "Нет" убегает
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

// Кнопка "Да"
yesBtn.addEventListener("click", () => {
  celebration.classList.remove("hidden");
  noBtn.style.display = "none";
  yesBtn.disabled = true;

  yaySound.currentTime = 0;
  yaySound.play().catch(() => {});

  setTimeout(() => {
    secondModal.classList.remove("hidden");
  }, 800);
});

// Закрытие второго окна
modalOkBtn.addEventListener("click", () => {
  secondModal.classList.add("hidden");
});

// Стартовая позиция "Нет"
window.addEventListener("load", moveNoButton);
