document.querySelector("#form").addEventListener("submit" , postData);

function postData(e){
    e.preventDefault();
    const country = document.querySelector("#country").value
    const city = document.querySelector("#city").value
    const population = document.querySelector("#population").value
const obj={
    country,
    city,
    population
}
console.log(obj)
}