console.log("IT'S WORKING!!!");

function phoneNumberFormat(input) {
    input = input.replace(/\D/g, "");
    let size = input.length;

    if (size > 0){
        input = "("+input;
    }
    if (size > 3){
        input = input.slice(0,4) + ")" + input.slice(4,11);
    }
    if (size > 6){
        input = input.slice(0,8) + "-" + input.slice(8);
    }
    return input;
}

const password = document.querySelector("#password");
const passConfirm = document.querySelector("#password-confirm");
const passValidation = document.querySelector("#pass-validation");
function passCheck(pass, confirm) {
    if (pass.value === confirm.value) {
        passValidation.textContent = "";
        pass.style.border = "1px solid blue";
        passConfirm.style.border = "1px solid blue";
    } else {
        passValidation.textContent = "* passwords do not match";
        pass.style.border = "1px solid red";
        passConfirm.style.border = "1px solid red";
    }
}


