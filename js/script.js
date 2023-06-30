import menuMobile from './menu-mobile.js';
import scrollSuave from './scrollSuave.js';
import animacaoScroll from './animacao-scroll.js';
import tooltip from './tooltip.js';
import { SlideNav } from './slide.js';

menuMobile();
animacaoScroll();
tooltip();

const a = new scrollSuave('a[href^="#"')
a.init()


const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next');

const avaliacoes = new SlideNav('.avaliacoes', '.avaliacoes-grid');
avaliacoes.init();



