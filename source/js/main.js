import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {scrollSmooth} from './modules/smooth-to-anchor';
import {initAccordions} from './modules/accordion/init-accordion';
import {showMore} from './modules/show-more-about';
import {FocusLock} from './utils/focus-lock';
import {ScrollLock} from './utils/scroll-lock';

window.addEventListener('DOMContentLoaded', () => {
  window.scrollLock = new ScrollLock();

  iosVhFix();
  scrollSmooth();
  showMore();
  initAccordions();

  window.addEventListener('load', () => {
    initModals();
    window.focusLock = new FocusLock();

    const form = new Form();
    window.form = form;
    form.init();

  });
});
