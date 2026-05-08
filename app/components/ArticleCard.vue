<script setup lang="ts">
type Article = {
  path: string;
  title: string;
  description: string;
  date: string;
  category: 'engineering' | 'dev-notes';
  tags?: string[];
};

defineProps<{
  article: Article;
}>();

const categoryLabel: Record<Article['category'], string> = {
  engineering: 'Engineering',
  'dev-notes': 'Dev Notes'
};
</script>

<template>
  <article class="card">
    <div class="meta-row">
      <span class="chip">{{ categoryLabel[article.category] }}</span>
      <time class="date">{{ new Date(article.date).toLocaleDateString('pt-BR') }}</time>
    </div>

    <h2 class="title">
      <NuxtLink :to="article.path">{{ article.title }}</NuxtLink>
    </h2>

    <p class="description">{{ article.description }}</p>

    <div class="tags" v-if="article.tags?.length">
      <span v-for="tag in article.tags" :key="tag" class="tag">#{{ tag }}</span>
    </div>
  </article>
</template>

<style scoped>
.card {
  border: 1px solid var(--line);
  border-radius: 1rem;
  background: var(--surface);
  padding: 1.1rem;
  transition: border-color 180ms ease, transform 180ms ease;
}

.card:hover {
  border-color: color-mix(in srgb, var(--accent) 70%, var(--line));
  transform: translateY(-2px);
}

.meta-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chip {
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent-2);
  font-weight: 700;
}

.date {
  color: var(--muted);
  font-size: 0.82rem;
}

.title {
  margin: 0.65rem 0 0;
  font-size: 1.3rem;
  line-height: 1.2;
  font-family: var(--font-display);
}

.title a {
  color: var(--text);
}

.description {
  color: var(--muted);
  line-height: 1.6;
  margin: 0.75rem 0;
}

.tags {
  display: flex;
  gap: 0.45rem;
  flex-wrap: wrap;
}

.tag {
  color: var(--text);
  font-size: 0.78rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.22rem 0.6rem;
}
</style>