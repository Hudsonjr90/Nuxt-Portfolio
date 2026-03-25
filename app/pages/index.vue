<template>
  <q-page class="page">
    <header class="topbar">
      <a href="#home" class="brand">HK</a>
      <nav>
        <a href="#about">Sobre</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>

    <main>
      <section id="home" class="hero section">
        <div class="hero-copy">
          <p class="eyebrow">Disponível para novos projetos</p>
          <h1>{{ profile.name }}</h1>
          <p class="hero-role">{{ profile.role }}</p>
          <p class="hero-summary">{{ profile.summary }}</p>
          <div class="hero-cta">
            <q-btn
              color="primary"
              unelevated
              rounded
              label="Ver projetos"
              class="btn btn-primary"
              href="#projects"
            />
            <q-btn
              flat
              rounded
              label="Falar comigo"
              class="btn btn-ghost"
              href="#contact"
            />
          </div>
        </div>
        <div class="hero-photo-wrap">
          <q-img
            src="/imgs/my.webp"
            alt="Foto de Hudson Kennedy"
            class="hero-photo"
            fit="cover"
            loading="eager"
            no-spinner
          />
        </div>
      </section>

      <section id="about" class="section">
        <div class="section-heading">
          <p class="eyebrow">Sobre</p>
          <h2>Perfil profissional</h2>
        </div>
        <div class="about-grid">
          <q-img
            src="/imgs/about.webp"
            alt="Hudson Kennedy programando"
            class="about-image"
            fit="cover"
            loading="lazy"
            no-spinner
          />
          <div>
            <p class="about-location">Base: {{ profile.location }}</p>
            <ul class="highlight-list">
              <li v-for="item in highlights" :key="item">{{ item }}</li>
            </ul>
            <div class="xp-grid">
              <q-card v-for="xp in experiences" :key="xp.company" flat bordered class="xp-card">
                <q-card-section>
                  <h3>{{ xp.company }}</h3>
                  <p>{{ xp.role }}</p>
                  <span>{{ xp.period }}</span>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" class="section">
        <div class="section-heading">
          <p class="eyebrow">Skills</p>
          <h2>Tecnologias principais</h2>
        </div>
        <div class="skill-cloud">
          <q-chip
            v-for="skill in skills"
            :key="skill"
            outline
            color="primary"
            text-color="white"
            class="skill-pill"
          >
            {{ skill }}
          </q-chip>
        </div>
      </section>

      <section id="projects" class="section">
        <div class="section-heading">
          <p class="eyebrow">Projetos</p>
          <h2>Trabalhos em destaque</h2>
        </div>
        <div class="projects-grid">
          <q-card v-for="project in projects" :key="project.name" flat bordered class="project-card">
            <q-img :src="project.image" :alt="`Projeto ${project.name}`" fit="cover" loading="lazy" no-spinner />
            <q-card-section class="project-content">
              <h3>{{ project.name }}</h3>
              <p>{{ project.description }}</p>
              <ul class="tech-list">
                <li v-for="tech in project.technologies" :key="tech">{{ tech }}</li>
              </ul>
              <div class="project-links">
                <a :href="project.deployUrl" target="_blank" rel="noopener noreferrer">Deploy</a>
                <a :href="project.repoUrl" target="_blank" rel="noopener noreferrer">Repositório</a>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </section>

      <section id="contact" class="section contact">
        <div class="section-heading">
          <p class="eyebrow">Contato</p>
          <h2>Vamos construir algo forte juntos</h2>
        </div>
        <p>
          Se você busca um front-end moderno, performático e orientado a negócio,
          vamos conversar.
        </p>
        <div class="contact-links">
          <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
          <a :href="profile.github" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a :href="profile.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </section>
    </main>
  </q-page>
</template>

<script setup lang="ts">
import { useSeoMeta } from 'nuxt/app';
import { experiences, highlights, profile, projects, skills } from '../data/portfolio';

useSeoMeta({
  title: `${profile.name} | ${profile.role}`,
  description:
    'Portfólio profissional com projetos front-end, experiências e contato.',
  ogTitle: `${profile.name} | Portfólio`,
  ogDescription:
    'Projetos em Nuxt, React e TypeScript com foco em produto, UX e performance.'
});
</script>