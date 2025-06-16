## Getting Started

[ONLIVE VERSION ON VERCEL](https://islandhub-challenge.vercel.app/)

---

Gif de apresentação resumida:
![DEMO](./docs/data/demo-gif.gif)

## Instruções para execução local

```bash
npm i
# depois
npm run dev

```

## Estrutura de pastas

```plaintext
|/data - .json contendo dados consumidos pela aplicação
|/messages - para os dicionarios configurados para internacionalização;
|/src:
|----/app;
|------/[locales] - rotas internationalizadas (home, products, cart);
|------/api - endpoint para consumo dos dados do arquivo data.json;
|------/context - context API para compartilhamento de dados;
|------/features - manter organizados arquivos de um mesmo contexto como componentes que pertencem somente a um fluxo especifico da aplicação. Ex: products_card, products_item, etc... que pertencem a feature 'products';

```

## Libs

- next-intl - para internacionalização
- react-toastify - taost de cores e notificação
- pure-react-carousel - carousel de produtos da pagina inicial
- axios - consumo de api
- commitlint - padronização de commit
- commitizen - prompt para commit customizados

## Commit changes

```bash
npm run commit
# or for commit the code with console in it
npm run commit:allow-console

```
