const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.target.elements;

  if (email.value === '' || password.value === '') {
    alert('Будь-ласка введіть данні!');
    return;
  }

  const data = {
    email,
    password,
  };

  console.log(data);

  formEl.reset();
}