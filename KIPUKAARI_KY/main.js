window.addEventListener("scroll", function () {
  const header = document.getElementById("header");

  if (!header) {
    return;
  }

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");

  if (!menu || !menuIcon || !closeIcon) {
    return;
  }

  menu.classList.toggle("open");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
}
