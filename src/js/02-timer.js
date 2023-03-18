import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      dateChecker(selectedDates[0]);
  },
};
const inputArea = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysRemain = document.querySelector('[data-days]');
const hoursRemain = document.querySelector('[data-hours]');
const minutesRemain = document.querySelector('[data-minutes]');
const secondsRemain = document.querySelector('[data-seconds]');
let choisedDate = null;
let timerId = null;

flatpickr(inputArea, options);
startBtn.addEventListener('click', onStartTimer);

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
};

function dateChecker(selectedDates) {
    choisedDate = selectedDates.getTime();
    if (choisedDate - Date.now() > 0) {
        startBtn.disabled = false;
        return
    }
    alert('Please choose a date in the future');
    startBtn.disabled = true;
};

function onStartTimer() {
    timerId = setInterval(startTimer, 1000);
    inputArea.disabled = true;
    startBtn.disabled = true;
};

function startTimer() {
    const timeDifference = choisedDate - Date.now()
    const formatedDate = convertMs(timeDifference);
    dateRander(formatedDate);
    if (timeDifference < 1000) {
        clearInterval(timerId);
        inputArea.disabled = false;
    };
};

function dateRander({ days, hours, minutes, seconds }) {
    daysRemain.textContent = addLeadingZero(days);
    hoursRemain.textContent = addLeadingZero(hours);
    minutesRemain.textContent = addLeadingZero(minutes);
    secondsRemain.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
   return String(value).padStart(2, '0');
}