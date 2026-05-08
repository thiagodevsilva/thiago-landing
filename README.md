# Thiago Landing

Landing page desenvolvida com Vue 3 e Vite.

## Tecnologias

- Vue 3
- Vite
- Vue Router
- Tailwind CSS
- DaisyUI

## Pre-requisitos

- Node.js 18+ (recomendado Node.js 20+)
- npm 9+

## Instalação

```bash
npm install
```

## Rodando o projeto em desenvolvimento

```bash
npm run dev
```

Por padrao, o Vite sobe em `http://localhost:5173`.

## Build para producao

```bash
npm run build
```

O resultado do build sera gerado na pasta `dist/`.

## Preview do build

```bash
npm run preview
```

Esse comando serve para validar localmente o build de producao.

## Rodando com Docker

O projeto possui `Dockerfile` multi-stage (build com Node e runtime com Nginx) e `docker-compose.yml`.

### Com Docker Compose

```bash
docker compose up --build
```

A aplicacao ficara disponivel em `http://localhost:8088`.

Para parar os containers:

```bash
docker compose down
```

### Com Docker (sem Compose)

```bash
docker build -t thiago-landing .
docker run --rm -p 8088:80 thiago-landing
```

## Scripts disponiveis

- `npm run dev`: inicia servidor de desenvolvimento
- `npm run build`: gera build de producao
- `npm run preview`: executa preview do build gerado
