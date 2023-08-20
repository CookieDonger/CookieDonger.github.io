addEventListener("DOMContentLoaded", (event) => {const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    rootMargin: "-100px 0px -20px 0px",
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        entry.target.classList.remove("appear");
      } else {
        entry.target.classList.add("appear");
      }
    });
  },
  appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });});