let scrollContainer = document.querySelector('.gallery')
let backbtn = document.getElementById('backbtn')
let nextbtn = document.getElementById('nextbtn')

scrollContainer.addEventListener('wheel', (e) => {
  e.preventDefault()
  scrollContainer.style.scrollBehavior = 'auto'
  scrollContainer.scrollLeft += e.deltaY
})

nextbtn.addEventListener('click', (e)=>{
    scrollContainer.style.scrollBehavior = 'smooth'
    scrollContainer.scrollLeft +=900
})
backbtn.addEventListener('click', (e)=>{
    scrollContainer.style.scrollBehavior = 'smooth'
    scrollContainer.scrollLeft -=900
})

