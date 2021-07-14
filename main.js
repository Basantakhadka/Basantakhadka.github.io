const header=document.querySelector('.main-header');
window.addEventListener('scroll',()=>{
    const scrollPos = window.scrollY;
    if (scrollPos > 10) {
        header.classList.add('sticky');

        
    } else {
        header.classList.remove("sticky");
    }

})
