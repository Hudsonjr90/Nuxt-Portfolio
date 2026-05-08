<script setup lang="ts">
type Category = 'engineering' | 'dev-notes';

const PAGE_SIZE = 8;
const route = useRoute();
const router = useRouter();

const category = computed<Category | 'all'>(() => {
  const value = route.query.category;
  if (value === 'engineering' || value === 'dev-notes') return value;
  return 'all';
});

const currentPage = computed(() => {
  const p = Number(route.query.page);
  return p > 0 ? p : 1;
});

const { data: articles } = await useAsyncData('articles-list', () =>
  queryCollection('articles')
    .where('draft', '=', 0)
    .order('date', 'DESC')
    .all()
);

const filteredArticles = computed(() => {
  if (!articles.value) return [];
  if (category.value === 'all') return articles.value;
  return articles.value.filter((a) => a.category === category.value);
});

const totalPages = computed(() => Math.max(1, Math.ceil(filteredArticles.value.length / PAGE_SIZE)));

const pagedArticles = computed(() => {
  const start = (currentPage.value - 1) * PAGE_SIZE;
  return filteredArticles.value.slice(start, start + PAGE_SIZE);
});

function pageLink(p: number) {
  const q: Record<string, string> = { page: String(p) };
  if (category.value !== 'all') q.category = category.value;
  return { path: '/articles', query: q };
}

// Reset page when category changes
watch(category, () => {
  if (currentPage.value !== 1) {
    router.replace({ path: '/articles', query: { ...(category.value !== 'all' ? { category: category.value } : {}), page: '1' } });
  }
});

useSeoMeta({
  title: 'Articles | Engineering Blog',
  description: 'Lista de artigos e dev notes sobre engenharia e arquitetura de front-end.'
});
</script>

<template>
  <section>
    <p class="eyebrow">Biblioteca</p>
    <h1>Articles</h1>
    <p class="intro">Filtre por trilha e navegue por conteudo tecnico publicado no blog.</p>

    <div class="filters">
      <NuxtLink to="/articles" class="filter" :class="{ active: category === 'all' }">Todos</NuxtLink>
      <NuxtLink
        to="/articles?category=engineering"
        class="filter"
        :class="{ active: category === 'engineering' }"
      >
        Engineering
      </NuxtLink>
      <NuxtLink
        to="/articles?category=dev-notes"
        class="filter"
        :class="{ active: category === 'dev-notes' }"
      >
        Dev Notes
      </NuxtLink>
    </div>

    <div class="grid" v-if="pagedArticles.length">
      <ArticleCard v-for="article in pagedArticles" :key="article.id" :article="article" />
    </div>

    <p v-else class="empty">Nenhum artigo encontrado para este filtro.</p>

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
  color: var(--accent);
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
}

.filters {
  margin-top: 1rem;
  display: flex;
  gap: 0.55rem;
  flex-wrap: wrap;
}

.filter {
  border: 1px solid var(--line);
  color: var(--muted);
  border-radius: 999px;
  padding: 0.34rem 0.75rem;
  font-weight: 600;
  font-size: 0.86rem;
}

.filter.active {
  border-color: color-mix(in srgb, var(--accent) 65%, var(--line));
  color: var(--text);
}

.grid {
  margin-top: 1rem;
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
  border-color: var(--accent);
  color: var(--accent);
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