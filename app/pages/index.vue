<script setup lang="ts">
const { data: latestArticles } = await useAsyncData('home-latest-articles', () =>
  queryCollection('articles')
    .where('draft', '=', 0)
    .order('date', 'DESC')
    .limit(4)
    .all()
);

useSeoMeta({
  title: 'Engineering Blog | Articles e Dev Notes',
  description:
    'Blog técnico com artigos de arquitetura front-end, engenharia de software e notas práticas de desenvolvimento.',
  ogTitle: 'Engineering Blog',
  ogDescription:
    'Articles e Dev Notes sobre Nuxt, arquitetura e performance para projetos modernos.'
});
</script>

<template>
  <section class="hero">
    <p class="eyebrow">Articles</p>
    <h1>Engineering Blog</h1>
    <p class="hero-copy">
      Conteudo focado em arquitetura de front-end, performance e decisoes tecnicas para produtos reais.
    </p>
    <div class="hero-actions">
      <NuxtLink to="/articles" class="btn btn-primary">Explorar artigos</NuxtLink>
      <NuxtLink to="/articles/dev-notes" class="btn btn-secondary">Ler dev notes</NuxtLink>
    </div>
  </section>

  <section class="latest">
    <div class="section-head">
      <h2>Ultimos posts</h2>
      <NuxtLink to="/articles" class="more">Ver todos</NuxtLink>
    </div>

    <div class="grid" v-if="latestArticles?.length">
      <ArticleCard v-for="article in latestArticles" :key="article.id" :article="article" />
    </div>

    <p v-else class="empty">Nenhum artigo publicado ainda.</p>
  </section>
</template>

<style scoped>
.hero {
  padding-top: 1.1rem;
}

.eyebrow {
  margin: 0;
  font-size: 0.76rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 700;
}

h1 {
  margin: 0.55rem 0 0;
  font-size: clamp(2rem, 6.1vw, 4rem);
  line-height: 1.03;
  font-family: var(--font-display);
}

.hero-copy {
  margin: 1rem 0 0;
  max-width: 63ch;
  color: var(--muted);
  line-height: 1.75;
}

.hero-actions {
  margin-top: 1.3rem;
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  font-weight: 700;
  padding: 0.66rem 0.95rem;
}

.btn-primary {
  background: linear-gradient(120deg, var(--accent), #90e0a0);
  color: #121616;
}

.btn-secondary {
  border: 1px solid var(--line);
  color: var(--text);
}

.latest {
  margin-top: 2.45rem;
}

.section-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
}

h2 {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.3rem, 4vw, 1.8rem);
}

.more {
  color: var(--accent);
  font-weight: 700;
}

.grid {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.empty {
  margin-top: 0.8rem;
  color: var(--muted);
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>