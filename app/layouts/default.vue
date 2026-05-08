<template>
  <div class="site-shell">
    <AppHeader />
    <main class="container page-shell">
      <slot />
    </main>
    <footer class="footer">
      <div class="container footer-content">
        <p>© {{ year }} Engineering Blog</p>
        <p>Nuxt Content + Vercel + Giscus</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<style scoped>
.page-shell {
  padding-top: 2.2rem;
  padding-bottom: 3rem;
}

.footer {
  border-top: 1px solid var(--line);
  margin-top: 2rem;
}

.footer-content {
  padding-top: 1.4rem;
  padding-bottom: 1.9rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem 1rem;
  justify-content: space-between;
}

.footer-content p {
  margin: 0;
  color: var(--muted);
  font-size: 0.88rem;
}
</style>