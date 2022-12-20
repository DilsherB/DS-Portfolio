const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('collapsibleNavbar');
const bsCollapse = new bootstrap.Collapse(menuToggle);
navLinks.forEach((n) => {
  n.addEventListener('click', () => { bsCollapse.toggle(); });
});