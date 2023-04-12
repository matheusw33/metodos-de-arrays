//Método sort - conseguimos ordenar os produtos por preço. NÃO FILTRAR, ORDENAR MATHEUS RS
const btnOrdenaPreco = document.querySelector("#btnOrdenarPorPreco");

btnOrdenaPreco.addEventListener('click', filtraPreco);

function filtraPreco(){
        const livrosComPrecoFiltrado =  livros.sort( (a,b) => a.preco - b.preco);
        mostrarLivrosNaTela(livrosComPrecoFiltrado);
};