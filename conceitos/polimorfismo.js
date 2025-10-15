// Conceito-chave: Polimorfismo

// O que é? A capacidade de objetos de classes diferentes responderem à mesma
// mensagem (chamada de método) de maneiras específicas. Ex: um método desenhar()
// funciona de um jeito para um Círculo e de outro para um Quadrado.
// Conexão com React: O conceito se traduz de forma mais abstrata, mas é muito
// presente no "renderização condicional" e na criação de componentes genéricos.

// Um componente <Icone /> pode renderizar um ícone de "usuário" ou de "carrinho"
// dependendo da prop que recebe. A "mensagem" é a mesma (<Icone />), mas o
// resultado (o SVG renderizado) é diferente.

// Um componente <Botao /> pode ter aparências totalmente diferentes (primário,
// secundário, de perigo) com base em uma prop variant. A forma de usá-lo é a mesma,
// mas seu comportamento visual e até funcional pode mudar.