const ImgBox = document.querySelector('.img-box');
const imgwrap =document.querySelector('.img-wrap');

const line = document.getElementById('line')
let leftSpace =ImgBox.offsetLeft;

const original = document.getElementById('original-img');
original.style.width = ImgBox.offsetWidth +'px'


ImgBox.onmousemove = (e)=>{
 let boxWidth = (e.pageX-leftSpace) + 'px';
 imgwrap.style.width =boxWidth
 line.style.left = boxWidth
}
