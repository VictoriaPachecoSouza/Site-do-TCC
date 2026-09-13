    // Lista com os IDs em texto das tabelas do seu HTML
    const listaMeses = [
      "janeiro", "fevereiro", "março", "abril", "maio", "junho", 
      "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];

    // Inicia controlando o índice 0 (Janeiro)
    let mesAtualIndex = 0; 

    // FUNÇÃO QUE RODA SOZINHA ASSIM QUE A PÁGINA ABRE
    function iniciarCalendario() {
      // Força o primeiro mês (Janeiro) a ficar ativo e visível na inicialização
      const primeiroMes = document.getElementById(`mes-${listaMeses[mesAtualIndex]}`);
      if (primeiroMes) {
        primeiroMes.classList.add('ativo');
        primeiroMes.style.display = 'table';
      }
    }

    // FUNÇÃO DOS BOTÕES DE SETAS
    function mudarMes(direcao) {
      // 1. Esconde o mês atual antes de mudar
      const nomeMesAntigo = listaMeses[mesAtualIndex];
      const mesAntigo = document.getElementById(`mes-${nomeMesAntigo}`);
      if (mesAntigo) {
        mesAntigo.classList.remove('ativo');
        mesAntigo.style.display = 'none';
      }

      // 2. Calcula matematicamente o próximo índice
      mesAtualIndex = mesAtualIndex + direcao;

      // Se passar de dezembro (11), volta para janeiro (0)
      if (mesAtualIndex > 11) {
        mesAtualIndex = 0;
      }
      // Se voltar antes de janeiro (0), vai para dezembro (11)
      if (mesAtualIndex < 0) {
        mesAtualIndex = 11;
      }

      // 3. Mostra o novo mês calculado exatamente no mesmo lugar
      const nomeNovoMes = listaMeses[mesAtualIndex];
      const novoMes = document.getElementById(`mes-${nomeNovoMes}`);
      if (novoMes) {
        novoMes.classList.add('ativo');
        novoMes.style.display = 'table';
      }
    }

    // Executa a inicialização automática assim que o arquivo carrega
    iniciarCalendario();

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
