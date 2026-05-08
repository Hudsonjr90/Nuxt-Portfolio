---
title: Arquitetura de Blog em Nuxt 4 para Escalar Sem Dor
description: Como organizar conteúdo, renderização, comentários e observabilidade em um blog moderno orientado a performance.
date: 2026-05-07
category: engineering
tags:
  - nuxt
  - arquitetura
  - performance
  - content
cover: /imgs/imgProjects/pokedex.webp
draft: false
---

Construir blog hoje vai além de renderizar Markdown.

Você precisa garantir:

- ótimo LCP e navegação rápida
- conteúdo versionado junto ao código
- tipos seguros para metadados
- comentários sem infraestrutura própria

## Stack recomendada

Para este projeto a stack é:

- Nuxt 4 com renderização híbrida
- Nuxt Content para conteúdo em Markdown e tipagem de frontmatter
- Vercel para deploy com cache global
- Giscus para comentários via GitHub Discussions

## Princípios de arquitetura

1. Conteúdo como source of truth

Toda decisão de UI parte da coleção `articles`.
Isso evita duplicidade de dados entre página e CMS externo.

2. Consultas previsíveis

Usar filtros por `draft`, ordenação por `date` e índices nesses campos mantém latência estável.

3. Responsabilidade por camada

- Conteúdo: `content/`
- Renderização: páginas em `app/pages`
- Comportamento compartilhado: componentes

4. Integrações desacopladas

Comentários e analytics só são ativados por configuração, sem quebrar ambiente local.

## Resultado esperado

Com essa base, adicionar um novo artigo é só criar um novo arquivo Markdown com frontmatter válido.
