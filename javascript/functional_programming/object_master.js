const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

const divisibleBy3 = pokémon.filter(obj => obj.id % 3 === 0);
console.log(divisibleBy3);

const fire = pokémon.filter(obj => obj.types.includes("fire"));
console.log(fire);

const plusOneType = pokémon.filter(obj => obj.types.length > 1);
console.log(plusOneType);

const names = pokémon.map(obj => obj.name);
console.log(names);

const greaterThan99 = pokémon.filter(obj => obj.id > 99).map(obj => obj.name);
console.log(greaterThan99);

const poison = pokémon.filter(obj => obj.types.length === 1 && obj.types[0] === "poison");
console.log(poison);

const flying = pokémon.filter(obj => obj.types.length > 1 && obj.types[1] === "flying").map(obj => obj.types[0]);
console.log(flying);

let count = 0;
const normal = pokémon.reduce(function(all_pokemon, pokemon) {
    if (pokemon.types.includes("normal"))
        count++;
}, {});
console.log(count);