//O nome mais apropriado para esse arquivo deveria ser Disponíveis.js
//Aqui peguei o botão "Livros Disponiveis" no HTML e adicionei um evento de clique. Nesse evento usei o método filter para filtrar apenas os livros com quantidade MAIOR que ZERO.

const btnLivrosDisponiveis = document.querySelector("#btnLivrosDisponiveis");

btnLivrosDisponiveis.addEventListener('click', () => {

    const livrosDisponiveis = livros.filter(livro =>{ return livro.quantidade > 0  });
    const valoresSomados = somaValoresTotaisDosLivros(livrosDisponiveis); // Atribui o valor dessa função na const 'valoresSomados' para pode usa-la como parametro na função 'mostraValorTotalLivrosDisponiveis'.

    mostrarLivrosNaTela(livrosDisponiveis);
    mostraValorTotalLivrosDisponiveis(valoresSomados);
});

function mostraValorTotalLivrosDisponiveis(valores){
    valorTotalLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valores}</span></p>
    </div>
    `
};

