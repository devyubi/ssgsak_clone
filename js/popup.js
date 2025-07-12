window.addEventListener("DOMContentLoaded", () => {
  const closeBt = document.querySelector(".popup_close");
  const popup = document.querySelector(".popup");
  const closeX = document.querySelector(".popup_x");

  closeX.addEventListener("click", () => {
    popup.style.display = "none";
  });
  closeBt.addEventListener("click", () => {
    popup.style.display = "none";
  });
});
