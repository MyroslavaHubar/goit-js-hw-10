import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import imgUrl from '../img/error-timer.svg';

const refs = {
  timeInputElem: document.querySelector('#datetime-picker'),
  startBtnElem: document.querySelector('[data-start]'),
  daysElem: document.querySelector('[data-days]'),
  hoursElem: document.querySelector('[data-hours]'),
  minuteElem: document.querySelector('[data-minutes]'),
  secondElem: document.querySelector('[data-seconds]'),
};

refs.startBtnElem.disabled = true;
let userSelectedDate = '';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentTime = Date.now();

    if (selectedDate < currentTime) {
      refs.startBtnElem.disabled = true;
      refs.startBtnElem.classList.remove('active-btn');
      iziToast.error({
        message: 'Please choose a date in the future',
        messageColor: '#fff',
        messageSize: '16',
        messageLineHeight: '1.5',
        backgroundColor: '#ef4040',
        position: 'topRight',
        imgUrl: imgUrl,
        theme: 'dark',
        close: true,
        closeOnEscape: true,
        closeOnClick: true,
        imgColor: '#fafafb',
        imageWidth: 302,
      });
    } else {
      refs.startBtnElem.disabled = false;
      refs.startBtnElem.classList.add('active-btn');
      userSelectedDate = selectedDate;
    }
  },
};

flatpickr(refs.timeInputElem, options);

refs.startBtnElem.addEventListener('click', () => {
  refs.startBtnElem.classList.remove('active-btn');
  refs.startBtnElem.disabled = true;
  refs.timeInputElem.disabled = true;

  const intervalId = setInterval(() => {
    const diff = userSelectedDate - Date.now();

    if (diff <= 0) {
      clearInterval(intervalId);
      // refs.daysElem.textContent = '00';
      // refs.hoursElem.textContent = '00';
      // refs.minuteElem.textContent = '00';
      // refs.secondElem.textContent = '00';
      refs.timeInputElem.disabled = false;
      return;
    }

    const time = convertMs(diff);

    refs.daysElem.textContent = getTimeValue(time.days);
    refs.hoursElem.textContent = getTimeValue(time.hours);
    refs.minuteElem.textContent = getTimeValue(time.minutes);
    refs.secondElem.textContent = getTimeValue(time.seconds);
  }, 1000);

  // setTimeout(() => {
  //   clearInterval(intervalId);
  //   refs.timeInputElem.disabled = false;
  // }, userSelectedDate - Date.now());
});

function getTimeValue(value) {
  return value.toString().padStart(2, '0');
}

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
