/**
 * @jest-environment jsdom
 */
 import WidgetPopover from '../WidgetPopover.js';

 test('should render self', () => {
   document.body.innerHTML = '<div class="widget-container"></div>';
   const container = document.querySelector('.widget-container');
   const widget = new WidgetPopover(container);
   widget.bindToDOM();
 
   expect(container.innerHTML).toEqual(WidgetPopover.markup);
 });
 
 test('should render popover on button click', () => {
   document.body.innerHTML = '<div class="widget-container"></div>';
   const container = document.querySelector('.widget-container');
   const widget = new WidgetPopover(container);
   widget.bindToDOM();
 
   const button = container.querySelector('.widget-button');
   const popover = container.querySelector('.popover');
   button.click();
 
   expect(popover.classList.contains('hidden')).toBeFalsy();
 });