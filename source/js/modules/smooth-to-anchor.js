const scrollSmooth = () => {
  document.querySelectorAll('a[href^="#"').forEach((link) => {
    link.addEventListener("click", function (evt) {
      evt.preventDefault();

      let href = link.getAttribute("href").substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = document.querySelector(".header").offsetHeight;
      // const topOffset = 0; // если не нужен отступ сверху
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });
};

export { scrollSmooth };
