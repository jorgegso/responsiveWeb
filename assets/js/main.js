// shoe menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};

showMenu('nav-toggle', 'nav-menu');

// active and remove menu 
// cuado hagas un click me eliminaras el active y agregaras donde isiste el click
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  // cierra el menu
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


// scrool revel animation

const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

// scrool home
sr.reveal('.home__title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });

// scroll skills 
sr.reveal('.skills__subtitle', {});
sr.reveal('.about__subtitle', { delay: 200 });
sr.reveal('.skills__subtitle', { interval: 200 });
sr.reveal('.skills__subtitle', { delay: 400 });


// scroll work 
sr.reveal('.work__img', { interval: 200 });

// scroll contact 
sr.reveal('.contact_input', { interval: 200 });

