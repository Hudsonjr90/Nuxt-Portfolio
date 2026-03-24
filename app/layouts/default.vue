<template>
  <div class="site-shell">
    <slot />
    <footer class="footer">
      <p>
        © {{ year }} Hudson Kennedy. Feito com Nuxt.
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>