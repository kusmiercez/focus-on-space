const emailInput = document.querySelector('#email');
const textarea = document.querySelector('#message');
const sendBtn = document.querySelector('.send-btn');
const errorMsg = document.querySelector('.error-msg');


const showError = (e) => {
    errorMsg.style.display = 'block';
    e.classList.remove('correct');
    e.classList.add('error');
}

const clearError = e => {
    errorMsg.style.display = 'none';
    e.classList.add('correct');
}

const checkFields = input => {
    input.forEach(e => {
        if (e.value === '') {
            showError(e)
        } else {
            clearError(e)
            checkMail()
        }
    })
}

const checkMail = () => {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (reg.test(emailInput.value))
        clearError(emailInput);
    else
        showError(emailInput);
}

sendBtn.addEventListener('click', e => {
    e.preventDefault();
    checkFields([emailInput, textarea])
})