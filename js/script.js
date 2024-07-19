//1. Declaramos constantes
const botones = document.querySelectorAll(".botones__div");

const images = [
    './imgs/spezial-sneakers.webp',
    './imgs/Nike-air-force-one-picante.webp',
    './imgs/reebokwork-rb321-zigpulse-black01.webp',
    './imgs/vans-old-school-01.webp',
    './imgs/explorer.avif',
    './imgs/hoody.jpg',
    './imgs/arizona.webp',
    './imgs/Levis-501-Jean-Review-gear-patrol-slide-1.webp',
    './imgs/newbalance.webp',
    './imgs/converse.webp'
];

const imagenFondo = document.querySelector(".imgfondo");

botones.forEach((boton, index) => {
    boton.addEventListener("mouseover", () => {
        botonHovereado = boton;
        botones.forEach(boton => {
            if (boton === botonHovereado) {
                boton.style.opacity = 1;
            } else {
                boton.style.opacity = 0.5;
            }
        });

        imagenFondo.style.opacity = 1;
        imagenFondo.style.backgroundImage = `url(${images[index]})`;
    });

    boton.addEventListener("mouseout", () => {
        botones.forEach(boton => {
            boton.style.opacity = 1;
            imagenFondo.style.opacity = 0;
        });

    });
});