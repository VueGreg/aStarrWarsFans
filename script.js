const second = document.querySelector('.second')

window.addEventListener('scroll' ,() => {

    const {scrollTop, clientHeight} = document.documentElement

    const topElementToTopViewport = second.getBoundingClientRect().top

    if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.5) {
        second.classList.add('active')
    }
})