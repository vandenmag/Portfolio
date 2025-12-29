document.querySelectorAll(".accordion").forEach(btn => {
  btn.addEventListener("click", function () {
    const panel = this.nextElementSibling;
    panel.style.display =
      panel.style.display === "block" ? "none" : "block";
  });
});

console.log("JS chargé");
