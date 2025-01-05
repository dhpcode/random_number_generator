const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const generate = () => {
  const minEl = document.querySelector('#min');
  const maxEl = document.querySelector('#max');

  
  const min = Number(minEl.value);
  const max = Number(maxEl.value);

  if (minEl.value === '' || maxEl.value === '') {
    alert('Iltimos MIN va MAX qiymatlarni kiriting');
    return;
  }

  if (min > max) {
    alert('MIN qiymati MAX qiymatdan katta bo\'lishi mumkin emas');
    return;
  }

  const placeholderEl = document.querySelector('#placeholder');
  placeholderEl.textContent = getRandomNumber(min, max);

}

const btnElement = document.getElementById('generate');
btnElement.addEventListener('click', generate)