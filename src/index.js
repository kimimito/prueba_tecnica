function removeElement(event) {
    event.target.parentElement.remove();
}

(function load(){
    const form = document.getElementById('form')
    const cardContainer = document.getElementById('cardContainer')
    const btnCreateCard = document.getElementById('btnCreateCard')
    const inputTitle = document.getElementById('inputTitle')

    const templateCard = title => {
        return (`
            <button class="delete" onclick="removeElement(event)">X</button>
            <a href="#">
                <div class="card-title">
                    <span>Lorem</span>
                    <h3>${title}</h3>
                </div>
                <div class="card-icons">
                    <div>
                        <img src="img/icona-24-gris-rama.svg" alt="icon-rama"/><span>Lorem ipsum</span>
                    </div>
                    <div>
                        <img src="img/icona-24-gris-creditos.svg" alt="icon-creditos"/><span>Lorem | Ipsum</span>
                    </div>
                    <div>
                        <img src="img/icona-24-gris-presencial.svg" alt="icon-presencial"/><span>Lorem ipsum</span>
                    </div>
                    <div>
                        <img src="img/icona-24-gris-map-fitxa.svg" alt="icon-ficha"/><span>Lorem ipsum</span>
                    </div>
                </div>
            </a>
        `)
    }

    btnCreateCard.addEventListener('click', (event) => {
        if(form.title.value != ""){
            event.preventDefault();
            createNewCard()
        }
    })

    inputTitle.addEventListener("keypress", (event) => {
        if (event.key === 'Enter' && form.title.value != "") {
            event.preventDefault();
            createNewCard()
          }
    })

    const createNewCard = () => {
        const newCard = document.createElement('div')
        newCard.classList.add('card')
        newCard.innerHTML = templateCard(`${form.title.value}`)

        cardContainer.insertBefore(newCard, cardContainer.firstChild)

        form.reset()
    }

})()
