//**  tel validation **//
const formContactsInput = document.getElementById('telephone');

const checkNumber = () => {

  const minTitleName = 10;
  const maxTitleName = 12;

  const valueLength = formContactsInput.value.length;
  if (valueLength < minTitleName) {
    formContactsInput.setCustomValidity(`Ещё ${minTitleName - valueLength} симв.`);
  } else if (valueLength > maxTitleName) {
    formContactsInput.setCustomValidity(`Удалите лишние ${valueLength - maxTitleName} симв.`);
  } else if (!Number.isInteger(+formContactsInput.value)) {
    formContactsInput.setCustomValidity(`Номер должен быть числом`);
  }
  else {
    formContactsInput.setCustomValidity('');
  }

  formContactsInput.reportValidity();
};

if (formContactsInput !== null) {
  formContactsInput.addEventListener('change', checkNumber);
};


//**  name validation **//
const formContactsInputName = document.getElementById('name');

const checkNumbers = () => {

  const minTitleName = 1;
  const maxTitleName = 15;

  const valueLength = formContactsInputName.value.length;

  formContactsInputName.setCustomValidity('');

  if (valueLength > 0 && valueLength < minTitleName) {
    formContactsInputName.setCustomValidity(`Ещё ${minTitleName - valueLength} симв.`);
  } else if (valueLength > maxTitleName) {
    formContactsInputName.setCustomValidity(`Удалите лишние ${valueLength - maxTitleName} симв.`);
  }

  if (valueLength>0 && !/^[A-Za-zА-Яа-яЁё]+$/.test(formContactsInputName.value))
  {
    formContactsInputName.setCustomValidity(`В имени должны быть только буквы`);
  }

  formContactsInputName.reportValidity();
};

if (formContactsInput !== null) {
  formContactsInputName.addEventListener('input', checkNumbers);
};

//**  email validation **//
const formContactsEmail = document.getElementById('email');

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}

const checkMail = () => {

  if (!ValidateEmail(formContactsEmail.value)) {
    formContactsEmail.setCustomValidity(`адрес почты неверный`);
  }
  else {
    formContactsEmail.setCustomValidity('');
  }

  formContactsEmail.reportValidity();
};

if (formContactsInput !== null) {
  formContactsEmail.addEventListener('change', checkMail);
};

//** burger **//

const burgerToggle = document.querySelector('.main-nav__toggle');
const burgerMenu = document.querySelector('.main-nav');

const changeToggle = () => {

  if (burgerMenu !== null && burgerMenu.classList.contains('main-nav--closed')) {
    burgerMenu.classList.add('main-nav--opened');
    burgerMenu.classList.remove('main-nav--closed');
  } else {
    burgerMenu.classList.remove('main-nav--opened');
    burgerMenu.classList.add('main-nav--closed');
  }
};

if (formContactsInput !== null) {
burgerToggle.addEventListener('click', changeToggle);
}

// *menu *//
const burgerMenuItemList = document.querySelectorAll('.main-nav__item');

const burgerMenuItemClick = () => {

  if (burgerMenu !== null && !burgerMenu.classList.contains('main-nav--closed')) {
    burgerMenu.classList.remove('main-nav--opened');
    burgerMenu.classList.add('main-nav--closed');
  }
};

burgerMenuItemList.forEach(btn => {
  btn.addEventListener('click', burgerMenuItemClick);
});
