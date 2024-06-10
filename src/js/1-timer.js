import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import imgUrl from '../img/error-timer.svg';

const timeInputElem = document.querySelector('#datetime-picker');
const startBtnElem = document.querySelector('[data-start]');
const dataElem = document.querySelector('[data-days]');
const hoursElem = document.querySelector('[data-hours]');
const minuteElem = document.querySelector('[data-minutes]');
const secondElem = document.querySelector('[data-seconds]');

let userSelectedDate;
startBtnElem.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];

    if (userSelectedDate < new Date()) {
      startBtnElem.setAttribute('disabled', '');
      iziToast.error({
        message: 'Please choose a date in the future',
        messageColor: '#fff',
        messageSize: '16',
        messageLineHeight: '1.5',
        backgroundColor: '#ef4040',
        position: 'topRight',
        iconUrl: imgUrl,
        theme: 'dark',
        close: true,
        closeOnEscape: true,
        closeOnClick: true,
        iconColor: '#fafafb',
      });
    } else {
      startBtnElem.removeAttribute('disable');
    }
    console.log(userSelectedDate);
  },
};

flatpickr(timeInputElem, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
