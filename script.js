// Welcome Popup
window.onload = function () {
  const popup = document.getElementById("popup");

  if (popup && !sessionStorage.getItem("popupShown")) {
    popup.style.display = "flex";
    sessionStorage.setItem("popupShown", "yes");
  }
};

// Close Popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Navbar Background on Scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  if (window.scrollY > 50) {
    nav.style.background = "#003366";
    nav.style.boxShadow = "0 5px 15px rgba(0,0,0,.25)";
  } else {
    nav.style.background = "rgba(0,51,102,.9)";
    nav.style.boxShadow = "none";
  }
});

// Fade Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section").forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});