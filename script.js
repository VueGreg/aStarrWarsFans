const second = document.querySelector('.second')

window.addEventListener('scroll' ,() => {

    const {scrollTop, clientHeight} = document.documentElement

    // Explication de la ligne de code

    //const myScrollTop = document.documentElement.scrollTop
    //const myClientHeight = document.documentElement.clientHeight

    const topElementToTopViewport = second.getBoundingClientRect().top

    if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.5) {
        second.classList.add('active')
    }
})