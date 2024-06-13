const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  // header container
  ScrollReveal().reveal(".headerContainer h1", scrollRevealOption);
  
  ScrollReveal().reveal(".headerContainer h4", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".headerContainer .btn", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  // about container
  ScrollReveal().reveal(".aboutContainer .sectionSeader", scrollRevealOption);
  ScrollReveal().reveal(".aboutContainer .sectionSubheader", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".aboutContainer .aboutFlex", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  ScrollReveal().reveal(".aboutContainer .btn", {
    ...scrollRevealOption,
    delay: 1500,
  });
  
  // discover container
  ScrollReveal().reveal(".discoverCard", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  ScrollReveal().reveal(".discoverCardContent", {
    ...scrollRevealOption,
    interval: 500,
    delay: 200,
  });
  




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const targetPosition = target.getBoundingClientRect().top;
        const startPosition = window.pageYOffset;
        const distance = targetPosition;
        const duration =800; // duration in milliseconds
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    });
});



document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.navLinks').classList.toggle('nav-active');
});
