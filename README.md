# Sobre

Este projeto foi criado por Kaue Sanchez usando [Create React App](https://github.com/facebookincubator/create-react-app) e está sob licença [MIT](https://en.wikipedia.org/wiki/MIT_License).

O objetivo da criação deste projeto foi desenvolver uma aplicação simples de listagem de produtos e carrinho de compras usando react como parte do processo seletivo de uma entrevista de emprego.

## Dependências

Este projeto tem como dependências [Node](https://nodejs.org/en/download/package-manager/) (testado na versão 7.8.0) e [Yarn](https://yarnpkg.com/lang/en/docs/install/) (0.24.5). Clique nos links anteriores para instalá-los caso não os possua em seu sistema operacional.

## Instalação

```
git clone <URL A SER TROCADA>
cd <PASTA COM O NOME DO PROJETO A SER TROCADA>
yarn install
```

## Rodar servidor local

Basta entrar na pasta do projeto e executar `yarn start`

## Rodar os testes

Basta entrar na pasta do projeto e executar `yarn test`

## Tecnologias

as seguintes principais tecnologias principais foram usadas neste projeto:

- [React](https://facebook.github.io/react/): biblioteca desenvolvida pelo Facebook que permite renderização de SPAs complexos com alto desempenho, entre várias outras vantagens
- [react-create-app](https://github.com/facebookincubator/create-react-app): ferramenta usada para simplificar o tempo de criação e desenvolvimento de um app em react
- [Redux](http://redux.js.org/): biblioteca que define fluxo unilateral de dados e auxilia a separar dados da apresentação e maior encapsulmento do comportamento dos componentes

## Estrutura da aplicação

Este aplicativo segue uma estrutura comumente utilizada pela comunidade react fazendo uso do react-create-app e redux. O código da aplicação encontra-se dentro da pasta `src/`. Dentro desta pasta encontram-se as seguintes pastas e seus usos:
- **api**: utilizada para definir módulos e funções que trabalham com transferência de informações através de APIs. No caso deste projeto, a entrada de dados é um único arquivo JSON local tornando esta pasta quase que desnecessária.
- **components**: Componentes de *apresentação* ou *burros*. São arquivos JSX que funcionam como templates.
- **containers**: Componentes de *alta ordem* ou *espertos*. Responsáveis pelo gerenciamento dos dados e comportamentos fornecidos aos componentes de apresentação
- **reducers**: contém arquivos no padrão [Ducks](https://github.com/erikras/ducks-modular-redux) contendo redutores, criadores de ações e constantes utilizadas pelo Redux para gerenciar o estado
- **utils**: pasta que contém funções/módulos compartilhados por vários componentes. Atualmente só contém uma função de formatação de moeda.
- **tests**: pasta contendo os testes unitários. Segue uma estrutura interna semelhante as pastas acima.
