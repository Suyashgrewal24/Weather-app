let form = document.querySelector("form")

let input = document.querySelector("input")

let cityName = document.getElementById("cityName")
let cityTime = document.getElementById("cityTime")
let cityTemp = document.getElementById("cityTemp")
let conditions = document.getElementById("conditions")
let img = document.getElementById("weatherImage")
let wind = document.getElementById("windSpeed")
let feel = document.getElementById("feel")


form.addEventListener("submit", weatherApp)





async function weatherApp(e) {
    e.preventDefault()


    let API_KEY = "2dc317ab2dde423880364100222609";

    let res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${input.value} °C`)

    data = await res.json()

    console.log(data.current.feelslike_c)

    let error = data.error //true
    if(error){
        window.alert("Please Enter Correct City Name")

    } else {


        let temprature = data.current.temp_c
        let city = data.location.name
        let time = data.location.localtime
        let image = data.current.condition.icon
        let windSpeed = data.current.wind_kph
        let feelsLike = data.current.feelslike_c




        let condition = data.current.condition.text

        cityTemp.innerText = temprature;
        cityName.innerText = city;
        cityTime.innerText = time;
        conditions.innerText = condition
        wind.innerText = windSpeed
        feel.innerText = feelsLike

        img.setAttribute("src", `https:${image}`)



    }



    form.reset()


}