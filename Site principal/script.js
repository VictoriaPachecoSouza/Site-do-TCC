const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    modeToggle = document.querySelector(".dark-light"),
    searchToggle = document.querySelector(".searchToggle"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    sidebarClose = document.querySelector(".sidebarClose");


// ==========================================
// MODO DARK / CLARO
// ==========================================

// Verifica se existe um tema salvo ou define 'claro' como padrão
const temaSalvo = localStorage.getItem("tema") || "claro";

// Carrega o tema baseado no estado salvo
if (temaSalvo === "dark") {
    body.classList.add("dark");
    if (modeToggle) modeToggle.classList.add("active");
} else {
    body.classList.remove("dark");
    if (modeToggle) modeToggle.classList.remove("active");
}



// ==========================================
// BOTÃO DARK / CLARO
// ==========================================

if (modeToggle) {
    modeToggle.addEventListener("click", () => {

        // Alterna o modo escuro
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // Salva o tema escolhido
        if (body.classList.contains("dark")) {
            localStorage.setItem("tema", "dark");
        } else {
            localStorage.setItem("tema", "claro");
        }

    });
}


// ==========================================
// BOTÃO DE BUSCA
// ==========================================

if (searchToggle) {
    searchToggle.addEventListener("click", () => {
        searchToggle.classList.toggle("active");
    });
}

// Função auxiliar para toque responsivo
const adicioneEventoToque = (elemento, acao) => {
    if (!elemento) return;
    
    // Dispara imediatamente no toque
    elemento.addEventListener("touchstart", (e) => {
        e.preventDefault(); // Impede o clique duplo e o "click" fantasma
        acao();
    }, { passive: false });

    // Mantém o clique como fallback para computadores
    elemento.addEventListener("click", (e) => {
        acao();
    });
};

// Função auxiliar para garantir o toque ultra-sensível e instantâneo
const adicioneEventoToqueInstantaneo = (elemento, acao) => {
    if (!elemento) return;
    
    // Dispara no exato milissegundo em que o dedo encosta na tela (sem delay)
    elemento.addEventListener("touchstart", (e) => {
        acao(e);
    }, { passive: true });

    // Mantém o clique físico do mouse caso esteja no computador
    elemento.addEventListener("click", (e) => {
        acao(e);
    });
};

// ==========================================
// ABRIR MENU MOBILE (Ultra-sensível)
// ==========================================
adicioneEventoToqueInstantaneo(sidebarOpen, () => {
    nav.classList.add("active");
});

// ==========================================
// FECHAR MENU MOBILE NO X (Ultra-sensível)
// ==========================================
adicioneEventoToqueInstantaneo(sidebarClose, () => {
    nav.classList.remove("active");
});

// ==========================================
// FECHAR MENU CLICANDO/TOCANDO FORA
// ==========================================
if (body) {
    const fecharMenuFora = (e) => {
        const clickedElm = e.target;
        if (
            !clickedElm.classList.contains("sidebarOpen") &&
            !clickedElm.closest(".menu")
        ) {
            nav.classList.remove("active");
        }
    };

    // Escuta o toque no corpo da página de forma passiva para máxima performance e velocidade
    body.addEventListener("touchstart", fecharMenuFora, { passive: true });
    body.addEventListener("click", fecharMenuFora);
}
