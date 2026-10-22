const body = document.querySelector("body");
const nav = document.querySelector("nav");
const modeToggle = document.querySelector(".dark-light");
const searchToggle = document.querySelector(".searchToggle");
const searchBox = document.querySelector(".searchBox");
const sidebarOpen = document.querySelector(".sidebarOpen");
const sidebarClose = document.querySelector(".sidebarClose");


// =========================================================
// MODO ESCURO
// =========================================================

const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "dark") {
    body.classList.add("dark");

    if (modeToggle) {
        modeToggle.classList.add("active");
    }
}


if (modeToggle) {
    modeToggle.addEventListener("click", (e) => {

        e.stopPropagation();

        body.classList.toggle("dark");
        modeToggle.classList.toggle("active");

        if (body.classList.contains("dark")) {
            localStorage.setItem("tema", "dark");
        } else {
            localStorage.setItem("tema", "light");
        }

    });
}
// =========================================================
// LUPA DE BUSCA
// =========================================================

if (searchToggle && searchBox) {
    searchToggle.addEventListener("click", (e) => {
        e.stopPropagation();

        searchToggle.classList.toggle("active");
        searchBox.classList.toggle("active");

        const input = document.querySelector(".search-field input");

        if (input && searchBox.classList.contains("active")) {
            setTimeout(() => {
                input.focus();
            }, 150);
        }
    });
}


// =========================================================
// PESQUISA
// =========================================================

const searchInput = document.querySelector(".search-field input");

if (searchInput) {

    searchInput.addEventListener("input", () => {

        const termo = searchInput.value.trim().toLowerCase();

        if (termo === "") {
            return;
        }

        // Procura textos existentes na página
        const elementos = document.querySelectorAll(
            "h1, h2, h3, h4, p, span, li, a, button"
        );

        let encontrado = null;

        elementos.forEach((elemento) => {

            if (encontrado) return;

            const texto = elemento.textContent
                .trim()
                .toLowerCase();

            if (
                texto.includes(termo) &&
                !elemento.closest(".searchBox")
            ) {
                encontrado = elemento;
            }

        });

        if (encontrado) {

            encontrado.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            encontrado.style.outline = "3px solid #5cb82a";

            setTimeout(() => {
                encontrado.style.outline = "";
            }, 2000);
        }

    });
}


// =========================================================
// LIMPAR PESQUISA E FECHAR LUPA
// =========================================================

const cancelarBusca = document.querySelector(".searchToggle .cancel");

if (cancelarBusca) {

    cancelarBusca.addEventListener("click", (e) => {

        e.stopPropagation();

        if (searchInput) {
            searchInput.value = "";
        }

        // Fecha a caixa de pesquisa e remove o active do botão e da box
        if (searchBox) {
            searchBox.classList.remove("active");
        }
        if (searchToggle) {
            searchToggle.classList.remove("active");
        }

    });

}

// =========================================================
// ABRIR MENU MOBILE
// =========================================================

if (sidebarOpen) {

    sidebarOpen.addEventListener("click", (e) => {

        e.stopPropagation();

        nav.classList.add("active");

    });

}


// =========================================================
// FECHAR MENU MOBILE NO X
// =========================================================

if (sidebarClose) {

    sidebarClose.addEventListener("click", (e) => {

        e.stopPropagation();

        nav.classList.remove("active");

    });

}


// =========================================================
// CLIQUE FORA (MENU E LUPA)
// =========================================================

body.addEventListener("click", (e) => {

    const clickedElm = e.target;


    // Não fecha o menu se clicar no hambúrguer
    if (
        sidebarOpen &&
        clickedElm.closest(".sidebarOpen")
    ) {
        return;
    }


    // Não fecha se clicar dentro do menu interno
    if (
        clickedElm.closest(".menu")
    ) {
        return;
    }


    // Não fecha a pesquisa se clicar dentro da caixa de busca ou do botão da lupa
    if (
        clickedElm.closest(".searchBox") || 
        clickedElm.closest(".searchToggle")
    ) {
        return;
    }


    // Se clicar totalmente fora, fecha o menu mobile e a lupa
    if (nav) {
        nav.classList.remove("active");
    }
    
    if (searchToggle) {
        searchToggle.classList.remove("active");
    }

    if (searchBox) {
        searchBox.classList.remove("active");
    }

});