const images=[
'images/foto1.jpg',
'images/foto2.jpg',
'images/foto3.jpg'
];
let i=0;
const left=document.querySelector('.left');
const main=document.querySelector('.main');
const right=document.querySelector('.right');
function render(){
 const n=images.length;
 left.src=images[(i-1+n)%n];
 main.src=images[i];
 right.src=images[(i+1)%n];
}
document.getElementById('prev').onclick=()=>{i=(i-1+images.length)%images.length;render();}
document.getElementById('next').onclick=()=>{i=(i+1)%images.length;render();}
render();
