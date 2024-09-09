const number =document.getElementById('number');
 let count=0;
 let id= setInterval(() => {
  
    if(count==65){
        clearInterval(id)
    }else{
        count += 1;
        number.innerHTML = count+'%';
    }
    
 }, 30);