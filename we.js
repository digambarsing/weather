const city=document.querySelector(".city");
const search=document.querySelector("search");

const API_key="47c87ece2cf180db7119b858d154af4c";


const getCityCoordinates = () =>{
    const cityName =city.valus.trim();
    if(!cityName) return;
    url='http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_key}';


    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
    }).catch(() =>{
        alert("error ocurred");
    });

    console.log(cityName)
}

search.addEventListener("click",getCityCoordinates);