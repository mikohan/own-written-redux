import './styles/index.scss';

const counter = document.getElementById('counter') as HTMLElement;
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

function render() {
  counter.textContent = state.toString();
}

let state: number = 0;

addBtn?.addEventListener('click', () => {
  state = state + 1;
  render();
});

subBtn?.addEventListener('click', () => {
  state = state - 1;
  render();
});

themeBtn?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

asyncBtn?.addEventListener('click', () => {
  setTimeout(() => {
    state = state + 1;
    render();
  }, 2000);
});
