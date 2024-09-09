const input  = document.getElementById('input-box');
const listcontainer  = document.getElementById('list-container');
const button = document.getElementsByTagName('Button');
console.log(button)


function addtask(){
    if(input.value===''){
        alert("you must write something");
        return
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listcontainer.appendChild(li);
        input.value ="";
        let span = document.createElement('span');
        span.innerHTML ="\u00d7"
        li.appendChild(span)
        saveData();
    }
}
input.addEventListener('keyup', (e)=>{
    if(e.key==='Enter'){
        addtask();
    }else if(e.key ==='keyZ'){
        input.innerHTML = '';
    }
})
listcontainer.addEventListener("click", (e)=> {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName ==='SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
})
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML )
}
function showTask() {
listcontainer.innerHTML = localStorage.getItem("data");
}

showTask();