2. State (A Memória do Componente)

Props vêm de fora (do pai). State é a memória interna do próprio componente.

A Regra Mais Importante do React:

Quando o state de um componente muda, o React automaticamente re-renderiza (redesenha) esse componente na tela para refletir a mudança.

3. O Primeiro Hook: useState

Sintaxe: Primeiro, precisamos importá-lo do React: import { useState } from 'react';

const [valor, setValor] = useState(valorInicial);

Vamos quebrar essa sintaxe (é chamada de "array destructuring"):

valorInicial: O valor que o state terá na primeira vez que o componente for exibido (ex: 0, "" (string vazia), false).

valor: É a variável que guarda o valor atual do state. Você só pode ler este valor, nunca modificá-lo diretamente.

setValor: É a única função que você deve usar para atualizar o valor. Quando você chama setValor(novoValor), você está dizendo ao React: "Ei, o estado mudou. Por favor, re-renderize este componente."

valor = valor + 1;

setValor(valor + 1);