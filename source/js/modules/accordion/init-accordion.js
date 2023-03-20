import {Accordions} from './accordions';
let accordions;

const initAccordions = () => {
  document.querySelector('[data-accordion="parent"]').classList.remove('footer__info-links--no-js');
  accordions = new Accordions();
  window.accordions = accordions;
};

export {initAccordions, accordions};
