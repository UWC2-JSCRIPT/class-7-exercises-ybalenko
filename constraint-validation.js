/* Custom Validation
1. On "submit" action, check the following:
- First Name and Last Name should be 3 characters or more
- Email should match regex /\w+@\w+\.\w+/

2. For each item that is not valid, set invalid class on the parent of the element and show a message to the user
3. For each item that is valid, remove invalid class on the parent of the element
4. If any item is not valid, preventDefault() on the submit listener and log 'Bad input' to console */
document.addEventListener("DOMContentLoaded", function () {

    const firstName = document.querySelector("#first-name");
    const lastName = document.querySelector("#last-name");
    const email = document.querySelector("#email");
    const emailCheck = /\w+@\w+\.\w+/;
    const form = document.querySelector("form");

    // reset validation state for name
    firstName.addEventListener("change", (e) => {
        firstName.validity.valid = true;
        firstName.setCustomValidity("")
    });

    // reset validation state for surname
    lastName.addEventListener("change", (e) => {
        lastName.validity.valid = true;
        lastName.setCustomValidity("")
    });

    // reset validation state for email 
    email.addEventListener("change", (e) => {
        email.validity.valid = true;
        email.setCustomValidity("")
    });


    function checkFieldsValidation(e) {
        let allValid = false;
        let count = 0;
        // check first name is greater than 3
        if (firstName.value.length < 3) {
            firstName.validity.valid = false;
            firstName.setCustomValidity("Name should be greater than 3 letters");
            firstName.reportValidity("Name should be greater than 3 letters");
        } else {
            firstName.validity.valid = true;
            count++;
        }

        // check last name is greater than 3
        if (lastName.value.length < 3) {
            lastName.validity.valid = false;
            lastName.setCustomValidity("Surname should be greater than 3 letters");
            lastName.reportValidity("Surname should be greater than 3 letters");
        } else {
            lastName.validity.valid = true;
            count++;
        }

        // check email format
        if (!emailCheck.test(email.value)) {
            email.validity.valid = false;
            email.setCustomValidity("Wrong email format");
            email.reportValidity("Wrong email format");
        } else {
            email.validity.valid = true;
            count++;
        }

        if (count < 3) {
            e.preventDefault();
        }

    }
    form.addEventListener('submit', (e) => {
        console.log('submit')
        checkFieldsValidation(e);
    });
});
