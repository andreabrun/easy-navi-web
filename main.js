import "./assets/css/tailwind.css";

let switchers = document.querySelectorAll(".switcher");
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// EVENT LISTNER FOR THEME CHANGE
switchers.forEach((switcher) => {
  switcher.addEventListener("click", function () {
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  });
});


// NAVBAR ACTIVE ELEMENT
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '-100px 0px -100px 0px', // Offset vertical by 100px
    threshold: .75 // Trigger when 75% of the element is visible
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const navItems = document.querySelectorAll('header a');
        const currentNavItem = document.querySelector(`header a[href='#${entry.target.id}']`);
        
        if (currentNavItem) {
          navItems.forEach(item => item.classList.remove('active'));
          currentNavItem.classList.add('active');
        }
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  document.querySelectorAll('section[id]').forEach(element => { observer.observe(element) });
});


import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards'

const screenSlides = new Swiper('.screenSlides', {
    effect: "cube",
    cubeEffect: {
        slideShadows: false,
        shadow: false,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    loop: true,
    autoplay: {
        delay: 1500,
        duration: 500
    },
    grabCursor: true,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
    }
});

// DOWNLOAD SECTION
function showDownloadSection() {
    const urlParams = new URLSearchParams(window.location.search);
    const downloadSection = document.getElementById('download');

    if (downloadSection) {
        downloadSection.classList.toggle('hidden', !urlParams.has('download'));
    }
}

// CHECKS THE URL PARAMS AND SHOWS THE DOWNLOAD SECTION
document.addEventListener('DOMContentLoaded', (event) => {
    showDownloadSection();
});