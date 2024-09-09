const pass= document.getElementById('password');
const message= document.getElementById('message');
const str= document.getElementById('strength');


pass.addEventListener('input',()=>{
    if(pass.value.length>0){
        message.style.display ='block'
    }else{
        message.style.display ='none'
    }

    if(pass.value.length < 4){
        str.innerHTML  = 'Weak'
        message.style.color = 'red'
        pass.style.borderColor ="#ff5925"
    }else if(pass.value.length>=4 && pass.value.length < 8){
        str.innerHTML ='Medium'
        message.style.color = 'yellow'
        pass.style.borderColor ="yellow"
    }else if (pass.value.length >8){
            str.innerHTML = 'Strong'
            message.style.color = 'green'
        pass.style.borderColor ="#26d730"
    }
})