<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

const config = useRuntimeConfig();
const container = ref<HTMLElement | null>(null);

const isEnabled = computed(() => Boolean(config.public.giscusRepo && config.public.giscusRepoId));

onMounted(() => {
  if (!isEnabled.value || !container.value) {
    return;
  }

  const script = document.createElement('script');
  script.src = 'https://giscus.app/client.js';
  script.async = true;
  script.crossOrigin = 'anonymous';

  script.setAttribute('data-repo', config.public.giscusRepo);
  script.setAttribute('data-repo-id', config.public.giscusRepoId);
  script.setAttribute('data-category', config.public.giscusCategory);
  script.setAttribute('data-category-id', config.public.giscusCategoryId);
  script.setAttribute('data-mapping', 'pathname');
  script.setAttribute('data-strict', '1');
  script.setAttribute('data-reactions-enabled', '1');
  script.setAttribute('data-emit-metadata', '0');
  script.setAttribute('data-input-position', 'top');
  script.setAttribute('data-theme', 'preferred_color_scheme');
  script.setAttribute('data-lang', 'pt');
  script.setAttribute('data-loading', 'lazy');

  container.value.appendChild(script);
});
</script>

<template>
  <section class="comments-wrap">
    <h2>Discussao</h2>
    <p v-if="!isEnabled" class="muted">
      Configure as variaveis publicas de Giscus para habilitar comentarios.
    </p>
    <div v-else ref="container" />
  </section>
</template>

<style scoped>
.comments-wrap {
  margin-top: 2.8rem;
  padding-top: 1.1rem;
  border-top: 1px solid var(--line);
}

h2 {
  font-family: var(--font-display);
  font-size: 1.25rem;
  margin: 0 0 0.5rem;
}

.muted {
  color: var(--muted);
}
</style>