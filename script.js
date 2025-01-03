document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM cargado');
    prueba();
});

const tittleCard = document.querySelector('.card .first-content span');
const valueCard = document.querySelector('.second-content span');
const cardDiv = document.querySelector('.card-container');
const footer = document.getElementById('update-date')
const apiURL = 'https://mindicador.cl/api'

let indicators = ["dolar", "euro" , "bitcoin", "utm", "uf", "libra_cobre", "tasa_desempleo"];

async function getIndicators() {
    try{
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    }catch{
        console.error('Error al obtener los datos');
    }
}


function prueba(){
    getIndicators().then(data => {
        console.log(data);

        footer.textContent = `Ultima actualización: ${data.fecha}`;

        for (let i = 0; i < indicators.length; i++) {
            console.log(data[indicators[i]].nombre);
            console.log(data[indicators[i]].valor);

            createElements(data[indicators[i]].nombre, data[indicators[i]].valor)

            
        }


    });


}

function createElements(name , value){
    const card = document.createElement('div');
    card.classList.add('card');

    const firstContent = document.createElement('div');
    firstContent.classList.add('first-content');

    const firstSpan = document.createElement('span');
    firstSpan.textContent = name;

    firstContent.appendChild(firstSpan);

    const secondContent = document.createElement('div');
    secondContent.classList.add('second-content');

    const secondSpan = document.createElement('span');
    secondSpan.textContent = value;

    secondContent.appendChild(secondSpan);

    card.appendChild(firstContent);
    card.appendChild(secondContent);

    cardDiv.appendChild(card);

}






