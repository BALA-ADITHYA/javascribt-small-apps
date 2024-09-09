let icon = document.getElementById('icon');

// localStorage.setItem("theme","light")

let localData = localStorage.getItem("theme")

if(localData =="light"){
    icon.src= "images/moon.png"
    document.body.classList.remove("dark-theme")
}else if(localData == "dark"){

    icon.src ="images/sun.png"
    document.body.classList.add("dark-theme")
}

icon.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        icon.src="images/sun.png"
        localStorage.setItem("theme","dark");
    }else{
        icon.src = "images/moon.png"
        localStorage.setItem("theme","light");
    }
})