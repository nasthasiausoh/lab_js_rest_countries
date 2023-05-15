let apiData;
const countriesList = document.querySelector("#countriesList");

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

// function filterItems(arr, query) {
//     return arr.filter(el) => 
//     el.toLowerCase().includes(query.toLowerCase());
// }

// document.querySelector("button").addEventListener("click", filterItems) {
//     countriesList.filter(country => c)
// }



// const enter = document.getElementById("enter"); 
// const newItem = document.getElementById("new-country").value;



