const menu=document.querySelector('.menu-1')
const closed=document.querySelector('.close-btn')
const menuist=document.querySelector('.menu-items')

menu.addEventListener('click', function(){
    menuist.style.display='block';
    console.log('click')
})
closed.addEventListener('click', function(){
    menuist.style.display='none';
    console.log('click')
})
