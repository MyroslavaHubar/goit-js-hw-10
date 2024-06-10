import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const timeInputElem = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const timerElem = document.querySelector('.timer');

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedTime = selectedDates[0];
    const currentTime = Date.now();

    if (selectedTime < currentTime) {
      startBtn.disabled = true;

      iziToast.error({
        title: 'Error',
        titleColor: '#fff',
        titleSize: '16px',
        titleLineHeight: '1.5',
        message: 'Please choose a date in the future',
        messageColor: '#fff',
        messageSize: '16px',
        messageLineHeight: '1.5',
        backgroundColor: '#ef4040',
        position: 'topRight',
        iconUrl: '../img/error.svg',
        theme: 'dark',
      });
    } else {
      userSelectedDate = selectedTime;
      startBtn.classList.add('active-btn');
      startBtn.disabled = false;
    }
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
