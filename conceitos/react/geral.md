Classes e Protótipos
O que é: Como vimos nos nossos primeiros exercícios, uma class é um "molde" para criar objetos, agrupando dados (constructor) e comportamentos (métodos).

Tópico 2: Funções como Cidadãos de Primeira Classe
O que é: Este é o pilar do paradigma funcional. Significa que, em JavaScript, uma função não é especial; ela é tratada como qualquer outro valor (como um número ou uma string). Isso permite:

Atribuir uma função a uma variável (const minhaFuncao = () => ...).

Passar uma função como argumento para outra função.

Retornar uma função de dentro de outra função.

Por que é crucial para o React?

Componentes Modernos: Um componente funcional React é literalmente uma função JavaScript.

Props: Como passamos comportamento de um componente pai para um filho? Passando funções como props. O onClick é o exemplo perfeito:

JavaScript

// Estamos passando a *função* handleClique como um valor para a prop 'onClick'
<button onClick={handleClique}>Clique aqui</button>

Hooks: Muitos hooks, como o useEffect, recebem uma função como seu primeiro argumento.

Tópico 3: Manipulação de Arrays e Objetos (Imutabilidade)

.map(): Cria um novo array transformando cada item.

.filter(): Cria um novo array apenas com os itens que passam em um teste.

.reduce(): Transforma um array em um único valor (ex: somar tudo).

Spread Operator (...): A ferramenta mais importante para criar cópias de objetos e arrays.