Props: Como um componente recebe dados.

State: Como um componente se lembra de dados e reage a mudanças.

1. Props (Comunicação de Pai para Filho)
Pense nos seus componentes React como funções JavaScript.

Uma função normal recebe argumentos:

function saudacao(nome) {
  return `Olá, ${nome}!`;
}
saudacao('Maria'); // 'Maria' é o argumento

Um componente React recebe props (abreviação de properties):

<ProfileCard name="Maria" /> // 'name' é a prop

Props são a forma de um componente "pai" (como o App.js) passar informações para um componente "filho" (como o ProfileCard).

Importante: Um componente nunca pode modificar as props que recebe. Elas são somente leitura (imutáveis).