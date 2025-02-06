burgerInit();
// findHref();

function burgerInit() {
  const burger = document.querySelector('.header_burger');
  const menu = document.querySelector('.nav_wrap');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    menu.classList.toggle('menu_active');
    document.body.classList.toggle('body_lock');
  });
}

function findHref() {
  const menu = document.getElementById('menu');

  if (menu) {
    const links = menu.querySelectorAll('a');
    const url = window.location.href;

    links.forEach((link) => {
      if (link.href && url === link.href) {
        link.classList.add('menu_link_active');
      } else {
        link.classList.remove('menu_link_active');
      }
    });
  }
}

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("touchstart", function () {
    this.classList.toggle("touch-active");
  });
});
