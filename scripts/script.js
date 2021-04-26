document.querySelector(".burger__active").addEventListener('click',(e)=>{ e.preventDefault()
    document. querySelector(".media__header-menu").classList.toggle('burger')
    document.querySelector(".burger__active").classList.toggle('burger__btn')
})