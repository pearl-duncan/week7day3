const getPoke = async (e)=>{
    e.preventDefault();
    console.log('form submitted')
    let pokemon = e.target.pokemon.value
    if (pokemon =='')pokemon = pickachu;
    console.log(pokemon)
    
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    

    const container = document.getElementById('container')
    container.innerHTML =''
    let card = `
        <div>
            <img src='${data.sprites.front_default}'>
            <h3>${data.name}</h3>
        </div>`

        container.innerHTML = card
}
const form = document.querySelector('form')
form.addEventListener('submit', getPoke)