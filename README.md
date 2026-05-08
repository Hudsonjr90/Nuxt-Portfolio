# Engineering Blog with Nuxt 4

Blog moderno com foco em performance, tipagem de conteudo e arquitetura de manutencao simples.

## Stack

- Nuxt 4
- Nuxt Content (colecoes tipadas)
- Tailwind module habilitado
- Giscus para comentarios
- Vercel para deploy e analytics

## Estrutura principal

- Conteudo Markdown: content/articles
- Colecoes e schema: content.config.ts
- Home: app/pages/index.vue
- Lista de artigos: app/pages/articles/index.vue
- Post dinamico: app/pages/articles/[...slug].vue

## Variaveis de ambiente

Defina em .env para habilitar integracoes:

```env
NUXT_PUBLIC_ENABLE_VERCEL_ANALYTICS=true

NUXT_PUBLIC_GISCUS_REPO=owner/repo
NUXT_PUBLIC_GISCUS_REPO_ID=R_xxxxx
NUXT_PUBLIC_GISCUS_CATEGORY=General
NUXT_PUBLIC_GISCUS_CATEGORY_ID=DIC_xxxxx
```

Se as variaveis do Giscus nao forem definidas, a secao de comentarios aparece como instrucoes de configuracao.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build de producao

```bash
npm run build
npm run preview
```
