'use strict';

// menu mobile and tablet
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// service items show
const serviceBlocks = document.querySelector('.service__blocks');
const serviceBlock = serviceBlocks.querySelectorAll('.service__block');

serviceBlock.forEach(block => {
  let contentShow = false;

  block.addEventListener('click', () => {
    contentShow = !contentShow;

    const blockContent = block.querySelector('.service__block--content');
    const circle = block.querySelector('.service__block--circle');
    const title = block.querySelector('.service__block--title');
    const arrow = block.querySelector('.service__block--arrow');

    serviceBlock.forEach(item => {
      const content = item.querySelector('.service__block--content');
      const circleItem = item.querySelector('.service__block--circle');
      const titleItem = item.querySelector('.service__block--title');
      const arrowItem = item.querySelector('.service__block--arrow');

      content.classList.remove('service__block--content-show');
      content.classList.add('service__block--content-hidden');

      circleItem.classList.remove('service__block--circle-show');
      titleItem.classList.remove('service__block--title-show');
      arrowItem.classList.remove('service__block--arrow-show');
    });

    if (contentShow === true) {
      blockContent.classList.remove('service__block--content-hidden');
      blockContent.classList.add('service__block--content-show');
      circle.classList.add('service__block--circle-show');
      title.classList.add('service__block--title-show');
      arrow.classList.add('service__block--arrow-show');
    }
  });
});

// slider for stages

const stages = document.querySelector('.stages');
const slider = stages.querySelector('.slider');
const sliderItems = slider.querySelectorAll('.slider__item');
const buttonPrev = slider.querySelector('.slider__button--prev');
const buttonNext = slider.querySelector('.slider__button--next');

let currentSlider = 0;

function activeSlider(ind) {
  for (let i = 0; i < sliderItems.length; i++) {
    sliderItems[i].classList.remove('slider__item--active');
  }

  sliderItems[ind].classList.add('slider__item--active');

  if ((document.body.clientWidth + 22) >= 1280) {
    if ((ind + 1) > sliderItems.length - 1) {
      return;
    }

    sliderItems[ind + 1].classList.add('slider__item--active');
  }

  if ((document.body.clientWidth + 22) >= 1920) {
    if ((ind + 2) > sliderItems.length - 1) {
      return;
    }

    sliderItems[ind + 2].classList.add('slider__item--active');
  }
};

buttonPrev.addEventListener('click', () => {
  currentSlider = currentSlider - 1;

  if (currentSlider < 0) {
    currentSlider = 0;
  }

  activeSlider(currentSlider);
});

buttonNext.addEventListener('click', () => {
  currentSlider = currentSlider + 1;

  if (currentSlider > sliderItems.length - 1) {
    currentSlider = sliderItems.length - 1;
  }

  activeSlider(currentSlider);
});

activeSlider(currentSlider);

// slider for examples
const examples = document.querySelector('.examples');
// const sliderExamples = stages.querySelector('.slider');
const itemsExamples = examples.querySelectorAll('.examples__block');
const buttonPrevExamples = examples.querySelector('.slider__button--prev');
const buttonNextExamples = examples.querySelector('.slider__button--next');

let currentBlock = 0;

function activeBlock(ind) {
  for (let i = 0; i < itemsExamples.length; i++) {
    itemsExamples[i].classList.remove('examples__block--active');
  }

  itemsExamples[ind].classList.add('examples__block--active');
};

buttonPrevExamples.addEventListener('click', () => {
  currentBlock = currentBlock - 1;

  if (currentBlock < 0) {
    currentBlock = 0;
  }

  activeBlock(currentBlock);
});

buttonNextExamples.addEventListener('click', () => {
  currentBlock = currentBlock + 1;

  if (currentBlock >= itemsExamples.length) {
    currentBlock = itemsExamples.length - 1;
  }

  activeBlock(currentBlock);
});

activeBlock(currentBlock);

// validation form

// const form = document.getElementById('form');
const formName = document.getElementById('name');
const formTel = document.getElementById('tel');
const formEmail = document.getElementById('email');

formName.addEventListener('input', (e) => {
  if (e.target.value.length < 3) {
    formName.setCustomValidity('Длина имени должна быть не менее 3 символов');
    formName.reportValidity();
    formName.classList.add('form__field--error');
  } else {
    formName.setCustomValidity('');
    formName.classList.remove('form__field--error');
  }
});

formTel.addEventListener('input', (e) => {
  const tel = e.target.value;
  const validTel = /^[0-9]{10}/;

  if (!validTel.test(tel)) {
    formTel.setCustomValidity('Укажите телефон в формате 0661234567, должно быть 10 цифр');
    formTel.reportValidity();
    formTel.classList.add('form__field--error');
  } else {
    formTel.setCustomValidity('');
    formTel.classList.remove('form__field--error');
  }
});

formEmail.addEventListener('input', (e) => {
  const email = e.target.value;
  const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!validEmail.test(email)) {
    formEmail.setCustomValidity('Укажите email в формате example@gmail.com');
    formEmail.reportValidity();
    formEmail.classList.add('form__field--error');
  } else {
    formEmail.setCustomValidity('');
    formEmail.classList.remove('form__field--error');
  }
});
