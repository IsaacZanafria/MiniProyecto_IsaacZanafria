//HABILIDADES
const habilidad = document.querySelector(`#hability`);
const info = [
    {
        "imagen": "./src/img/html.png",
        "nombre": "HTML",
        "nivel": 2
    },
    {
        "imagen": "./src/img/css.png",
        "nombre": "CSS",
        "nivel": 2
    },
    {
        "imagen": "./src/img/tailwind.png",
        "nombre": "Tailwind",
        "nivel": 2
    },
    {
        "imagen": "./src/img/js.png",
        "nombre": "JavaScript",
        "nivel": 1
    },
    {
        "imagen": "./src/img/react.png",
        "nombre": "React",
        "nivel": 1
    },
    {
        "imagen": "./src/img/nodejs.png",
        "nombre": "NodeJS",
        "nivel": 1
    },
    /*{
        "imagen": "./src/img/git.png",
        "nombre": "Git",
        "nivel": 1
    },
    {
        "imagen": "./src/img/github.png",
        "nombre": "GitHub",
        "nivel": 1
    }*/
]

listaHabilidades(info, habilidad)

function listaHabilidades(items, card){
    card.innerHTML = ""
    for (let i = 0; i < items.length; i++){
        const item = items[i];
        const template = `
            <div class="logos">
            <img src="${item.imagen}" alt="${item.nombre}" />
            <div class="text">
              <span>Nombre: ${item.nombre}</span>
              <span>Nivel: ${item.nivel}</span>
            </div>
          </div>`;
          card.innerHTML += template;
    }
}



//HABILIDADES EXTRA
const exhabil = document.querySelector(`#extra_hability`);
const info_2 = [
    {
        "imagen": "./src/img/git.png",
        "nombre": "Git",
        "nivel": 1
    },
    {
        "imagen": "./src/img/github.png",
        "nombre": "GitHub",
        "nivel": 1
    }
]

listaExtraHabilidades(info_2, exhabil)

function listaExtraHabilidades(items, card){
    card.innerHTML = ""
    for (let i = 0; i < items.length; i++){
        const item = items[i];
        const template = `
            <div class="extra_logos">
            <img src="${item.imagen}" alt="${item.nombre}" />
            <div class="text">
              <span>Nombre: ${item.nombre}</span>
              <span>Nivel: ${item.nivel}</span>
            </div>
          </div>`;
          card.innerHTML += template;
    }
}



//BOTON DE MENU
const botonMenu = document.querySelector(`#botonmenu`)
const opcion = document.querySelector(`#option`)
const opcion2 = document.querySelector(`#option2`)
const opcion3 = document.querySelector(`#option3`)
const barraNav = document.querySelector(`#navbar`)

botonMenu.addEventListener(`click`, function(){
    barraNav.classList.toggle("menu")
})

opcion.addEventListener("click", function(){
    barraNav.classList.add("menu")
})
opcion2.addEventListener("click", function(){
    barraNav.classList.add("menu")
})
opcion3.addEventListener("click", function(){
    barraNav.classList.add("menu")
})