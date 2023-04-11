import './style.css';
import updateList from './list.js';

const board = document.querySelector('.scores');

const header = document.createElement('h2');
header.classList.add('header');
header.textContent = 'Recent Scores';
const refresh = document.createElement('button');
refresh.textContent = 'Refresh';

header.appendChild(refresh);
board.appendChild(header);

updateList();