const cont = document.querySelector("#contenedor")
const info =[
    {
        img: "./src/img/proyecto1.png",
        title: "MI PERFIL",
        desc: "Mi primer proyecto que consta de una página con breve información sobre mi persona.",
        link:"https://stunning-tanuki-6a30ca.netlify.app/"
    },
    {
        img: "./src/img/proyecto2.png",
        title: "REGISTRO PRODUCTOS",
        desc: "Página con un form y una tabla que registra todo lo que pida el form.",
        link: "https://deft-tiramisu-cfd670.netlify.app/"
    },
    {
        img: "./src/img/proyecto3.png",
        title: "DRAWCON",
        desc: "Primer página web que he realizado con los primeros conocimientos que tuve sobre HTML y CSS.",
        link:"https://imaginative-pavlova-a46e67.netlify.app/"
    },
    {
        img: "./src/img/proyecto4.png",
        title: " AGREGAR CONTACTO",
        desc: "Página donde agregar y eliminar contactos, la funcionalidad es con JavaScript -aún esta en trabajo-.",
        link:"https://sage-macaron-12d4ea.netlify.app/"
    },
]

listaProyectos(info, cont)

function listaProyectos(items, card){
    card.innerHTML = ""
    for (let i = 0; i < items.length; i++){
        const item = items[i];
        const template = `
             <div class="box">
                <img src="${item.img}" alt="Proyecto 1">
                <div class="texto">
                    <h4>${item.title}</h4>
                    <p>${item.desc}</p>
                </div>
                <a href="${item.link}" target="_blank"><button>ABRIR</button></a>
            </div>`;
          card.innerHTML += template;
    }
}