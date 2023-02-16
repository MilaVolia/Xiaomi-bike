document.body.addEventListener('click', (e) => {
  if (!e.target.matches('.header__block-color')) return;
  document.querySelector('.header__block-slider img').src = e.target.dataset.src;

  document
    .querySelectorAll('.header__block-color')
    .forEach((btn) => btn.classList.remove('active'));
  e.target.classList.add('active');
});

document.body.addEventListener('click', (e) => {
  if (!e.target.matches('.more-information__btn')) return;
  document.querySelector('.more-information__slider img').src = e.target.dataset.src;

  document
    .querySelectorAll('.more-information__btn')
    .forEach((btn) => btn.classList.remove('active'));
  e.target.classList.add('active');
});

document.body.addEventListener('click', (e) => {
  if (!e.target.matches('.more-information__color')) return;
  document.querySelector('.more-information__img img').src = e.target.dataset.src;

  document
    .querySelectorAll('.more-information__color')
    .forEach((btn) => btn.classList.remove('active'));
  e.target.classList.add('active');
});
