document.body.addEventListener('click', (e) => {
  if (!e.target.matches('.more-information__color')) return;
  document.querySelector('.more-information__img img').src = e.target.dataset.src;

  document
    .querySelectorAll('.more-information__color')
    .forEach((btn) => btn.classList.remove('active'));
  e.target.classList.add('active');
});

function handleItemClick(event, selector, sliderSelector, imgSelector) {
  if (!event.target.matches(selector)) {
    return;
  }

  document.querySelector(sliderSelector).querySelector(imgSelector).src = event.target.dataset.src;

  document.querySelectorAll(selector).forEach((btn) => btn.classList.remove('active'));
  event.target.classList.add('active');
}

document.body.addEventListener('click', (event) => {
  handleItemClick(event, '.header__block-color', '.header__block-slider', 'img');
  handleItemClick(event, '.more-information__btn', '.more-information__slider', 'img');
});
