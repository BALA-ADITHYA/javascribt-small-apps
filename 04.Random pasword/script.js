const passwordbox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";

const number ="0123456789";
const symbols = "@#$%^&*()_+~|}{[]<>?-=/";

const all = upperCase+lowerCase+number+symbols;


function createPassword () {
    let password = '';
    password+= upperCase[Math.floor(Math.random()*upperCase.length)];
    password+= lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+= number[Math.floor(Math.random()*number.length)];
    password+= symbols[Math.floor(Math.random()*symbols.length)];


    while(length >= password.length){
        password+= all[Math.floor(Math.random()*all.length)];
    }
    passwordbox.value = password;
}

function copy (){
    passwordbox.select();
    document.execCommand("copy")
    passwordbox.value=''
}