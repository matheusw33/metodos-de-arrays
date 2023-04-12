function AplicaDesconto(livros){
    const valorDoDesconto = 0.3;
        livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * valorDoDesconto)};
    })
    return livrosComDesconto;
}