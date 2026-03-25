# Nuxt Portfolio (Hibrido com Quasar)

Portifolio pessoal em Nuxt 4 com abordagem hibrida:
- Quasar para componentes base de UI (botoes, cards, chips, imagem)
- CSS autoral para identidade visual moderna e profissional

## Stack

- Nuxt 4
- Vue 3
- Quasar 2
- Sass Embedded

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Estrutura Principal

```text
app/
  assets/css/main.css        # Tema visual autoral
  data/portfolio.ts          # Dados de perfil, skills e projetos
  layouts/default.vue        # Shell principal
  pages/index.vue            # Landing page do portfolio
  plugins/quasar.ts          # Registro global do Quasar
```

## Observacoes

- O projeto usa assets reaproveitados do portfolio antigo em React em public/imgs.
- O build pode exibir warnings de deprecacao Sass do Quasar, mas compila com sucesso.
