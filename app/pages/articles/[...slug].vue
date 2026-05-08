<script setup lang="ts">
const route = useRoute();

const slug = computed(() => {
  const value = route.params.slug;
  if (Array.isArray(value)) {
    return value.join('/');
  }

  return typeof value === 'string' ? value : '';
});

const articlePath = computed(() => `/articles/${slug.value}`);

const { data: article } = await useAsyncData(
  () => `article:${articlePath.value}`,
  () => queryCollection('articles').path(articlePath.value).first(),
  { watch: [articlePath] }
);

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Artigo nao encontrado' });
}

const { data: relatedArticles } = await useAsyncData(
  () => `related:${articlePath.value}`,
  () =>
    queryCollection('articles')
      .where('draft', '=', 0)
      .where('category', '=', article.value?.category || '')
      .order('date', 'DESC')
      .all(),
  { watch: [articlePath] }
);

const related = computed(() =>
  (relatedArticles.value || []).filter((item) => item.path !== article.value?.path).slice(0, 3)
);

useSeoMeta({
  title: article.value.title,
  description: article.value.description,
  ogTitle: article.value.title,
  ogDescription: article.value.description
});
</script>

<template>
  <article class="article" v-if="article">
    <p class="eyebrow">{{ article.category === 'engineering' ? 'Engineering' : 'Dev Notes' }}</p>
    <h1>{{ article.title }}</h1>
    <p class="description">{{ article.description }}</p>

    <div class="meta-line">
      <time>{{ new Date(article.date).toLocaleDateString('pt-BR') }}</time>
      <span v-if="article.tags?.length">{{ article.tags.join(' • ') }}</span>
    </div>

    <div class="article-body">
      <ContentRenderer :value="article" />
    </div>

    <GiscusComments />
  </article>

  <section class="related" v-if="related.length">
    <h2>Relacionados</h2>
    <div class="grid">
      <ArticleCard v-for="item in related" :key="item.id" :article="item" />
    </div>
  </section>
</template>

<style scoped>
.article {
  max-width: 850px;
}

.eyebrow {
  margin: 0;
  font-size: 0.74rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent-2);
  font-weight: 700;
}

h1 {
  margin: 0.5rem 0 0;
  font-family: var(--font-display);
  font-size: clamp(1.85rem, 5vw, 3.2rem);
  line-height: 1.08;
}

.description {
  margin: 0.9rem 0 0;
  color: var(--muted);
  line-height: 1.72;
}

.meta-line {
  margin-top: 0.9rem;
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
  color: var(--muted);
  font-size: 0.86rem;
}

.article-body {
  margin-top: 1.4rem;
}

.related {
  margin-top: 2.6rem;
}

h2 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.45rem;
}

.grid {
  margin-top: 1rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

@media (max-width: 1100px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>