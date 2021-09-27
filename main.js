const inp = document.querySelector(".search");
const form = document.querySelector("#form");
const far = document.querySelector("#far");
const cel = document.querySelector("#cel");
const citi = document.querySelector("#citi")

form.addEventListener('submit', (event) => {
    event.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?lang=ru&q=${inp.value}&appid=df9e86b31cf1d9baa6bce45bbfe929cf`)
    .then( (response) => response.json())
    .then((data) => {
        console.log(data);
        if(data.cod === "404"){
            alert(data.message)
            return;
        }
        citi.innerText = data.name;
        far.innerText = Math.round(data.main.temp);
        cel.innerText = Math.round(data.main.temp - 273,15);
    })
    inp.value = '';
})