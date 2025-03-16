burgerInit();

function burgerInit() {
  const burger = document.querySelector('.header_burger');
  const menu = document.querySelector('.nav_wrap');
  const logo = document.querySelector('.header_logo');
  const navMenu = document.querySelector('.nav-menu');
  const navItem = navMenu.querySelectorAll('.menu-item');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    menu.classList.toggle('menu_active');
    document.body.classList.toggle('body_lock');
    logo.classList.toggle('logo_active');
  });

  navItem.forEach((btn) => {
    btn.addEventListener('click', () => {
      burger.classList.remove('burger_active');
      menu.classList.remove('menu_active');
      document.body.classList.remove('body_lock');
      logo.classList.remove('logo_active');
    });
  });
}

if ('ontouchstart' in window) {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    card.addEventListener('click', function () {
      cards.forEach((c) => c.classList.remove('hover-active'));
      this.classList.add('hover-active');
    });
  });
}
