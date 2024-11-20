// menu.js
export function setupMenu() {
    const menu = document.getElementById('menu');
    const toggle = document.getElementById('menu-toggle');
  
    toggle.addEventListener('click', () => {
      menu.classList.toggle('visible');
    });
  }
  import { setupMenu } from './menu.js';

  document.addEventListener('DOMContentLoaded', () => {
    setupMenu();
  });
    