const glassCounter = document.querySelector(".glass-counter--js");
const addBtn = document.querySelector(".add-btn--js");
const removeBtn = document.querySelector(".remove-btn--js");
const key = new Date().toISOString().slice(0, 10); // conversion of date object to string in ISO standard and slice first 10 position YYYY-MM-DD 

let currentDigit = 0;

const storageValue = localStorage.getItem(key);

if (storageValue) {
  currentDigit = localStorage.getItem(key);
} else {
  localStorage.setItem(key, 0);
}

glassCounter.innerHTML = currentDigit;

addBtn.addEventListener("click", () => {
  currentDigit++;
  localStorage.setItem(key, currentDigit);
  glassCounter.innerHTML = currentDigit;
});

removeBtn.addEventListener("click", () => {
  if (currentDigit > 0) {
    currentDigit--;
  }
  localStorage.setItem(key, currentDigit);
  glassCounter.innerHTML = currentDigit;
});
