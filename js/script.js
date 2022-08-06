const navbar = document.querySelector('.navbar');
const navNav = document.querySelector('#navbarNav');
const navLinks = document.getElementsByClassName('nav-link');

//adding active class to navlinks
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function () {
    if (this.classList.contains("dropdown-toggle")) {
      return
    }

    let current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');

    this.className += ' active';
    navNav.classList.toggle('open');
  });
}
