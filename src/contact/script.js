const name = document.querySelector('#name');
const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');
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

const checkMail = () => {
    if (email.value === '') {
        showError(email);
        return false;
    }
    const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!email.value.match(reg)) {
        showError(email);
        return false
    }
    clearError(email)
    return true;
}

const checkMessage = () => {
    requiredChar = 25;
    if (message.value.length < requiredChar) {
        showError(message)
        return false;
    }
    clearError(message)
    return true
}

const clearFields = (fields) => {
    fields.forEach(field => {
        field.value = '';
    field.classList.remove('correct');
    field.classList.remove('error');
})
}

const validateForm = () => {
    if (checkMail() && checkMessage()) {
        sendEmail()
        console.log("ok")
        clearFields([name, email, subject, message])
    }
}

(function() {
    emailjs.init('AjD75cgBirHrr55vO');
}());

const sendEmail = () => {
    const serviceId = "service_1scmvve";
    const templateId = "template_drmxe2t";
    const params = {
        from_name: name.value,
        email: email.value,
        message: message.value
    }
    
    emailjs.send(serviceId, templateId, params)
        .then(res => console.log("Success", res.status));
}

sendBtn.addEventListener('click', e => {
    e.preventDefault();
    validateForm()
})

