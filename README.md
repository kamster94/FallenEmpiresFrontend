<p align="center">
  <img src="public/favicon.ico" />
</p>

<h1 align="center">
Age of Fallen Empires
</h1>

[![CodeQL](https://github.com/kamster94/FallenEmpiresFrontend/actions/workflows/codeql-analysis.yml/badge.svg?branch=main)](https://github.com/kamster94/FallenEmpiresFrontend/actions/workflows/codeql-analysis.yml)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/kamster94/FallenEmpiresFrontend/Node.js%20CI)
![GitHub package.json version](https://img.shields.io/github/package-json/v/kamster94/FallenEmpiresFrontend)
![GitHub](https://img.shields.io/github/license/kamster94/FallenEmpiresFrontend)

This app is frontend for Age of Fallen Empires project.

- Primary language: [Typescript](https://www.typescriptlang.org/)
- Framework: [Vue.js 3 installed using Vue CLI](https://v3.vuejs.org/)
- CSS preprocessor: [Dart-Sass](https://sass-lang.com/dart-sass)
- Package manager: [npm](https://www.npmjs.com/)
- Linting: [ESlint](https://eslint.org/)
- Style framework: [Tailwind CSS](https://tailwindcss.com/)

<hr />

## Running app locally

- To run the app you need to connect to Web API for data.
- You can use local json-server fake Rest API for testing.
- To install json-server, use command

```
npm install -g json-server
```

## Useful npm commands

- Install all dependencies form `package.json`

```
npm install
```

- Compiles and hot-reloads for development

```
npm run serve
```

- Compiles and minifies for production

```
npm run build
```

- Lints and fixes files

```
npm run lint
```

- Run json-server

```
json-server --watch db.json
```
