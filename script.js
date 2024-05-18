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