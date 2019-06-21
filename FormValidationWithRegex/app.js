const name = document.getElementById('name');
const zip = document.getElementById('zip');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

name.addEventListener('blur',validateName);
zip.addEventListener('blur',validateZipCode);
email.addEventListener('blur',validateEmail);
phone.addEventListener('blur',validatePhoneNumber);


function validateName(event) {
  const nameValue = event.target.value;
  const re = /^[A-Za-z]{2,10}$/;
  if (!reTest(re,nameValue)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}
function validateZipCode(event) {
  const zipValue = event.target.value;
  //const re = /^[0-9]{5}(-[0-9]{4})?$/; // US ZIP CODE
  const re = /^[0-9]{6}$/; // Indian ZIP CODE
  if (!reTest(re,zipValue)) {
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }

}
function validateEmail(event) {
  const emailValue = event.target.value;
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (!reTest(re,emailValue)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}
function validatePhoneNumber(event) {
  const phoneValue = event.target.value;
  //const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;//US phone number
  const re = /^0?\d{10}$/; // Indian phone Number
  if (!reTest(re,phoneValue)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}

function reTest(re,input) {
  return re.test(input);
}
