// variables
const textInput = document.getElementById('textUsuario')
const message = document.querySelector(".messageOutput")
const messageSection = document.querySelector(".areaMensaje")
const messageSwitch = document.querySelector(".areaMensajeSwitch")




// Funciones

// Verficar texto valido
function isValidText(entryString) {
  const hasUpper = /[A-Z]/.test(entryString.trim());
  const hasSpecialChars = /[!@#$%^&*'"ñ()]/.test(entryString.trim());
  const hasAccentedChars = /[áéíóúàèìòù]/i.test(entryString.trim());
  const hasNumbers = /\d/.test(entryString.trim());
  const emptyInput = entryString.trim().length === 0 || !entryString;
  const isValid = !(hasUpper || hasAccentedChars || hasSpecialChars || hasNumbers || emptyInput);

  const mensajeErrorSpan = document.querySelector('.clarificationCont')
  if (mensajeErrorSpan) {
    mensajeErrorSpan.style.color = isValid ? '' : 'red';
  }
  return isValid
}


// encriptar texto valido
function encrypt(text) {
  let encryptedText = "";

  if (!isValidText(text)) {
    encryptedText = 'texto invalido'
    alert(encryptedText)
    
  } else {
    encryptedText = text
      .replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');
    
  }
  return encryptedText
}

// Funcion que encripta el texto que ingresa el usuario y lo muestra en el sidebar
function fnEncrypt() {
  let encryptedMessage = encrypt(textInput.value);
  message.innerText = encryptedMessage;
  messageSection.style.display = "none"
  messageSwitch.style.display = "block"
  

  textInput.value = "";
}



// Funcion desencriptadora

function decrypt(encryptedMessage) {

  let originalMessage = encryptedMessage

  .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
  
  return originalMessage;

}


// funcion desencriptadora
function fnDecrypt() {
  let decryptedMessage = decrypt(textInput.value);
  message.innerText = decryptedMessage;
  messageSection.style.display = "none"
  messageSwitch.style.display = "block"
  textInput.value = "";
}

// Funcion que copia el texto a la papelera

function copyText() {
  let inputText = document.querySelector(".messageOutput").innerText;
  const toCopy = inputText;
  navigator.clipboard.writeText(toCopy)
    .then(() => {
      inputText = ''
      textInput.value = ""
      messageSection.style.display = "block"
      messageSwitch.style.display = "none"
      alert('Text copied to clipboard')
    })
    .catch((err) => {
    alert(err.message)
  })
}

