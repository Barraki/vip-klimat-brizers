import './vendor/focus-visible.min.js';
import './_vars';
import { resizeContent } from './functions/resize';
import { scrollTo } from './functions/smooth-scroll';
import { disableScroll, enableScroll } from './functions/stop-scroll';

//disableScroll(fix) // fix -> class of element with position: fixed
const anchors = document.querySelectorAll('a[href^="#"]')


anchors.forEach((el) => {
  el.addEventListener('click', (e) => {
      e.preventDefault();
      let id = e.currentTarget.getAttribute('href');
      scrollTo(document.querySelector(id))
  });
})