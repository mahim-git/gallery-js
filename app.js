const modal = document.querySelector('.modal');
const prev = document.querySelectorAll('.gallery img');
const zoomImg = document.querySelector('.zoom-img');
const caption = document.querySelector('.caption');

prev.forEach(show => {
    show.addEventListener('click', () => {
        modal.classList.add('open');
        zoomImg.classList.add('zoom');

        //DYNamic img

        const zoomSrc = show.getAttribute('data-fullsize');
        zoomImg.src= zoomSrc;
        const captionText = show.alt;
        caption.textContent = captionText;
    });
})

modal.addEventListener('click', (e)=>{
    if(e.target.classList.contains('close')){
        modal.classList.remove('open');
        zoomImg.classList.remove('zoom');
    }
})