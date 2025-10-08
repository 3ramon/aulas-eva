// Exercícios da Aula 1: Fundamentos do Design de Software com JavaScript

// Objetivo: Praticar os pilares da Orientação a Objetos em JavaScript para entender como criar código estruturado, reutilizável e flexível – habilidades essenciais para dominar o React.

// Exercício 1: Encapsulamento - Criando nosso primeiro "Componente" Lógico

// Vamos criar uma classe para representar um `Produto` em uma loja virtual. A ideia é que a classe seja responsável por todos os seus próprios dados e comportamentos.

// Instruções:

// 1.  Crie uma classe chamada `Produto`.
// 2.  O `constructor` da classe deve receber `nome`, `preco` e `quantidadeEmEstoque` como parâmetros.
// 3.  A classe deve ter os seguintes métodos (comportamentos):
//       * `getValorTotalEmEstoque()`: Retorna o valor total de itens daquele produto (preço \* quantidade).
//       * `adicionarEstoque(quantidade)`: Adiciona uma quantidade ao estoque do produto.
//       * `removerEstoque(quantidade)`: Remove uma quantidade do estoque. Importante: Adicione uma lógica para não permitir que o estoque fique negativo. Se tentarem remover mais do que existe, apenas zere o estoque e exiba uma mensagem no console.


// Exercício 2: Herança - Especializando nossos Produtos

// Nem todo produto é igual. Um livro é diferente de um curso online. Vamos usar herança para criar tipos de produtos especializados.

// Instruções:

// 1.  Crie uma classe `ProdutoDigital` que herda de `Produto`.
// 2.  O `constructor` de `ProdutoDigital` deve receber `nome`, `preco` e `linkDownload`. Ele não precisa de `quantidadeEmEstoque`. Lembre-se de usar o `super()` para chamar o construtor da classe pai. Você pode passar um valor fixo (ex: 1) para a quantidade em estoque da classe pai.
// 3.  Adicione um método exclusivo para `ProdutoDigital` chamado `baixar()`, que apenas exibe no console: "Baixando ${this.nome} do link ${this.linkDownload}...".
// 4.  Crie uma classe `ProdutoFisico` que também herda de `Produto`.
// 5.  O `constructor` de `ProdutoFisico` deve receber `nome`, `preco`, `quantidadeEmEstoque` e `pesoEmGramas`. Use o `super()` para reaproveitar o construtor da classe pai.
// 6.  Adicione um método exclusivo para `ProdutoFisico` chamado `getPesoEmKg()`, que retorna o peso do produto em quilogramas.


//  Exercício 3: Polimorfismo - Tratando todos os Produtos da mesma forma

// Polimorfismo é a capacidade de objetos de diferentes classes responderem à mesma "mensagem" (chamada de método) de maneiras diferentes.

// Instruções:

// 1.  Adicione um método chamado `exibirInfo()` na classe base `Produto`. Ele deve exibir uma string genérica como: `${this.nome} - R$ ${this.preco}`.
// 2.  Sobrescreva o método `exibirInfo()` na classe `ProdutoDigital`. Ele deve exibir as informações do produto e também o link para download.
// 3.  Sobrescreva o método `exibirInfo()` na classe `ProdutoFisico`. Ele deve exibir as informações do produto e também o seu peso.
// 4.  Crie um array chamado `carrinho` e adicione instâncias de `Produto`, `ProdutoDigital` e `ProdutoFisico` a ele.
// 5.  Faça um loop (`for...of` ou `forEach`) nesse array e chame o método `exibirInfo()` para cada item. Observe como cada objeto responde de forma diferente à mesma chamada de método.
