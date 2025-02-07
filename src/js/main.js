burgerInit();

function burgerInit() {
  const burger = document.querySelector('.header_burger');
  const menu = document.querySelector('.nav_wrap');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    menu.classList.toggle('menu_active');
    document.body.classList.toggle('body_lock');
  });
}

document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('touchstart', function () {
    this.classList.toggle('touch-active');
  });
});
