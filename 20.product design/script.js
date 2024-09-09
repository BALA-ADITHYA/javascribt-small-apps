let productImg =document.getElementById('productImg');
let btn = document.getElementsByClassName('btn');
console.log(btn)
btn[0].onclick  = ()=>{
    productImg.src = 'images/image1.png'
    
    for(bt of btn){
        bt.classList.remove('active')
    }
    btn[0].classList.add('active')
}

btn[1].onclick  = ()=>{
    productImg.src = 'images/image2.png';
     
    for(bt of btn){
        bt.classList.remove('active')
    }
    btn[1].classList.add('active')
}

btn[2].onclick  = ()=>{
    productImg.src = 'images/image3.png';
     
    for(bt of btn){
        bt.classList.remove('active')
    }
    btn[2].classList.add('active')
}