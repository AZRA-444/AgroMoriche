// busquedas.js - Para tu index.html
const searchInputIndex = document.querySelector(".search input");

if (searchInputIndex) {
    searchInputIndex.addEventListener("keypress", (e) => {
        if (e.key === 'Enter') {
            const query = e.target.value.trim();
            if (query) {
                // Redirigimos al catálogo enviando el texto en la URL
                window.location.href = `pages/catalogo.html?q=${encodeURIComponent(query)}`;
            }
        }
    });
}