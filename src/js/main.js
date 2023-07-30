import '../css/style.scss';

const password = document.getElementById('password');

const passwordToggle = document.querySelector('.password_icon');

const passwordMsg = document.getElementById('password_msg');

const passwordGroup = document.getElementById('password_group');

// console.log(password,passwordToggle);

passwordToggle.addEventListener('click', ()=> {
  if (password.type === 'password') {
    password.setAttribute('type','text');
    passwordToggle.classList.remove('show');
    passwordToggle.classList.add('show');
  } else {
    password.setAttribute('type','password');
    passwordToggle.classList.remove('show');
  }
})

password.addEventListener('keyup',()=>{
  checkPassword(password.value);
})

function checkPassword(info){
  passwordMsg.textContent = '需要';
  const lower = new RegExp('(?=.*[a-z])');
  const upper = new RegExp('(?=.*[A-Z])');
  const number = new RegExp('(?=.*[0-9])');
  const special = new RegExp('(?=.*[!@#\$^&\*])');
  const length = new RegExp('(?=.{8,})');
  // const email = new RegExp('(?:[a-z0-9!#\$%&\'*+/=?^_\`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_\`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])'); 
  // if(info)
  let errorflag = false;
  if(!lower.test(info)){
    passwordMsg.textContent += '小写';
    errorflag = true;
  }
  if(!upper.test(info)){
    passwordMsg.textContent += '大写';
    errorflag = true;
  }
  if(!number.test(info)){
    passwordMsg.textContent += '数字';
    errorflag = true;
  }
  if(!special.test(info)){
    passwordMsg.textContent += '特殊';
    errorflag = true;
  }
  if(!length.test(info)){
    passwordMsg.textContent += '长度大于8个字符';
    errorflag = true;
  }

  if (errorflag) {
    passwordGroup.classList.remove('success');
    passwordGroup.classList.add('error');
  }else{
    passwordGroup.classList.remove('error');
    passwordGroup.classList.add('success');
  }
}