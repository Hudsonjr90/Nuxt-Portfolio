---
title: Dev Notes: Checklist de Core Web Vitals em Projetos Reais
description: Uma rotina prática para melhorar LCP, INP e CLS sem chute e sem retrabalho.
date: 2026-05-06
category: dev-notes
tags:
  - web-vitals
  - frontend
  - observability
  - nuxt
draft: false
---

Quando a aplicação cresce, performance costuma piorar aos poucos.

Este checklist ajuda a manter o projeto saudável:

## 1) LCP

- Priorizar assets críticos
- Usar imagens com dimensões definidas
- Evitar bloqueio de render por scripts de terceiros

## 2) INP

- Debounce em filtros e buscas
- Split de componentes pesados
- Evitar reatividade excessiva em árvores grandes

## 3) CLS

- Reservar espaço para mídia e embeds
- Evitar troca de fonte sem fallback consistente
- Cuidar de banners e blocos condicionais no topo

## Ferramentas

- Lighthouse no CI
- Vercel Analytics para visão de tráfego e páginas
- Logs de runtime para regressões em produção

Pequenas melhorias contínuas tendem a ter impacto maior que refactors massivos tardios.
