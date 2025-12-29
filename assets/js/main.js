document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".toggle-block").forEach(block => {
    const btn = block.querySelector(".accordion");
    const panel = block.querySelector(".panel");

    if (!btn || !panel) return;

    btn.addEventListener("click", () => {
      panel.classList.toggle("open");
    });
  });
});
