// Añadir esto al final de tu catalogo.js
window.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q'); // Captura el valor de "q"

    if (query) {
        // 1. Ponemos el texto en el input del catálogo
        const inputCatalogo = document.querySelector(".search input");
        if (inputCatalogo) {
            inputCatalogo.value = query;
        }

        // 2. Simulamos la búsqueda
        searchValue = normalizeText(query);
        filterProducts(); // Ejecuta tu motor de búsqueda
    }
});