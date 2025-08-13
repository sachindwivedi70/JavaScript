// Fix The function using Early Return...
function checkAge(age){
    if(age<18) return "too young";
    return "allowed";
}
console.log(checkAge(8));