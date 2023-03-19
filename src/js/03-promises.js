import Notiflix from 'notiflix';
const form = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { elements: { delay, step, amount } } = event.currentTarget;
  let totalDelay = Number(delay.value);
  for (let i = 1; i <= amount.value; i++) {
    let delaySum = totalDelay;
    setTimeout(() => {
      createPromise(i, delaySum)
        .then(({ position, delay}) => {
          Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
        });
    }, totalDelay);
    totalDelay += Number(step.value);
  }
});
