document.getElementById('name').addEventListener('blur',validateName);
document.getElementById('zipcode').addEventListener('blur',validateZip);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('phone').addEventListener('blur',validatePhone);


function validateName(){
  const name = document.getElementById('name');
  const re = /^[a-zA-Z0-9]{2,10}$/;
  if(!re.test(name.value)){
    name.classList.add('is-invalid');
  }else{  
    name.classList.remove('is-invalid');
  }
}

function validateZip(e){
  const zip = e.target;
  const re = /^[0-9]{5}(-[0-9]{4})?$/;

  if(!re.test(zip.value)){
    zip.classList.add('is-invalid');
  }else{
    zip.classList.remove('is-invalid');
  }
}

function validateEmail(e){
  const email = e.target;
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)){
    email.classList.add('is-invalid');
  }else{
    email.classList.remove('is-invalid');
  }
}

function validatePhone(e){
  const phone = e.target;
  const re = /^\(?[0-9]{3}\)?[ \-\.]?([0-9]{3})[ \-\.]?([0-9]{4})$/;

  if(!re.test(phone.value)){
    phone.classList.add('is-invalid');
  }else{
    phone.classList.remove('is-invalid');
  }
}
