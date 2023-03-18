import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

// startBtn.disabled = false;
const inputArea = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      dateChecker();
  },
};

flatpickr(inputArea, options);

function dateChecker() {
    console.log('5');
};