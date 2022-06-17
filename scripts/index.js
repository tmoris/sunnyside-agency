const navToggle = document.querySelector('.navtoggle');
const navLinks = document.querySelectorAll(".navlist__link");

navToggle.addEventListener('click', () => {
document.body.classList.toggle("open");
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('open');
    });
});
