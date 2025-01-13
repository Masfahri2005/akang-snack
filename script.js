document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('[data-aos]');
  const options = {
      threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('aos-animate');
          }
      });
  }, options);

  elements.forEach((el) => {
      observer.observe(el);
  });
});

const links = document.querySelectorAll('.nav-link');
links.forEach((link) => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
      });
  });
});

const slider = document.querySelector('.slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; 
  slider.scrollLeft = scrollLeft - walk;
});
