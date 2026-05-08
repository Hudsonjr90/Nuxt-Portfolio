<template>
  <header class="site-header">
    <div class="container shell">
      <NuxtLink to="/" class="brand">Engineering Blog</NuxtLink>
      <nav class="nav-links">
        <NuxtLink to="/articles" class="nav-item">Articles</NuxtLink>
        <NuxtLink to="/articles/engineering" class="nav-item">Engineering</NuxtLink>
        <NuxtLink to="/articles/dev-notes" class="nav-item">Dev Notes</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 40;
  backdrop-filter: blur(14px);
  background: color-mix(in srgb, var(--bg) 88%, transparent);
  border-bottom: 1px solid var(--line);
}

.shell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 4.25rem;
}

.brand {
  font-family: var(--font-display);
  letter-spacing: 0.02em;
  font-size: 1.05rem;
  color: var(--text);
}

.nav-links {
  display: flex;
  gap: 0.95rem;
  align-items: center;
}

.nav-item {
  color: var(--muted);
  font-weight: 600;
  font-size: 0.94rem;
  transition: color 180ms ease;
}

.nav-item:hover,
.nav-item.router-link-active {
  color: var(--text);
}

@media (max-width: 700px) {
  .shell {
    min-height: 3.7rem;
  }

  .brand {
    font-size: 0.94rem;
  }

  .nav-links {
    gap: 0.55rem;
  }

  .nav-item {
    font-size: 0.8rem;
  }
}
</style>