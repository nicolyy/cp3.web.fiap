//Primeiro Nome
const primeiroNomeLabel = document.querySelector('.primeiro-nome-container label');
const primeiroNomeInput = document.querySelector('.primeiro-nome-container input');
//Segundo Nome
const segundoNomeLabel = document.querySelector('.segundo-nome-container label');
const segundoNomeInput = document.querySelector('.segundo-nome-container input');
//Email
const emailLabel = document.querySelector('.email-container label');
const emailInput = document.querySelector('.email-container input');
//Senha
const senhaLabel = document.querySelector('.senha-container label');
const senhaInput = document.querySelector('.senha-container input');
//Confirmar Senha
const confirmarLabel = document.querySelector('.confirmacao-container label');
const confirmarInput = document.querySelector('.confirmacao-container input');

//Required Primeiro Nome
primeiroNomeInput.setAttribute('required', '');
//Required Segundo Nome
segundoNomeInput.setAttribute('required', '');
//Required Email
emailInput.setAttribute('required', '');
//Required Senha
senhaInput.setAttribute('required', '');
//Required Confirmar
confirmarInput.setAttribute('required', '');

//Maxlength Senha
senhaInput.setAttribute('maxlength', '8');
//Maxlength Confirmação
confirmarInput.setAttribute('maxlength', '8');

//Validação Passiva Primeiro Nome
primeiroNomeInput.addEventListener('keyup', () => {
  if(primeiroNomeInput.value.length < 5){
    primeiroNomeInput.setAttribute('style', 'outline-color: red;');
    primeiroNomeLabel.setAttribute('style', 'color: red;');
  } else {
    primeiroNomeInput.setAttribute('style', 'outline-color: green;');
    primeiroNomeLabel.setAttribute('style', 'color: green;');
  }
});

//Validação Passiva Segundo Nome
segundoNomeInput.addEventListener('keyup', () => {
  if(segundoNomeInput.value.length < 5){
    segundoNomeInput.setAttribute('style', 'outline-color: red;');
    segundoNomeLabel.setAttribute('style', 'color: red;');
  } else {
    segundoNomeInput.setAttribute('style', 'outline-color: green;');
    segundoNomeLabel.setAttribute('style', 'color: green;');
  }
});

//Validação Passiva Email
emailInput.addEventListener('keyup', () => {
  if(emailInput.value.length < 5 || emailInput.value.includes('@') == false){
    emailInput.setAttribute('style', 'outline-color: red;');
    emailLabel.setAttribute('style', 'color: red;');
  } else {
    emailInput.setAttribute('style', 'outline-color: green;');
    emailLabel.setAttribute('style', 'color: green;');
  }
});

//Validação Passiva Senha
senhaInput.addEventListener('keyup', () => {
  if(senhaInput.value.length < 6){
    senhaInput.setAttribute('style', 'outline-color: red;');
    senhaLabel.setAttribute('style', 'color: red;');
  } else {
    senhaInput.setAttribute('style', 'outline-color: green;');
    senhaLabel.setAttribute('style', 'color: green;');
  }
});

//Validação Passiva Confirmar Senha
confirmarInput.addEventListener('keyup', () => {
  if(confirmarInput.value != senhaInput.value){
    confirmarInput.setAttribute('style', 'outline-color: red;');
    confirmarLabel.setAttribute('style', 'color: red;');
  } else {
    confirmarInput.setAttribute('style', 'outline-color: green;');
    confirmarLabel.setAttribute('style', 'color: green;');
  }
});

//Div de Status
const divStatus = document.querySelector('.status-info');

//Validação Ativa
addEventListener('click', (e) => {
  if(e.target.id == 'btnSubmit') {
    //Primeiro Nome
    if(primeiroNomeInput.value.length < 5 || primeiroNomeInput.value == '') {
      divStatus.setAttribute('style', 'color: red;');
      divStatus.innerHTML = '<span><strong>Campo "Primeiro nome" com menos de 5 caracteres ou vazio!</strong></span>';

    //Segundo Nome
    } else if (segundoNomeInput.value.length < 5 || segundoNomeInput.value == '') {
      divStatus.setAttribute('style', 'color: red;');
      divStatus.innerHTML = '<span><strong>Campo "Segundo nome" com menos de 5 caracteres ou vazio!</strong></span>';
    //Email  
    } else if (emailInput.value.length < 5 || emailInput.value.includes('@') == false || emailInput.value == '') {
      divStatus.setAttribute('style', 'color: red;');
      divStatus.innerHTML = '<span><strong>Campo "Email" com menos de 5 caracteres, sem @ ou vazio!</strong></span>';
    //Senha
    } else if (senhaInput.value.length < 6 || senhaInput.value == '') {
      divStatus.setAttribute('style', 'color: red;');
      divStatus.innerHTML = '<span><strong>Campo "Senha" com menos de 6 caracteres ou vazio!</strong></span>';
    //Confirmar Senha
    } else if (senhaInput.value != confirmarInput.value || confirmarInput.value == '') {
      divStatus.setAttribute('style', 'color: red;');
      divStatus.innerHTML = '<span><strong>Senhas não conferem!</strong></span>';
    } else {
      divStatus.setAttribute('style', 'color: green;');
      divStatus.innerHTML = '<span><strong>Todas as informações conferem!</strong></span>'
    }
  }
});

//Dark Mode
//Get Body
const body = document.querySelector('body');
const btnDarkMode = document.querySelector('#btn-dark-mode');
//Get title-header
const titleHeader = document.querySelector('.title-header');
//Get btnSubmit
const btnSubmit = document.querySelector('#btnSubmit');

btnDarkMode.addEventListener('click', () => {
  if(body.getAttribute('style') == 'background-color: #16161d;'){
    body.removeAttribute('style');
    titleHeader.removeAttribute('style');
    btnSubmit.removeAttribute('style');
    btnDarkMode.innerHTML = 'Dark Mode';  
  } else {
    body.setAttribute('style', 'background-color: #16161d;');
    titleHeader.setAttribute('style', 'color: #16161d;');
    btnSubmit.setAttribute('style', 'background-color: #16161d; border-color: #16161d;');
    btnDarkMode.innerHTML = 'Light Mode';
    
  }
});