const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    modeToggle = document.querySelector(".dark-light"),
    searchToggle = document.querySelector(".searchToggle"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    sidebarClose = document.querySelector(".sidebarClose");

// Código do clique para o Modo Escuro
modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");
});

// Código do clique para a Lupa de busca
searchToggle.addEventListener("click", () => {
    searchToggle.classList.toggle("active");
});

// Código do clique para abrir o Menu Mobile
sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active");
});

// Código do clique para fechar o Menu Mobile no 'X'
sidebarClose.addEventListener("click", () => {
    nav.classList.remove("active");
});

// Código do clique para fechar o Menu Mobile clicando fora dele
body.addEventListener("click", e => {
    let clickedElm = e.target;

    if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.closest(".menu")) {
        nav.classList.remove("active");
    }
});