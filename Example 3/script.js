const ulke = "turkey"

function Name() {
    fetch('https://corona.lmao.ninja/v2/countries/turkey')
        .then((Response) => {
            return Response.json();
        })
        .then((data) => {
            document.getElementById("flag").src = data.countryInfo.flag;
            document.getElementById('country').innerHTML = data.country.toLocaleString();
            document.getElementById("active").innerHTML = data.active.toLocaleString();
            document.getElementById("cases").innerHTML = data.cases.toLocaleString();
            document.getElementById("critical").innerHTML = data.critical.toLocaleString();
            document.getElementById("death").innerHTML = data.deaths.toLocaleString();
            document.getElementById("recorved").innerHTML = data.recovered.toLocaleString();
            document.getElementById('test').innerHTML = data.tests.toLocaleString();
        })
}


fetch('https://corona.lmao.ninja/v2/countries/' + ulke)
    .then((Response) => {
        return Response.json();
    })
    .then((data) => {
        document.getElementById("flag").src = data.countryInfo.flag;
        document.getElementById('country').innerHTML = data.country.toLocaleString();
        document.getElementById("active").innerHTML = data.active.toLocaleString();
        document.getElementById("cases").innerHTML = data.cases.toLocaleString();
        document.getElementById("critical").innerHTML = data.critical.toLocaleString();
        document.getElementById("death").innerHTML = data.deaths.toLocaleString();
        document.getElementById("recorved").innerHTML = data.recovered.toLocaleString();
        document.getElementById('test').innerHTML = data.tests.toLocaleString();
    })