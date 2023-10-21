console.log('API TIME!')

const getBeers = async (e)=>{
    e.preventDefault();
    console.log('form submitted')
    let number = e.target.number.value
    if (number =='')number = 1;
    console.log(number)

    const url = `https://random-data-api.com/api/v2/beers?size=${number}`
    //SYNTAX fetch(url, options)
    //fetch eill return a promis
    //option are an optional dictionary
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)

    const container = document.getElementById('container')
    container.innerHTML ='' //clears it everytime you seach so it does keep adding on and on and on
    if (Array.isArray(data)){//more than one
        for (let beer of data){
            let card = `
        <div>
            <h3>${beer.name} by ${beer.brand}</h3>
            <h5>${beer.alcohol} alc</h5>
        </div>`

        container.innerHTML += card
        }

    }
    else {//just one
        let card = `
        <div>
            <h3>${data.name} by ${data.brand}</h3>
            <h5>${data.alcohol} alc</h5>
        </div>`

        container.innerHTML = card
    }
}

const form = document.querySelector('form')
form.addEventListener('submit', getBeers)