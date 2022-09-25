const formEl = document.querySelector('form');
const emailFld = document.querySelector("input[name='email']");
const passwordFld = document.querySelector("input[name='password']");
const repasswordFld = document.querySelector("input[name='repassword']");
const fullNameFld = document.querySelector("input[name='fullname']");
const merchantFld = document.querySelector("input[name='merchant']");

const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

let canSubmit = true;

// isValid: true/false
const validateFld = (el, isValid) => {
  if (isValid === false) {
    canSubmit = false;
    el.parentElement.classList.add('form-field-error');
  } else {
    canSubmit = true;
    el.parentElement.classList.remove('form-field-error');
  }
};

emailFld.addEventListener('keyup', function (event) {
  //   console.log('is valid', event.target.reportValidity());
  const isValid = event.target.reportValidity();
  //   console.log('field is valid', result);
  validateFld(event.target, isValid);
});

passwordFld.addEventListener('keyup', function (event) {
  const result = passwordRegEx.test(event.target.value);
  validateFld(event.target, result);
});

repasswordFld.addEventListener('keyup', function (event) {
  const result = passwordFld.value === event.target.value;
  validateFld(event.target, result);
});

fullNameFld.addEventListener('keyup', function (event) {
  const isValid = event.target.reportValidity();
  validateFld(event.target, isValid);
});

formEl.addEventListener('submit', function (event) {
  event.preventDefault();
  //   console.log(event.target.elements);
  const formFields = [...event.target.elements];
  const filtered = formFields.filter((el) => {
    if (el.type === 'submit') {
      return false;
    }
    if (el.type === 'checkbox') {
      return false;
    }
    return true;
  });

  const values = filtered.map((el) => {
    return el.value;
  });

  const isFormFilled = values.every(function (el) {
    if (el != '') {
      return true;
    } else {
      return false;
    }
  });
  //   console.log(isFormFilled);
  if (canSubmit && isFormFilled) {
    console.log(' CAN submit the fom');
    // axios
    return;
  } else {
    console.log('CANNOT submit the fom');
  }
});
