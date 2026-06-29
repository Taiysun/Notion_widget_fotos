const images=[
'images/amor.jpg',
'images/anel.jpg',
'images/molly.jpg',
'images/cabides.jpg',
'images/casal.jpg',
 'images/molly2.jpg',
'images/casanova.jpg',
'images/comidas.jpeg',
'images/compras.jpg',
'images/casal2.jpg',
'images/couple.jpg',
'images/library.jpg',
'images/morning.jpg',
'images/quartogamers.jpg',
'images/roupas.jpg',
'images/viagens.jpg',
'images/mollyeu.jpg',
'images/quartos.jpg'
 
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
