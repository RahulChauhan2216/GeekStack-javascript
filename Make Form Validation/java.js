let nameError = document.querySelector("#name-error");
let phoneError = document.querySelector("#phone-error");
let emailError = document.querySelector("#email-error");
let messageError = document.querySelector("#message-error");
let submitError = document.querySelector("#submit-error");

let validateName = () => {
  let name = document.querySelector("#name").value;
  if (name.length == 0) {
    nameError.innerHTML = `Name is Required`;
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Name is Required";
    return false;
  }
  nameError.innerHTML = '<i class = "fas fa-check-circle"></i>';
  return true;
};

let validatePhone = () => {
  let phone = document.querySelector("#phone").value;
  if (phone.length == 0 || phone.length < 10) {
    phoneError.innerHTML = `Please Enter Valid No.`;
    return false;
  }
  phoneError.innerHTML = '<i class = "fas fa-check-circle"></i>';
  return true;
};

let validateEmail = () => {
  let email = document.querySelector("#email").value;
  if (email.length == 0) {
    emailError.innerHTML = `Enter Valid Email`;
    return false;
  }
  if (
    !email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    emailError.innerHTML = `Enter Valid Email`;
    return false;
  }
  emailError.innerHTML = '<i class = "fas fa-check-circle"></i>';
  return true;
};

let ValidMessage = () => {
  let message = document.querySelector("#message").value;
  let required = 30;
  let left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = `${left} more character required`;
    return false;
  } else {
    messageError.innerHTML = '<i class = "fas fa-check-circle"></i>';
    return true;
  }
};

let validateForm = () => {
  if (!validateName || !validatePhone || validateEmail || ValidMessage) {
    submitError.innerHTML = `Please Fix Error to Submit`;
    setTimeout(() => {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
};
