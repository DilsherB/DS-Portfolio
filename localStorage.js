const fields = document.querySelectorAll(".formData");
const localData = {
  fName: "",
  lName: "",
  email: "",
  msg: "",
};
fields.forEach((field) => {
  field.addEventListener("input", () => {
    localData[field.name] = field.value;
    localStorage.setItem("contactFormData", JSON.stringify(localData));
  });
});
window.addEventListener("load", () => {
  let retrievedData = {};
  if (localStorage.getItem("contactFormData")) {
    retrievedData = JSON.parse(localStorage.getItem("contactFormData"));
    document.getElementById("fName").value = retrievedData.fName;
    document.getElementById("lName").value = retrievedData.lName;
    document.getElementById("email").value = retrievedData.email;
    document.getElementById("msg").value = retrievedData.msg;
  };
})