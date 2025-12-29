document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".accordion").forEach(btn => {
    btn.addEventListener("click", () => {
      const panel = btn.nextElementSibling;
      if (!panel || !panel.classList.contains("panel")) return;
      panel.classList.toggle("open");
    });
  });
});

console.log("JS chargé");
