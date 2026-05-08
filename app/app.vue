<script setup lang="ts">
const config = useRuntimeConfig();
const analyticsEnabled = String(config.public.enableVercelAnalytics) === 'true';

if (import.meta.client && analyticsEnabled) {
  useHead({
    script: [{ src: '/_vercel/insights/script.js', defer: true }]
  });
}
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
