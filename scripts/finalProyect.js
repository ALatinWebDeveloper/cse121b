const pokeProfile = document.querySelector("#pokedexBoddy");
const filterBtn = document.querySelectorAll(".navBtn");
let mainBackground = document.querySelector("main");

let pokedex = [];
let link = "https://pokeapi.co/api/v2/pokemon/";


/*fixId fix the Id of the pokemon to be displayed with one or two "0" in order to have three digist (001, 010, 100) */
function formatData(poke) {

    let pokeId = poke.id.toString();

    if (pokeId.length == 1) {
        pokeId = "00" + pokeId;
    } else if (pokeId.length == 2) {
        pokeId = "0" + pokeId;
    }

    let pokeWeight = poke.weight / 10;
    let pokeHeight = poke.height / 10;

    pokeDisplay(poke, pokeHeight, pokeWeight, pokeId);

}


const pokeDisplay = (poke, pokeHeight, pokeWeight, pokeId) => {

    let types = poke.types.map((type) => `<p class="${type.type.name} type">${type.type.name}</p>`);

    types = types.join("");

    const div = document.createElement("div");
    div.classList.add("pokeProfile");

    div.innerHTML = `
        <div class="pokeImg">
            <img src="${poke.sprites.other["official-artwork"].front_default}" alt="pokemon image">
        </div>

        <div class="pokeInfo">
            <div class="pokeName">
                <p class= "pokeId">#${pokeId}</p>
                <h2 class="pokeName">${poke.name}</h2>
            </div>

            <div class="pokeType">
                ${types}
            </div >

    <div class="pokeStats">
        <p class="stat">${pokeHeight} M</p>
        <p class="stat">${pokeWeight} KG</p>
    </div>
        </div >
    `;
    pokeProfile.append(div);
}

const getPokemon = async () => {

    for (let i = 1; i <= 151; i++) {

        const respons = await fetch(link + i);
        pokedex = await respons.json();

        formatData(pokedex);
    }
}

function clear() {
    document.querySelector('#pokedexBoddy').innerHTML = '';
}

filterBtn.forEach(navBtn => {

    navBtn.addEventListener("click", (async event => {
        clear();

        let btnId = event.currentTarget.id;

        for (let i = 1; i <= 151; i++) {

            const respons = await fetch(link + i);
            pokedex = await respons.json();

            if (btnId == "watchAll") {

                formatData(pokedex);
            }

            else {
                const tipos = pokedex.types.map(element => element.type.name);
                if (tipos.some(tipo => tipo.includes(btnId))) {
                    formatData(pokedex);

                    
                }

            }
        }

        let replaceClass = mainBackground.classList.value;

        mainBackground.classList.replace(replaceClass, btnId);
    }))

});

getPokemon();