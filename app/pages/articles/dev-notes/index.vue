<script setup lang="ts">
const PAGE_SIZE = 8;
const route = useRoute();

const currentPage = computed(() => {
  const p = Number(route.query.page);
  return p > 0 ? p : 1;
});

const { data: articles } = await useAsyncData('dev-notes-list', () =>
  queryCollection('articles')
    .where('draft', '=', 0)
    .where('category', '=', 'dev-notes')
    .order('date', 'DESC')
    .all()
);

const totalPages = computed(() => Math.max(1, Math.ceil((articles.value?.length ?? 0) / PAGE_SIZE)));

const pagedArticles = computed(() => {
  const list = articles.value ?? [];
  const start = (currentPage.value - 1) * PAGE_SIZE;
  return list.slice(start, start + PAGE_SIZE);
});

function pageLink(p: number) {
  return { path: '/articles/dev-notes', query: { page: String(p) } };
}

useSeoMeta({
  title: 'Dev Notes | Notas Práticas de Desenvolvimento',
  description:
    'Notas rápidas, experimentos e descobertas do dia a dia: snippets, debugging, ferramentas e truques de produtividade.',
  ogTitle: 'Dev Notes',
  ogDescription: 'Notas práticas de desenvolvimento: snippets, debugging e ferramentas úteis.'
});
</script>

<template>
  <section>
    <p class="eyebrow">Trilha</p>
    <h1>Dev Notes</h1>
    <p class="intro">
      Notas rápidas, experimentos e descobertas do cotidiano de desenvolvimento: snippets, debugging
      e ferramentas úteis.
    </p>

    <div class="grid" v-if="pagedArticles.length">
      <ArticleCard v-for="article in pagedArticles" :key="article.id" :article="article" />
    </div>

    <p v-else class="empty">Nenhuma nota publicada ainda nesta trilha.</p>

    <nav v-if="totalPages > 1" class="pagination" aria-label="Paginação">
      <NuxtLink
        v-if="currentPage > 1"
        :to="pageLink(currentPage - 1)"
        class="page-btn"
        aria-label="Página anterior"
      >&larr; Anterior</NuxtLink>
      <span class="page-info">{{ currentPage }} / {{ totalPages }}</span>
      <NuxtLink
        v-if="currentPage < totalPages"
        :to="pageLink(currentPage + 1)"
        class="page-btn"
        aria-label="Próxima página"
      >Próxima &rarr;</NuxtLink>
    </nav>
  </section>
</template>

<style scoped>
.eyebrow {
  margin: 0;
  font-size: 0.76rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent-2, #a78bfa);
  font-weight: 700;
}

h1 {
  margin: 0.4rem 0 0;
  font-size: clamp(1.8rem, 4.6vw, 3rem);
  font-family: var(--font-display);
}

.intro {
  margin-top: 0.8rem;
  color: var(--muted);
  max-width: 62ch;
}

.grid {
  margin-top: 1.5rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.empty {
  margin-top: 1rem;
  color: var(--muted);
}

.pagination {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.page-btn {
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.38rem 0.9rem;
  font-weight: 600;
  font-size: 0.86rem;
  color: var(--text);
  transition: border-color 0.15s;
}

.page-btn:hover {
  border-color: var(--accent-2, #a78bfa);
  color: var(--accent-2, #a78bfa);
}

.page-info {
  font-size: 0.86rem;
  color: var(--muted);
  min-width: 4ch;
  text-align: center;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
