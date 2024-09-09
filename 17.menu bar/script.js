const selFiled = document.getElementById("selectfield");
const seltext = document.getElementById("selectText");
 const options = document.getElementsByClassName('options');
const list = document.getElementById('list')
 selFiled.onclick =function(){
   list.classList.toggle('hide')
 }

//  for(option of options){
//     option.oncilck = function(){
//         seltext.innerHTML = this.innertext;
//     }
//  }
options.forEach(option => {
    option.oncilck =()=>{
        seltext.innerHTML = this.textContent
    }
});

