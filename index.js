
document.addEventListener("DOMContentLoaded", (event) => {
    const cards_img = document.querySelectorAll(".card img");

    cards_img.forEach(element => {
        element.addEventListener('click', (event) => {
            element.classList.toggle('blackandwhite');
        });
    });
});