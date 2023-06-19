import menuMobile from './menu-mobile.js';
import scrollSuave from './scrollSuave.js';
import { SlideNav } from './slide.js';

menuMobile();

const a = new scrollSuave('a[href^="#"')
a.init()


const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next');



