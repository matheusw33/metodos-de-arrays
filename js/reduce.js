//A ideia aqui é bem simples. Apenas somar os valores de todos os livros. 
function somaValoresTotaisDosLivros(livros){
    return livros.reduce((acc,livro) => acc + livro.preco, 0).toFixed(2);
}