import './styles/index.scss';
import { createStore } from '~/createStore';
import { rootReducer } from '~/rootReducer';

const counter = document.getElementById('counter') as HTMLElement;
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

const store = createStore(rootReducer, 0);

addBtn?.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});

subBtn?.addEventListener('click', () => {
  store.dispatch({ type: 'DECREMENT' });
});

store.subscribe(() => {
  counter.textContent = store.getState();
});

store.dispatch({ type: 'some_type' });

themeBtn?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

asyncBtn?.addEventListener('click', () => {
  setTimeout(() => {}, 2000);
});
