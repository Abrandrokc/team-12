import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const buttonAccordion = document.querySelector('.button-up-down');

new Accordion('.info-list', {
  duration: 700,
  showMultiple: true,
  openOnInit: [0],
  onOpen: currentElement => {
    console.log(currentElement);
  },
  onClose: currentElement => {
    console.log(currentElement);
  },
});
