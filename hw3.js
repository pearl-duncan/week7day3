const getPoke = async (e)=>{
    e.preventDefault();
    console.log('form submitted')
    const pokemonElement = e.target.querySelector("#pokemon");
    const pokemon = pokemonElement.value;
    console.log(pokemon)
    console.log(e.target)

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    
    console.log(e.target.pokemon)
    console.log(e.target.pokemon.value)

    const container = document.getElementById('container')
    let card = `
        <div>
            <img src='${data.sprites.front_default}'>
            <h3>${data.name}</h3>
        </div>`

    container.innerHTML = card
}
const form = document.querySelector('form')
form.addEventListener('submit', getPoke)