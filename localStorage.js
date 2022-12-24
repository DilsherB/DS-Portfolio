const fields = document.querySelectorAll('.formData');
let localData = {
  fName: '',
  lName: '',
  email: '',
  msg: '',
};
window.addEventListener('load', () => {
  const storedData = localStorage.getItem('portfolio-form-data');
  fields.forEach((field) => {
    localData = JSON.parse(storedData);
    field.value = localData[field.name];
    field.addEventListener('input', () => {
      localData[field.name] = field.value;
      localStorage.setItem('portfolio-form-data', JSON.stringify(localData));
      console.log(localStorage.getItem('portfolio-form-data'));
    });
  });
});