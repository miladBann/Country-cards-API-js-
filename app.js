
const flagContainer = document.querySelector(".flag")
const infoContainer = document.querySelector(".info")
const flag = document.querySelector(".flagImg")
const region = document.querySelector(".r")
const capital = document.querySelector(".c")
const namee = document.querySelector(".l")
const population = document.querySelector(".cr")
const btn_app = document.querySelector("button")

function creat_card(country) {

    const request =  new XMLHttpRequest()
    request.open("GET", `https://restcountries.com/v3.1/name/${country}`)
    request.send()

    request.addEventListener("load", function() {
    const data = JSON.parse(request.responseText)
    console.log(data)

    const info_region = data[0]["region"]
    const info_capital = data[0]["capital"][0]
    const info_name = data[0]["name"]["common"]
    const info_population = (data[0]["population"] / 1000000).toFixed(1)
    const info_flag = data[0]["flags"]["png"]
    
    flag.src = info_flag

    region.textContent = `Reigion: ${info_region}`
    capital.textContent = `Capital: ${info_capital}`
    namee.textContent = `Name: ${info_name}`
    population.textContent = `Population: 👫 ${info_population} Million`


    
})
    
}

btn_app.addEventListener("click", function() {
    const input_value = document.querySelector(".country").value
    let country_to_search = input_value
    creat_card(country_to_search)
})