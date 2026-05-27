// =========================
// ELEMENTOS
// =========================
const searchInput = document.querySelector(".search input");
const cards = document.querySelectorAll(".cards");
const filters = document.querySelectorAll(".filters button");
const noResults = document.querySelector(".no-results");

// =========================
// ESTADO
// =========================
let currentFilter = "all";
let searchValue = "";

// =========================
// UTILIDAD: normalizar texto
// =========================
const normalizeText = (text = "") =>
    text
        .toString()
        .toLowerCase()
        .trim();

// =========================
// FILTRADO PRINCIPAL
// =========================
function filterProducts() {

    let found = false;

    cards.forEach(card => {

        // 🔒 seguridad por si falta data
        const name = normalizeText(card.dataset.name);
        const category = normalizeText(card.dataset.category);

        const matchSearch = name.includes(searchValue);
        const matchCategory =
            currentFilter === "all" || category === currentFilter;

        const isVisible = matchSearch && matchCategory;

        // =========================
        // VISIBILIDAD
        // =========================
        card.style.display = isVisible ? "" : "none";

        // animación suave (mejora UX)
        card.style.opacity = isVisible ? "1" : "0";
        card.style.transform = isVisible ? "scale(1)" : "scale(0.98)";

        if (isVisible) found = true;

    });

    // =========================
    // NO RESULTS STATE
    // =========================
    if (noResults) {
        noResults.style.display = found ? "none" : "block";
    }
}

// =========================
// SEARCH INPUT
// =========================
if (searchInput) {
    searchInput.addEventListener("input", (e) => {

        searchValue = normalizeText(e.target.value);

        filterProducts();

    });
}

// =========================
// FILTER BUTTONS
// =========================
filters.forEach(btn => {

    btn.addEventListener("click", () => {

        currentFilter = btn.dataset.filter || "all";

        filters.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        filterProducts();

    });

});