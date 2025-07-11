// header scroll start
document.addEventListener("DOMContentLoaded", function () {
  const mainHeader = document.getElementById("header");
  const stickyHeader = document.getElementById("sticky-header");
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");

  // Show sticky nav only on desktop
  function handleStickyHeader() {
    if (window.innerWidth > 768) {
      const triggerHeight = mainHeader.offsetHeight;
      if (window.scrollY > triggerHeight) {
        stickyHeader.classList.add("visible");
      } else {
        stickyHeader.classList.remove("visible");
      }
    } else {
      stickyHeader.classList.remove("visible"); // always hide on mobile
    }
  }

  // Initial check and on scroll
  window.addEventListener("scroll", handleStickyHeader);
  window.addEventListener("resize", handleStickyHeader);
  handleStickyHeader(); // run on load too

  // Hamburger toggle for mobile
  hamburger.addEventListener("click", function () {
    mobileNav.classList.toggle("show");
  });
});
//header scroll end

// highlighting the header buttons when on that page start
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links a");
  const currentPage = window.location.href;

  navLinks.forEach(link => {
    const linkHref = link.getAttribute("href");

    if (currentPage.includes(linkHref)) {
      link.classList.add("active");
    }
  });
});
// highlighting the header buttons when on that page end

// home animation start
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("typewriter-container");
  const lines = [
    "Computer Science Student",
    "Freelancer",
    "Web Developer"
  ];

  let lineIndex = 0;

  function animateLine(text, callback) {
    container.textContent = "";
    const spans = text.split("").map((char) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      container.appendChild(span);
      return span;
    });

    spans.forEach((span, i) => {
      setTimeout(() => {
        span.classList.add("visible");
      }, i * 80);
    });

    // Call the next line after all letters have animated + pause
    const totalTime = spans.length * 80 + 1000;
    setTimeout(callback, totalTime);
  }

  function loopLines() {
    animateLine(lines[lineIndex], () => {
      lineIndex = (lineIndex + 1) % lines.length;
      loopLines(); // call again for next line
    });
  }

  loopLines(); // Start the animation
});
// home animation end

// list dropdown start
  document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.skills-toggle');
    const list = document.querySelector('.skills-list');

    toggle.addEventListener('click', () => {
      list.classList.toggle('hidden');
      toggle.classList.toggle('active');
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.card-toggle');

    toggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        content.classList.toggle('hidden');
        toggle.classList.toggle('active');
      });
    });
  });
// list dropdown end

// scroll to top button start
document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollBtn");
  const wave1 = document.getElementById("wave1");
  const wave2 = document.getElementById("wave2");

  let xOffset1 = 0;
  let xOffset2 = 0;
  let scrollPercent = 0;

  function drawWaves() {
    const waveHeight1 = 5;
    const waveHeight2 = 9;
    const yOffset = 100 - scrollPercent;

    // Wave 1
    let path1 = `M 0 ${yOffset}`;
    for (let x = 0; x <= 100; x++) {
      const y = yOffset + waveHeight1 * Math.sin((x + xOffset1) * 0.2);
      path1 += ` L ${x} ${y}`;
    }
    path1 += " L 100 100 L 0 100 Z";
    wave1.setAttribute("d", path1);

    // Wave 2
    let path2 = `M 0 ${yOffset}`;
    for (let x = 0; x <= 100; x++) {
      const y = yOffset + waveHeight2 * Math.sin((x + xOffset2) * 0.25 + 10);
      path2 += ` L ${x} ${y}`;
    }
    path2 += " L 100 100 L 0 100 Z";
    wave2.setAttribute("d", path2);
  }

  function animate() {
    xOffset1 += 0.7;
    xOffset2 += 1.2;
    drawWaves();
    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    scrollPercent = (scrollTop / scrollHeight) * 100;

    scrollBtn.classList.toggle("show", scrollTop > 100);
    scrollBtn.classList.toggle("full", scrollPercent >= 100);
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
// scroll to top button end
