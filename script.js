const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const celebration = document.getElementById("celebration");
const yaySound = document.getElementById("yaySound");
const secondModal = document.getElementById("secondModal");
const modalOkBtn = document.getElementById("modalOkBtn");

// случайная позиция для "Нет" внутри блока .buttons
function placeNoButtonRandom() {
  const container = document.querySelector(".buttons");
  const rect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const padding = 10;

  const maxX = rect.width - btnRect.width - padding;
  const maxY = rect.height - btnRect.height - padding;

  const x = Math.random() * maxX + padding / 2;
  const y = Math.random() * maxY + padding / 2;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// "Нет" убегает при клике
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  placeNoButtonRandom();
});

// при "Да" — праздник, скрываем "Нет", звук и второе окно
yesBtn.addEventListener("click", () => {
  celebration.classList.remove("hidden");
  yesBtn.disabled = true;
  noBtn.style.display = "none";

  if (yaySound) {
    yaySound.currentTime = 0;
    yaySound.play().catch(() => {});
  }

  // немного подождём и покажем второе окно
  setTimeout(() => {
    secondModal.classList.remove("hidden");
  }, 800);
});

// кнопка в модальном окне
if (modalOkBtn) {
  modalOkBtn.addEventListener("click", () => {
    secondModal.classList.add("hidden");
  });
}

// стартовая позиция "Нет" после загрузки
window.addEventListener("load", placeNoButtonRandom);
