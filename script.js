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

const list = document.querySelector('ul')

list.addEventListener('click', (e) => {
    let itemMenu = e.target.getAttribute('value')
    apiCall(itemMenu, e.target.tagName, e.target)
})

const apiCall = (word, nameTarget, typeTarget) => {
    const second = document.querySelector('.second')
    second.classList.add('inactive')
    let loadCard = document.querySelector('.loading-card')
    loadCard.style.visibility = 'visible'
    if (typeof word === "string" ) {
        fetch(`https://swapi.dev/api/${word}/?format=json`)
        .then (response => response.json())
        .then ((data) => {
            if (word !== 'films') {
                const tab = Object.values(data)
                let newUl = document.createElement('ul')
                newUl.classList.add('list-over')

                const nav = document.querySelector('nav')
                nav.classList.add('upperHeigth')

                if (nameTarget === "LI") {
                    typeTarget.appendChild(newUl)
                    loadCard.style.visibility = 'hidden'
                }

                tab[3].forEach(element => {
                    const newLi = document.createElement('li')
                    newLi.textContent = element.name
                    newUl.appendChild(newLi)
                    
                });
            }
            
        })
        .catch((error) => {
            console.error(error)
        })
    }
}