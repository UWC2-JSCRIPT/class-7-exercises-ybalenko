const selectEl = document.getElementById('contact-kind');
const selectSubEl = document.getElementById('coding-kind');
const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const emailCheck = /\w+@\w+\.\w+/;
const techEl = document.querySelector('.technical');

const setSelectValidity = function () {
    console.log("validating")
    if (selectEl.value === 'choose') {
        selectEl.setCustomValidity('Must select an option');
        return;
    }
    selectEl.setCustomValidity('');


    const businessEl = document.querySelectorAll('.business');


    console.log("technical", techEl)
    if (selectEl.value === 'business') {
        businessEl[0].classList.remove('hide');
        businessEl[1].classList.remove('hide');
        techEl.classList.add('hide');
        businessEl[0].querySelector('input').required = true;
        businessEl[1].querySelector('input').required = true;

    } else {
        businessEl[0].classList.add('hide');
        businessEl[1].classList.add('hide');
        techEl.classList.remove('hide');
        businessEl[0].querySelector('input').required = false;
        businessEl[1].querySelector('input').required = false;

    }
};

setSelectValidity();
selectEl.addEventListener('change', setSelectValidity);


// reset validation state for name
fullName.addEventListener("change", (e) => {
    fullName.validity.valid = true;
    fullName.setCustomValidity("")
});

// reset validation state for email
email.addEventListener("change", (e) => {
    email.validity.valid = true;
    email.setCustomValidity("")
});

// reset validation state for message 
message.addEventListener("change", (e) => {
    message.validity.valid = true;
    message.setCustomValidity("")
});

const form = document.getElementById('connect-form');
form.addEventListener('submit', function (e) {
    const inputs = document.getElementsByClassName('validate-input');
    let formIsValid = true;
    let count = 0
    const emailCheck = /\w+@\w+\.\w+/;

    Array.from(inputs).forEach(input => {
        if (input.getAttribute('id') === "full-name") {
            if (input.value.length < 3) {
                input.validity.valid = false;
                input.setCustomValidity("Name should be greater than 3 letters");
                input.reportValidity("Name should be greater than 3 letters");
            } else {
                count++;
            }
        }
        if (input.getAttribute('id') === "email") {
            if (!emailCheck.test(input.value)) {
                input.validity.valid = false;
                input.setCustomValidity("Wrong email format");
                input.reportValidity("Wrong email format");
            } else {
                count++;
            }
        }
        if (input.getAttribute('id') === "message") {
            if (input.value.length < 10) {
                input.validity.valid = false;
                input.setCustomValidity("Message should be greater than 10 letters");
                input.reportValidity("Message should be greater than 10 letters");
            } else {
                count++;
            }
        }

        if (count < 3) {
            e.preventDefault();
        } else {
            formIsValid;
        }
    })
    console.log(window.getComputedStyle(techEl).display);
    if (window.getComputedStyle(techEl).display != "none") {
        if (selectSubEl.value === 'choose') {
            console.log("lang not chosen")
            selectSubEl.setCustomValidity('Must select an option');
            return;
        }
    }
    selectSubEl.setCustomValidity('');

})


