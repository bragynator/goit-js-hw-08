import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

const {
  elements: { email, message },
} = formRef;

updateInputValues();

formRef.addEventListener('input', throttle(handleFormInput, 500));
formRef.addEventListener('submit', handleSubmitBtn);

function updateInputValues() {
  try {
    const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
    email.value = savedData ? savedData.email : '';
    message.value = savedData ? savedData.message : '';
  } catch (error) {
    console.error('Attention! ', error.message);
  }
}

function handleFormInput() {
  const data = JSON.stringify({
    email: email.value,
    message: message.value,
  });

  localStorage.setItem('feedback-form-state', data);
}

function handleSubmitBtn(evt) {
  evt.preventDefault();

  console.log({
    email: email.value,
    message: message.value,
  });

  localStorage.removeItem('feedback-form-state');
  evt.currentTarget.reset();
}
