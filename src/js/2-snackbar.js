import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formElem = document.querySelector('.form');
const inputElem = formElem.querySelector('input');

// console.log(inputElem);

inputElem.classList.add('input-js');

formElem.addEventListener('submit', promiseGenerator);

function promiseGenerator(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const delay = formData.get('delay');
  const state = formData.get('state');

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        title: '',
        message: `✅ Fulfilled promise in ${delay}ms`,
        messageLineHeight: '1.5',
        messageSize: '16',
        messageColor: '#fff',
        position: 'topRight',
        backgroundColor: '#59a10d',
        icon: false,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: '',
        message: `❌ Rejected promise in ${delay}ms`,
        messageLineHeight: '1.5',
        messageSize: '16',
        messageColor: '#fff',
        position: 'topRight',
        backgroundColor: '#ef4040',
        icon: false,
      });
    });
  console.log(promise);
}
