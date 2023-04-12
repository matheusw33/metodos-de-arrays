const btnDeFiltro = document.querySelectorAll(".btn");

btnDeFiltro.forEach(botao => {
    botao.addEventListener('click', () => filtraLivros(botao));
});
    
function filtraLivros(botao){
    const categoriaDoBotao = botao.value;
    let livrosFiltrados = livros.filter(livro =>
       livro.categoria == categoriaDoBotao);
    mostrarLivrosNaTela(livrosFiltrados);
};

