let apiData;
const countriesList = document.querySelector("#countriesList");
const enter = document.querySelector("#enter")

async function setup(){
    fetchREST();
    countriesList.innerHTML = "";
    apiData = await fetchREST()
    apiData.map(country => { 
        createNewCountryElement(country)
})
}


const fetchREST = async () => {
    const response = await fetch ("https://restcountries.com/v3.1/all")
    const data = await response.json();
    return data;
}
setup();

function createNewCountryElement (country) {
   const newListItem = document.createElement("li")
   newListItem.innerText = `${country.name.common} population: ${country.population}`
   countriesList.appendChild(newListItem);
}


enter.addEventListener("click", event => {
    // event.preventDefault();
    const newItem = document.getElementById("filter").value
    // console.log(newItem);

})


function filterItems() {
    return apiData.filter((newListItem) => newListItem.toLowerCase().includes(newItem.toLowerCase()));
 console.log(filterItems(apiData));
}
  


