const habilidad = document.querySelector(`#hability`);
const info = [
    {
        "imagen": "https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png",
        "nombre": "HTML",
        "nivel": 2
    },
    {
        "imagen": "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
        "nombre": "CSS",
        "nivel": 2
    },
    {
        "imagen": "https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png",
        "nombre": "Tailwind",
        "nivel": 2
    },
    {
        "imagen": "https://img.icons8.com/color/512/javascript.png",
        "nombre": "JavaScript",
        "nivel": 1
    }
]

listaHabilidades(info, habilidad)

function listaHabilidades(items, card){
   
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