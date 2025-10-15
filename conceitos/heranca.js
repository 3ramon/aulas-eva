// Herança: É uma relação "é um tipo de". Uma classe filha herda propriedades e métodos da classe pai.
// Exemplo: ProdutoDigital é um tipo de Produto.

// Composição: É uma relação "tem um" ou "é feito de". Um objeto complexo é construído a partir de objetos menores e independentes.
// Exemplo: Um CarrinhoDeCompras tem uma lista de Produtos.

// A Grande Pergunta: Por que o React Prefere Composição?
// A equipe do React percebeu que construir interfaces de usuário (UI) se parece muito mais com montar blocos de LEGO (Composição) do que com criar uma árvore genealógica de espécies (Herança).

// Os problemas da Herança para construir UIs:

// Rigidez: Imagine que você tem um componente ComponenteComMenuLateral. Se você herda dele, seu novo componente sempre terá aquele menu lateral. E se você precisar de um componente que tenha as funcionalidades de ComponenteComMenuLateral E de ComponenteComCabecalhoFixo? JavaScript não permite herança múltipla, então você fica preso em uma hierarquia inflexível.

// Acoplamento Forte: Um componente filho fica fortemente "amarrado" à implementação do seu componente pai. Qualquer mudança no pai pode quebrar o filho de maneiras inesperadas.

// Complexidade Desnecessária: Conforme a aplicação cresce, as cadeias de herança podem se tornar um labirinto, tornando difícil entender de onde uma determinada propriedade ou método está vindo (é deste pai? do avô? do bisavô?).

// A Vantagem da Composição para construir UIs:

// Flexibilidade Total (O Jeito LEGO): Você pode criar pequenos componentes que fazem uma única coisa bem feita (Avatar, Botao, CampoDeBusca) e depois "compor" eles de diferentes maneiras para criar componentes mais complexos (PerfilDeUsuario, BarraDeNavegacao). Quer trocar o Avatar por um Icone? É só trocar a peça.

// Reutilização Máxima: Um Botao bem feito pode ser usado em um formulário de login, em um modal de confirmação, em um card de produto... em qualquer lugar. Sua reutilização não depende de nenhuma hierarquia.

// Fluxo de Dados Explícito: Em React, a composição é feita através de props. Fica muito claro quais informações um componente está passando para o outro. Não há "mágica" acontecendo nos bastidores.

// NÃO FAÇA ISSO EM REACT
class CardBase extends React.Component { /* ... lógica base ... */ }
class CardDeVideo extends CardBase { /* ... adiciona um player de video ... */ }
class CardDeNoticia extends CardBase { /* ... adiciona um título e texto ... */ }

// Card.js - Um componente "burro" e genérico
function Card(props) {
  // A classe 'card' viria de um CSS para dar o estilo da moldura
  //children - >tudo o que você coloca entre as tags de abertura e fechamento do seu componente.
  return (
    <div className="card">
      {props.children}  {/* <-- A MÁGICA ACONTECE AQUI */}
    </div>
  );
}

// App.js

import Card from './Card';
import Avatar from './Avatar';
import VideoPlayer from './VideoPlayer';

function App() {
  return (
    <div>
      {/* 1. Um card de perfil de usuário */}
      <Card>
        <Avatar user={someUser} />
        <h2>{someUser.name}</h2>
        <p>Clique para ver o perfil.</p>
      </Card>

      {/* 2. Um card de vídeo */}
      <Card>
        <h3>Aula 05: Composição</h3>
        <VideoPlayer videoId="12345" />
      </Card>

      {/* 3. Um card simples com texto */}
      <Card>
        <p>Este é um aviso importante do sistema.</p>
      </Card>
    </div>
  );
}