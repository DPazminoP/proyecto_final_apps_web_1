const buscador = document.getElementById("buscador");
const productos = document.querySelectorAll(".item-producto");

// Función para normalizar texto (minúsculas + sin tildes)
function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

// Evento de búsqueda en tiempo real
buscador.addEventListener("input", () => {
    const textoBusqueda = normalizarTexto(buscador.value);

    productos.forEach(producto => {
        const nombreProducto = producto.querySelector("h4").textContent;
        const nombreNormalizado = normalizarTexto(nombreProducto);

        if (nombreNormalizado.includes(textoBusqueda)) {
            producto.style.display = "block";
        } else {
            producto.style.display = "none";
        }
    });
});