function list() {
    console.log("button clicked")
    axios.get("https://swapi.dev/api/planets?search=alderaan").then(function(response) {
        console.log(response)
        for (let index in response.data.results[0].residents) {
            console.log(index)
            axios.get(response.data.results[0].residents[index]).then(function(response) {
                console.log(response)
                let resident = document.createElement("h2")
                console.log(resident)
                resident.textContent = response.data.name
                console.log(resident)
                document.body.appendChild(resident)
            })
        }
    })
}
let button = document.querySelector("button")
button.addEventListener("click", list)