const scrollSmooth = () => {
  const GRADIENTHEIGHT = 0.84;
  const header = document.querySelector('.header');

  document.querySelectorAll('a[href^="#"').forEach((link) => {
    link.addEventListener('click', function (evt) {
      evt.preventDefault();

      const href = link.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = header.offsetHeight * GRADIENTHEIGHT;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  });
};

export {scrollSmooth};
