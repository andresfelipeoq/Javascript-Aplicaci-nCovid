# Javascript-Aplicaci-nCovid

Crear una aplicación relacionada con COVID-19 en JavaScript podría ser un proyecto significativo que ofrezca información actualizada y útil. Una de las aplicaciones comunes relacionadas con COVID-19 es un rastreador de casos. A continuación, te proporcionaré un ejemplo muy básico de cómo crear un rastreador de casos de COVID-19 utilizando JavaScript, HTML y la API de COVID-19 de Disease.sh para obtener datos.

1. **HTML**:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Rastreador de COVID-19</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <h1>Rastreador de COVID-19</h1>
    <div id="tracker">
        <label for="country">Selecciona un país: </label>
        <select id="country"></select>
        <div id="cases">
            <h2>Casos totales:</h2>
            <p id="total-cases">-</p>
        </div>
        <div id="deaths">
            <h2>Decesos:</h2>
            <p id="total-deaths">-</p>
        </div>
        <div id="recovered">
            <h2>Recuperados:</h2>
            <p id="total-recovered">-</p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

2. **CSS** (Guárdalo en un archivo llamado `styles.css`):

```css
body {
    font-family: Arial, sans-serif;
    text-align: center;
}

h1 {
    color: #333;
}

#tracker {
    margin: 20px auto;
    width: 80%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 5px #ccc;
    background-color: #f9f9f9;
}

label {
    font-size: 18px;
    margin-right: 10px;
}

select {
    font-size: 18px;
    padding: 5px;
}

#cases, #deaths, #recovered {
    display: inline-block;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 5px #ccc;
}

h2 {
    color: #333;
    font-size: 24px;
}

p {
    font-size: 20px;
}
```

3. **JavaScript** (Guárdalo en un archivo llamado `script.js`):

```javascript
document.addEventListener('DOMContentLoaded', function () {
    const countrySelect = document.getElementById('country');
    const totalCases = document.getElementById('total-cases');
    const totalDeaths = document.getElementById('total-deaths');
    const totalRecovered = document.getElementById('total-recovered');

    // Obtener la lista de países
    fetch('https://corona.lmao.ninja/v2/countries')
        .then(response => response.json())
        .then(data => {
            data.forEach(country => {
                const option = document.createElement('option');
                option.value = country.country;
                option.text = country.country;
                countrySelect.appendChild(option);
            });
        });

    // Manejar el cambio en la selección de país
    countrySelect.addEventListener('change', function () {
        const selectedCountry = countrySelect.value;
        fetch(`https://corona.lmao.ninja/v2/countries/${selectedCountry}`)
            .then(response => response.json())
            .then(data => {
                totalCases.textContent = data.cases.toLocaleString();
                totalDeaths.textContent = data.deaths.toLocaleString();
                totalRecovered.textContent = data.recovered.toLocaleString();
            });
    });
});
```

Este ejemplo crea una aplicación web simple que permite a los usuarios seleccionar un país y luego muestra los datos de casos de COVID-19 para ese país. Utiliza la API de Disease.sh para obtener los datos en tiempo real. Puedes personalizar y expandir esta aplicación para agregar más características, como un gráfico de tendencia o un mapa de calor. Asegúrate de estar al tanto de las restricciones y las políticas de uso de datos en la API que utilices.
