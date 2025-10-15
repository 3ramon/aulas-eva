class Produto {
    
    constructor(nome, preco, quantidadeEmEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
        //porque usamos o this?

        // O this é a palavra que dentro da planta (a class) se refere a casa específica que está sendo construida
        // É a referencia do objeto atual, à instância específica da classe.
    }

    getValorTotalEmEstoque() {
        return this.preco * this.quantidadeEmEstoque;
    }

    adicionarEstoque(quantidade) {
        this.quantidadeEmEstoque += quantidade;
    }

    removerEstoque(quantidade) {
        if (quantidade > this.quantidadeEmEstoque) {
            this.quantidadeEmEstoque = 0;
            console.log(
                "Estoque zerado. Não é possível remover mais do que o disponível."
            );
        } else {
            this.quantidadeEmEstoque -= quantidade;
        }
    }

    exibirInfo() {
        return `${this.nome} - R$ ${this.preco}`;
    }
}

console.log("EXERCICIO 1 - ENCAPSULAMENTO");
console.log("");
//utilizando todos os metodos do ex 1
fone = new Produto("Fone", 300, 5);
console.log("Esse é o produto 1:", fone);
fone.exibirInfo();
console.log("Em estoque temos o valor de: ", fone.getValorTotalEmEstoque());
fone.adicionarEstoque(3);
console.log("Quantidade de estoque atualizado para:", fone.quantidadeEmEstoque);
fone.removerEstoque(10);

class ProdutoDigital extends Produto {
    constructor(nome, preco, linkDownload) {
        super(nome, preco, 1);
        this.linkDownload = linkDownload;
    }

    baixar() {
        console.log(`Baixando ${this.nome} do link: ${this.linkDownload}`);
    }

    exibirInfo() {
        const infoPai = super.exibirInfo();
        return `${infoPai} - Link: ${this.linkDownload}`;
    }
}

class ProdutoFisico extends Produto {
    constructor(nome, preco, quantidadeEmEstoque, pesoEmGramas) {
        super(nome, preco, quantidadeEmEstoque);
        this.pesoEmGramas = pesoEmGramas;
    }

    getPesoEmKg() {
        return this.pesoEmGramas / 1000;
    }

    exibirInfo() {
        const infoPai = super.exibirInfo();
        return `${infoPai} - Peso: ${this.pesoEmGramas}`;
    }
}

console.log("");
console.log("");

console.log("EXERCICIO 2 - HERANÇA");
console.log("");
livro = new ProdutoDigital("Ebook", 1000, "www.ebook.com");
console.log(livro);
livro.baixar();

console.log("------");

carro = new ProdutoFisico("Carro", 34000, 3, 12000);
console.log(carro);

console.log(`Este produto tem: ${carro.getPesoEmKg()}Kg`);
console.log("");
console.log("");

console.log("EXERCICIO 3 - POLIMORFISMO");
console.log("");

console.log("Testando o método exibir info: ");
fone.exibirInfo();
console.log("");

console.log("Sobrescrevendo o método em produto digital: ");
livro.exibirInfo();
console.log("");

console.log("Sobrescrevendo o método em produto fisico: ");
carro.exibirInfo();
console.log("");

let carrinho = [];

carrinho.push(fone);
carrinho.push(livro);
carrinho.push(carro);

console.log("PERCORRENDO O CARRINHO COM FOREACH")
carrinho.forEach((item) => {
    if(item instanceof ProdutoDigital)
        console.log(item.exibirInfo())
});

// Resumo sugestões de melhoria
// Reusabilidade - exibir info se torna mais util considerando que ele somente vai retornar dados
// Separação de resposabilidades A classe sendo responsavel por gerenciar seus dados e logica de negocio.
// O código que usa a classe é responsável pela apresentação (console.log).