// Classe
// O que é? Uma "planta" ou um "molde" para criar objetos. 

// Define um conjunto de propriedades (atributos) 

// Comportamentos (métodos) que os objetos criados a partir 

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome}.`);
  }
}

pessoa = new Pessoa(
    "Ramon",
    25
)

pessoa.apresentar()