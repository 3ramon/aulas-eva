// variaveis - caixas com etiquetas 
const readlineSync = require('readline-sync');


nome = "Ramon"
idade = 15

// var X
// const - 
// let -

// operadores artimeticos
// +
// /
// -
// *

// != diferente
// =  atribuicao
// == comparacao de igualdade
// === comparacao de igualdade estrita
// ! negacao

// operador booleanos

// || 
// &&

pessoa = {
    'nome': 'Ramon',
    'idade': 25
}

console.log('Exemplo acesso em objeto', pessoa.nome)

pessoas = [
    {
        'nome': 'Maria',
        'idade': 26
    },
    pessoa

]

console.log('Exemplo acesso lista', pessoas[0].nome)

// loop

// for 

// let index -> declaracao
// index < array.length -> condicao 
// incremento
for (let index = 0; index < pessoas.length; index++) {
    if(pessoas[index].nome == "Maria")
        console.log("achou")
    else
        console.log('passei')
}

pessoas.forEach(pessoa => {
    if(pessoa.nome == "Maria")
        console.log("achou")
});

// while
opcao = 0;
do{
    console.log('1 - listar usuarios')
    console.log('2 - cadastrar usuario')
    console.log('3 - remover usuario')
    console.log('4 - Sair')

    opcao = readlineSync.question("Opção: ");

     switch (opcao) {
        case '1':
            console.log('Listando usuários...');
            // ... sua lógica aqui
            break;
        case '2':
            console.log('Cadastrando usuário...');
            // ... sua lógica aqui
            break;
        case '3':
            console.log('Removendo usuário...');
            // ... sua lógica aqui
            break;
        case '4':
            console.log('Saindo...');
            break;
        default:
            console.log('Opção inválida!');
    }

}while(opcao != 4)

//condicionais
// if
// else
// else if
// switch

// if(pessoas[index].nome == "Maria" || pessoas[index].idade==25 )
//         console.log("achou")
// elseif(pessoas[index].nome == "João")
//     console.log('passei')

