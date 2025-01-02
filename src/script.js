const tittleCard = document.querySelector('.card .first-content span');
const valueCard = document.querySelector('.second-content span');
const apiURL = 'https://mindicador.cl/api'

let indicators = ["dolar", "euro" , "bitcoin", "utm"];

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

        for (let i = 0; i < indicators.length; i++) {
            console.log(data[indicators[i]].nombre);
            console.log(data[indicators[i]].valor);
        }


    });


}






