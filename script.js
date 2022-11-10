window.onload = iniciar;

function iniciar() {
    let boton = document.getElementById("btnCargar");
    boton.addEventListener('click', clickBoton);
}

async function cargarUrl(url){
    let response = await fetch(url);
    return response.json();
}

function clickBoton(){
    let json = await cargarUrl('https://api.covid19tracking.narrativa.com/api/2020-05-05/country/germany');
    console.log(json)

    let estadisticas = json.dates["2020-05-22"].countries.spain
    console.log(estadisticas);


    today_confirmed: 235290
today_deaths: 28678
today_hospitalised_patients_with_symptoms: 0




}