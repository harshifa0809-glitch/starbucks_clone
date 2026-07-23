// 1. Mobile Hamburger Menu Toggle (Mobile View Ke Liye)
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const navRight = document.querySelector(".nav-right");

  // Create hamburger icon dynamically for mobile screens
  const hamburger = document.createElement("div");
  hamburger.classList.add("hamburger");
  hamburger.innerHTML = '<i class="fa-solid fa-bars" style="font-size: 24px; cursor: pointer; display: none;"></i>';
  navbar.insertBefore(hamburger, navRight);

  // Toggle nav links on click
  hamburger.addEventListener("click", () => {
    const navLinks = document.querySelector(".nav-links");
    if (navLinks.style.display === "flex") {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "flex";
      navLinks.style.flexDirection = "column";
      navLinks.style.position = "absolute";
      navLinks.style.top = "60px";
      navLinks.style.left = "0";
      navLinks.style.width = "100%";
      navLinks.style.backgroundColor = "#fff";
      navLinks.style.padding = "20px";
      navLinks.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
    }
  });

  // 2. Simple Button Click Alert / Scroll Effect
  const orderButtons = document.querySelectorAll(".btn-pill, .btn-pill-dark");
  orderButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Redirecting to Starbucks Order Menu!");
    });
  });
});