import rellax from 'rellax';
import Lenis from 'lenis';

document.addEventListener('DOMContentLoaded', function() {
  const rellaxHeaderImage = document.querySelector('.rellax-archive-header-image.image-first');
  const rellaxHeaderImageSecond = document.querySelector('.rellax-archive-header-image.image-second');
  
  if (!rellaxHeaderImage || !rellaxHeaderImageSecond) {
    return;
  }
  
  new rellax(rellaxHeaderImage, {
    speed: 7,
  });
  
  new rellax(rellaxHeaderImageSecond, {
    speed: 5,
  });

  const mousexpositions = document.querySelectorAll('.move-mouse');
  
  if (!mousexpositions) {
    return;
  }

  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / 35;
    const mouseY = e.clientY / 35;
    
    mousexpositions.forEach((mousexposition) => {
      mousexposition.style.transform = `translate(${mouseX}px , ${mouseY}px)`;
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const screenLessThan768 = window.matchMedia("(max-width: 768px)");
  
  if (!screenLessThan768.matches) {
    document.onmousemove = function(e) {
      document.body.style.setProperty("--x", e.clientX + "px");
      document.body.style.setProperty("--y", e.clientY + "px");
    };
  }

  const clickableElements = document.querySelectorAll(".clickable");
  
  clickableElements.forEach(elm => {
    elm.addEventListener("mouseover", function() {
      document.body.classList.add("img-hovered");
    });
    
    elm.addEventListener("mouseleave", function() {
      document.body.classList.remove("img-hovered");
    });
  });
});

window.addEventListener('DOMContentLoaded', (event) => {
  const lenis = new Lenis();

  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  
  requestAnimationFrame(raf);
});
