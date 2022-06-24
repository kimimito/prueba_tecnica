function removeElement(event) {
    event.target.parentElement.remove();
}

(function load(){
    const form = document.getElementById('form');
    const cardContainer = document.getElementById('cardContainer');

    const templateCard = title => {
        return (`
            <button class="delete" onclick="removeElement(event)">X</button>
            <a href="https://web.gencat.cat/ca/inici" target="_blank">
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
        `);
    }

    form.onsubmit = (e) => {
        e.preventDefault()
        if(form.title.value != ""){
            createNewCard(`${form.title.value}`);
        }
    }

    const createNewCard = (title) => {
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.innerHTML = templateCard(title);

        cardContainer.insertBefore(newCard, cardContainer.firstChild);

        form.reset();
    }

    const initCardTitle = [
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsul Dolor sit',
        'Lorem ipsum',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat neque ut purus congue tempor.'
    ]

    initCardTitle.forEach((title) =>{
        createNewCard(title);
    })

})()
