const fields = document.querySelectorAll('.formData');
const localData = {
  fName: '',
  lName: '',
  email: '',
  msg: '',
};
fields.forEach((field) => {
  field.addEventListener('input', () => {
    localData[field.name] = field.value;
    localStorage.setItem('contactFormData', JSON.stringify(localData));
  });
});
const retrievedData = JSON.parse(localStorage.getItem('contactFormData'));
window.addEventListener('load', () => {
  fields.forEach((field) => {
  field.value = retrievedData[field.name];
    });
  });
