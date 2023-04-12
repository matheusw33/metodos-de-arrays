let livros = []; //Essa variavel recebe o array de livros ja convertido que sera obtido pela a API. 
const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

async function buscaDeLivros(){
    try{
        const resposta = await fetch(endpointDaAPI);
        livros = await resposta.json();
        let livrosComDesconto = AplicaDesconto(livros); // AplicaDesconto é uma função criada com o médoto map. 
        mostrarLivrosNaTela(livrosComDesconto); // função na parte 'forEach.js'
    }catch(erro){
       console.log(erro);
    }
};
buscaDeLivros(); //função deve ser iniciada assim que a página é carregada. 

