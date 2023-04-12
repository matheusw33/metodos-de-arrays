const listaLivros = document.querySelector("#livros");
const valorTotalLivrosDisponiveis = document.querySelector("#valor_total_livros_disponiveis");

//mostraLivrosNaTela é a função responsável por fazer exatamente o que seu nome ja diz. Ela recebe a const 'listaLivros' onde vai adicionar os produtos dinamicamente. 
function mostrarLivrosNaTela(listaDeLivros){

  valorTotalLivrosDisponiveis.innerHTML = ''; //Essa sessão deve ficar vazia até que o usuário clique no botão 'Livros Disponíveis'.
  listaLivros.innerHTML = ''; //Essa é a sessão que vai receber os livros dinamicamente que virão a partir da API.
  
    listaDeLivros.forEach(livro => {

        const disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'; //A quantidade de livros é maior que zero? Se for adicione a classe 'livro__imagens' ( ':' ) senão a outra classe.

        //Abaixo acrescentamos os produtos dinaicamente com os valores que vieram da API.
        //Template String - é possivel combinar strings com variáveis usando a crase e adicionando as variaveis entre ${}. 
        listaLivros.innerHTML += `
        <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
              ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
            <div class="tags">
              <span class="tag">${livro.categoria}</span>
            </div>
        </div>`
    });
};
