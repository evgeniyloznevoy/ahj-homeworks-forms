export default class WidgetPopover {
    constructor(parentEl) {
      this.parentEl = parentEl;
    }
  
    static get markup() {
      return `
       <div class="wrapper">   
      <button class="widget-button">Click to toggle popover</button>
      <div class="popover hidden">
        <div class="popover-title">Popover title</div>
        <div class="popover-content">And here's amazing content. It's very engaging. Right?</div>
      </div>
      </div>
        `;
    }
  
    onButtonClick(evt) {
      evt.preventDefault();
      const popover = this.parentEl.querySelector('.popover');
      if (popover.classList.contains('hidden')) {
        popover.classList.remove('hidden');
        this.popoverPositioning();
      } else {
        popover.classList.add('hidden');
      }
    }
  
    popoverPositioning() {
      const button = this.parentEl.querySelector('.widget-button');
      const position = button.getBoundingClientRect();
      const width = button.offsetWidth;
      const popover = this.parentEl.querySelector('.popover');
      popover.style.left = `${(window.scrollX + position.left + width / 2 - popover.offsetWidth / 2).toFixed(1)}px`;
      popover.style.top = `${(window.scrollY + position.top - popover.offsetHeight - 5).toFixed(1)}px`;
    }
  
    bindToDOM() {
      this.parentEl.innerHTML = this.constructor.markup;
      const button = this.parentEl.querySelector('.widget-button');
      button.addEventListener('click', (e) => this.onButtonClick(e));
    }
  }