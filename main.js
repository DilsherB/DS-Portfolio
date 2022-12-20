const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('collapsibleNavbar');

// eslint-disable-next-line no-unused-vars
const bsCollapse = new bootstrap.Collapse(menuToggle);
navLinks.forEach((n) => {
  n.addEventListener('click', () => { bsCollapse.toggle(); });
});