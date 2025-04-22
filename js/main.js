// Navigation:
document.addEventListener("DOMContentLoaded", function () {
  const navHam = document.querySelector(".nav-ham");
  const navItems = document.querySelector(".nav-items");

  function toggleNav() {
    navHam.classList.toggle("active");
    navItems.classList.toggle("active");
  }

  navHam.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleNav();
  });

  document.addEventListener("click", function () {
    if (navHam.classList.contains("active")) {
      navHam.classList.remove("active");
      navItems.classList.remove("active");
    }
  });

  navItems.addEventListener("click", function (e) {
    e.stopPropagation();
    navHam.classList.remove("active");
    navItems.classList.remove("active");
  });
});

// Language toggle functionality:
const langButtons = document.querySelectorAll(".lang-btn");
const heroText = document.getElementById("hero-text");
const navItems = document.querySelectorAll(".nav-item");

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    langButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const lang = button.id;

    updateLanguage(lang);
  });
});

function updateLanguage(lang) {
  const translatableElements = document.querySelectorAll("[data-en][data-es]");
  translatableElements.forEach((element) => {
    if (lang === "en") {
      element.innerHTML = element.getAttribute("data-en");
    } else if (lang === "es") {
      element.innerHTML = element.getAttribute("data-es");
    }
  });
}

// Scrolling effect:
document.addEventListener("scroll", function () {
  const historySection = document.querySelector(".section");
  const overlay = document.querySelector(".overlay");

  const sectionTop = historySection.getBoundingClientRect().top;

  if (sectionTop <= window.innerHeight / 2) {
    overlay.style.background = "rgba(0, 0, 0, 0.6)";
  } else {
    overlay.style.background = "rgba(0, 0, 0, 0.2)";
  }
});

// History section
document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "./img/Gallery/Papel_0078.jpg",
    "./img/Gallery/Papel_0079.jpg",
    "./img/Gallery/Papel_0080.jpg",
    "./img/Gallery/Papel_0081.jpg",
    "./img/Gallery/Papel_0082.jpg",
    "./img/Gallery/Papel_0083.jpg",
    "./img/Gallery/Papel_0084.jpg",
  ];
  let index = 0;
  const imgElement = document.getElementById("history-image");

  function changeImage() {
    index = (index + 1) % images.length;
    imgElement.style.opacity = 0;
    setTimeout(() => {
      imgElement.src = images[index];
      imgElement.style.opacity = 1;
    }, 500);
  }

  setInterval(changeImage, 5000);
});

// Gallery
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper", {
    loop: true,
    autoplay: {
      delay: 5000, // 3 seconds between slides
      disableOnInteraction: false,
    },
    slidesPerView: 1, // Default for small screens
    spaceBetween: 10, // Spacing between slides
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 20 }, // Tablets
      1024: { slidesPerView: 3, spaceBetween: 30 }, // Laptops & Desktops
    },
  });
});

// To the top

const backToTop = document.querySelector('.back-to-top');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  const docHeight = document.documentElement.scrollHeight;
  const winHeight = window.innerHeight;

  // Check if we're at the bottom of the page
  if (currentScrollY + winHeight >= docHeight - 1) {
    backToTop.style.opacity = '1';
    backToTop.style.visibility = 'visible';
  } else if (currentScrollY > lastScrollY && currentScrollY > 200) {
    // Scrolling down
    backToTop.style.opacity = '1';
    backToTop.style.visibility = 'visible';
  } else {
    // Scrolling up
    backToTop.style.opacity = '0';
    backToTop.style.visibility = 'hidden';
  }

  lastScrollY = currentScrollY;
});

// Smooth scroll to top
backToTop.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});