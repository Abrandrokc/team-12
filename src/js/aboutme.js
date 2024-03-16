import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
function itemsAccordion() {
  const buttonAccordion = document.querySelector('.button-up-down');

  new Accordion('.info-list', {
    duration: 700,
    showMultiple: true,
    openOnInit: [0],
    onOpen: currentElement => {
      currentElement.querySelector('.ac-trigger').classList.add('button-roll');
    },
    onClose: currentElement => {
      currentElement
        .querySelector('.ac-trigger')
        .classList.remove('button-roll');
    },
  });
}
export default itemsAccordion();
