import { TweenMax } from 'gsap';
import Draggable from './src/utils/Draggable.min.js';

class App {
  select = s => document.querySelector(s);
  selectAll = s => document.querySelectorAll(s);
  
  constructor() {

  }

  randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}


new App();