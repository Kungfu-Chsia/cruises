import './vendor.js';
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
  formContactsInput.addEventListener('input', checkNumber);
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
  formContactsEmail.addEventListener('input', checkMail);
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
  //hideModalForm(burgerMenu, 'main-nav--closed','main-nav--opened')
};

burgerMenuItemList.forEach(btn => {
  btn.addEventListener('click', burgerMenuItemClick);
});

// ***
const hideModalForm = (modalForm, classHideAdd, classHideRemove) => {
  if (modalForm !== null && !modalForm.classList.contains(classHideAdd)) {
    // modalForm.classList.remove(classHideRemove);
    // modalForm.classList.add(classHideAdd);
  }
};

document.addEventListener('click', (event) => {

  if ( event.target.className != 'main-nav' && event.target.className != 'main-nav__toggle') {
    hideModalForm(document.querySelector('.main-nav'), 'main-nav--closed','main-nav--opened');
  }
});

//* form *//
function saveForm(form) {
  const formName = form.id
  const formData = new FormData(form)
  const object = {}

  formData.forEach(function(value, key) {
    object[key] = value
    })

  //console.log(object,'jr')
  const json = JSON.stringify(object)
  localStorage.setItem('form['+ formName +']', json)
  }

  function syncForm(formName) {
    const form = document.getElementById(formName)

    form.addEventListener('submit', function(event) {
      saveForm(event.target)
  })
  }

  syncForm('registration')

  //** overlay */
  document.addEventListener('click', function(e) {
    let actMenu = document.querySelector('.overlay');
    //console.log(actMenu,e.target)
    // console.log(actMenu ,e.target , actMenu.classList)
    if (actMenu && e.target !== actMenu && !actMenu.classList.contains(e.target)) {
      // console.log(actMenu && e.target !== actMenu && !actMenu.classList.contains(e.target));
      console.log("1",actMenu)
      actMenu.classList.remove('hidden');
      actMenu.classList.add('active');
    }
    if (burgerMenu !== null && !burgerMenu.classList.contains('hidden')) {
      console.log("2",actMenu)
      actMenu.classList.remove('active');
      actMenu.classList.add('hidden');
  };
});
  // window.addEventListener('scroll', (e) => {
  //   window.scrollTo(0,0);
  // });
