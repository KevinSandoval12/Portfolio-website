function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// PDF DOWNLOAD BUTTON
const viewPDF = document.querySelector("#pdf-btn");
viewPDF.addEventListener("click", () => {
  window.open("downloads/Kevin-Sandoval-Resume.pdf", "_blank");
});
