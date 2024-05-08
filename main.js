const url = "https://pokeapi.co/api/v2/pokemon/"
const pokemonName = document.getElementById("pokemon-name");
const pokemonSprite = document.getElementById("pokemon-sprite");
const type1 = document.getElementById("type-1");
const type2 = document.getElementById("type-2");
let count = 0;
const typeColor = [
  {
    "type": "normal",
    "typeSp": "Normal",
    "color": "rgb(146, 157, 163)",
  },
  {
    "type": "fighting",
    "typeSp": "Lucha",
    "color": "rgb(206, 65, 107)",
  },
  {
    "type": "flying",
    "typeSp": "Volador",
    "color": "rgb(143, 169, 222)",
  },
  {
    "type": "poison",
    "typeSp": "Veneno",
    "color": "rgb(170, 107, 200)",
  },
  {
    "type": "ground",
    "typeSp": "Tierra",
    "color": "rgb(207, 120, 69)",
  },
  {
    "type": "rock",
    "typeSp": "Roca",
    "color": "rgb(197, 183, 140)",
  },
  {
    "type": "bug",
    "typeSp": "Bicho",
    "color": "rgb(145, 193, 47)",
  },
  {
    "type": "ghost",
    "typeSp": "Fantasma",
    "color": "rgb(82, 105, 173)",
  },
  {
    "type": "steel",
    "typeSp": "Acero",
    "color": "rgb(90, 142, 162)",
  },
  {
    "type": "fire",
    "typeSp": "Fuego",
    "color": "rgb(255, 157, 85)",
  },
  {
    "type": "water",
    "typeSp": "Agua",
    "color": "rgb(80, 144, 214)",
  },
  {
    "type": "grass",
    "typeSp": "Planta",
    "color": "rgb(99, 188, 90)",
  },
  {
    "type": "electric",
    "typeSp": "Eléctrico",
    "color": "rgb(244, 210, 60)",
  },
  {
    "type": "psychic",
    "typeSp": "Psíquico",
    "color": "rgb(250, 113, 121)",
  },
  {
    "type": "ice",
    "typeSp": "Hielo",
    "color": "rgb(115, 206, 192)",
  },
  {
    "type": "dragon",
    "typeSp": "Dragón",
    "color": "rgb(11, 109, 195)",
  },
  {
    "type": "dark",
    "typeSp": "Siniestro",
    "color": "rgb(90, 84, 101)",
  },
  {
    "type": "fairy",
    "typeSp": "Hada",
    "color": "rgb(236, 143, 230)",
  }
];

async function uploadFirstPoke(){
  count+=1
  const response = await fetch(url + count +"/");
  const data = await response.json();
  pokemonName.textContent = data.name.toUpperCase()
  pokemonSprite.setAttribute('src', data.sprites.front_default)
  const typeName1 = typeColor.find(elemento => elemento.type == data.types[0].type.name)
  const typeName2 = typeColor.find(elemento => elemento.type == data.types[1].type.name)
  type1.style.backgroundColor = typeName1.color
  type2.style.backgroundColor = typeName2.color
}

uploadFirstPoke()


//Búsqueda
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', async (e)  =>{
  e.preventDefault()
  const searchByName = document.getElementById('search-by-name').value.toLowerCase();
  const response = await fetch(url + searchByName)
  const data = await response.json();
  pokemonName.textContent = data.name.toUpperCase()
  pokemonSprite.setAttribute('src', data.sprites.front_default)
  count = data.id
  if (data.types.length == 1) {
    type2.classList.replace('type-label','hide')
    const typeName1 = typeColor.find(elemento => elemento.type == data.types[0].type.name)
    type1.textContent = typeName1.typeSp
    type1.style.backgroundColor = typeName1.color
  } else {
    type2.classList.remove('hide')
    type2.classList.add('type-label')
    const typeName1 = typeColor.find(elemento => elemento.type == data.types[0].type.name)
    const typeName2 = typeColor.find(elemento => elemento.type == data.types[1].type.name)
    type1.textContent = typeName1.typeSp
    type1.style.backgroundColor = typeName1.color
    type2.textContent = typeName2.typeSp
    type2.style.backgroundColor = typeName2.color
  }
  }
)

//Siguiente Pokémon

document.getElementById("next-pokemon").onclick = async function(){
  if (count +1 > 1024) {
    alert("Este es el último Pokémon")
  } else {
    count+=1;
  const response = await fetch(url + count + "/");
  const data = await response.json();
  pokemonName.textContent = data.name.toUpperCase()
  pokemonSprite.setAttribute('src', data.sprites.front_default)
  if (data.types.length == 1) {
    type2.classList.replace('type-label','hide')
    const typeName1 = typeColor.find(elemento => elemento.type == data.types[0].type.name)
    type1.textContent = typeName1.typeSp
    type1.style.backgroundColor = typeName1.color
  } else {
    type2.classList.remove('hide')
    type2.classList.add('type-label')
    const typeName1 = typeColor.find(elemento => elemento.type == data.types[0].type.name)
    const typeName2 = typeColor.find(elemento => elemento.type == data.types[1].type.name)
    type1.textContent = typeName1.typeSp
    type1.style.backgroundColor = typeName1.color
    type2.textContent = typeName2.typeSp
    type2.style.backgroundColor = typeName2.color
  }
  }
}

//Pokémon anterior
document.getElementById("previous-pokemon").onclick = async function(){
  if (count -1 <= 0) {
    alert("No hay ningún Pokémon previo.")
  } else {
    count-=1;
  const response = await fetch(url + count + "/");
  const data = await response.json();
  pokemonName.textContent = data.name.toUpperCase()
  pokemonSprite.setAttribute('src', data.sprites.front_default)
  if (data.types.length == 1) {
    type2.classList.replace('type-label','hide')
    const typeName1 = typeColor.find(elemento => elemento.type == data.types[0].type.name)
    type1.textContent = typeName1.typeSp
    type1.style.backgroundColor = typeName1.color
  } else {
    type2.classList.remove('hide')
    type2.classList.add('type-label')
    const typeName1 = typeColor.find(elemento => elemento.type == data.types[0].type.name)
    const typeName2 = typeColor.find(elemento => elemento.type == data.types[1].type.name)
    type1.textContent = typeName1.typeSp
    type1.style.backgroundColor = typeName1.color
    type2.textContent = typeName2.typeSp
    type2.style.backgroundColor = typeName2.color
  }
  }
}



// Ventana modal
var modal = document.getElementById("ventanaModal");
// Botón que abre el modal
var boton = document.getElementById("pokemon-sprite");
// Hace referencia al elemento <span> que tiene la X que cierra la ventana
var span = document.getElementsByClassName("cerrar")[0];

// Cuando el usuario hace clic en el botón, se abre la ventana
boton.addEventListener("click",async function() {
  modal.style.display = "block";
  const response = await fetch(url + count + "/");
  const data = await response.json();
  const windowSprite = document.getElementById("window-sprite");
  const windowTitle = document.getElementById("window-title");
  const modalWindow = document.getElementById("modal-window");
  const pokeAbility = document.getElementById("ability");
  const hp = document.getElementById("h-p");
  const attack = document.getElementById("atk");
  const defense = document.getElementById("def");
  const spAttack = document.getElementById("sp-atk");
  const spDefense = document.getElementById("sp-def");
  const speed = document.getElementById("spd");
  const hpBar = document.getElementById("hp-bar");
  const atkBar = document.getElementById("atk-bar");
  const defBar = document.getElementById("def-bar");
  const spAtkBar = document.getElementById("sp-atk-bar");
  const spDefBar = document.getElementById("sp-def-bar");
  const speedBar = document.getElementById("spd-bar");
  const typeName1 = typeColor.find(elemento => elemento.type == data.types[0].type.name)
  windowSprite.setAttribute('src', data.sprites.front_default)
  windowTitle.textContent = data.name.toUpperCase()
  modalWindow.style.backgroundColor = typeName1.color
  pokeAbility.textContent = data.abilities[0].ability.name
  hp.textContent = data.stats[0].base_stat
  attack.textContent = data.stats[1].base_stat
  defense.textContent = data.stats[2].base_stat
  spAttack.textContent = data.stats[3].base_stat
  spDefense.textContent = data.stats[4].base_stat
  speed.textContent = data.stats[5].base_stat
  hpBar.style.width = data.stats[0].base_stat + "px"
  atkBar.style.width = data.stats[1].base_stat + "px"
  defBar.style.width = data.stats[2].base_stat + "px"
  spAtkBar.style.width = data.stats[3].base_stat + "px"
  spDefBar.style.width = data.stats[4].base_stat + "px"
  speedBar.style.width = data.stats[5].base_stat + "px"

  

});

// Si el usuario hace clic en la x, la ventana se cierra
span.addEventListener("click",function() {
  modal.style.display = "none";
});

// Si el usuario hace clic fuera de la ventana, se cierra.
window.addEventListener("click",function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});