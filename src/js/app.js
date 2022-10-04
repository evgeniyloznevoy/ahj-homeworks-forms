import WidgetPopover from './WidgetPopover.js';

const container = document.querySelector('.widget-container');
const widget = new WidgetPopover(container);
widget.bindToDOM();