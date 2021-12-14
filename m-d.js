mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));
import {MDCBanner} from '@material/banner';
const banner = new MDCBanner(document.querySelector('.mdc-banner'));
import {MDCRipple} from '@material/ripple';

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});