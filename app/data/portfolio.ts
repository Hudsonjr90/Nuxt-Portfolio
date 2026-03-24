export type Project = {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  deployUrl: string;
  repoUrl: string;
};

export const profile = {
  name: 'Hudson Kennedy',
  role: 'Desenvolvedor Front-end',
  location: 'Rio de Janeiro, Brasil',
  summary:
    'Construo produtos digitais com foco em performance, experiência do usuário e código sustentável. Atuo com React, Vue/Nuxt e TypeScript, conectando design e engenharia para gerar impacto real.',
  email: 'hudsonkennedy@example.com',
  linkedin: 'https://www.linkedin.com',
  github: 'https://github.com/Hudsonjr90'
};

export const skills = [
  'TypeScript',
  'Nuxt',
  'Vue',
  'React',
  'Next.js',
  'Pinia',
  'Tailwind',
  'Sass',
  'Node.js',
  'Prisma',
  'Docker',
  'PostgreSQL'
];

export const highlights = [
  'Experiência com projetos multi-stack em produção',
  'Arquitetura orientada a performance e SEO',
  'Forte colaboração entre times de produto e design'
];

export const experiences = [
  {
    company: 'VILT Brasil Sistemas de Informação',
    role: 'Front-end Developer',
    period: '2023 - Atual'
  },
  {
    company: 'Cast Group Informática S.A.',
    role: 'Desenvolvedor Front-end',
    period: '2022 - 2023'
  },
  {
    company: 'Cubo Connect',
    role: 'Desenvolvedor Front-end',
    period: '2021 - 2022'
  }
];

export const projects: Project[] = [
  {
    name: 'Nuxt Vue Pokedex',
    description: 'Pokedex com busca e listagem dinâmica consumindo API REST.',
    technologies: ['Nuxt', 'Tailwind', 'TypeScript'],
    image: '/imgs/imgProjects/pokedex.webp',
    deployUrl: 'https://nuxt-pokedex-bay.vercel.app',
    repoUrl: 'https://github.com/Hudsonjr90/NuxtPokedex'
  },
  {
    name: 'Poll App',
    description: 'Sistema de enquetes realtime com atualização em tempo real.',
    technologies: ['React', 'TypeScript', 'NestJS', 'WebSocket'],
    image: '/imgs/imgProjects/poll.webp',
    deployUrl: 'https://poll-app-frontend-peach.vercel.app/',
    repoUrl: 'https://github.com/Hudsonjr90/PollApp-Frontend'
  },
  {
    name: 'Finance App',
    description: 'Aplicativo de finanças pessoais para controle de receitas e despesas.',
    technologies: ['Nuxt', 'Pinia', 'TypeScript', 'Chart.js'],
    image: '/imgs/imgProjects/finance.webp',
    deployUrl: 'https://controle-financeiro-dev.vercel.app',
    repoUrl: 'https://github.com/Hudsonjr90/controle-financeiro'
  },
  {
    name: 'React Website',
    description: 'Landing page responsiva para consolidar fundamentos de React.',
    technologies: ['React', 'TypeScript', 'Styled Components'],
    image: '/imgs/imgProjects/web.webp',
    deployUrl: 'https://reactwebsite-puce.vercel.app',
    repoUrl: 'https://github.com/Hudsonjr90/reactwebsite'
  },
  {
    name: 'Swiss Calendar Angular17',
    description: 'Rastreador de feriados com interface clara e filtragem rápida.',
    technologies: ['Angular', 'TypeScript', 'Sass'],
    image: '/imgs/imgProjects/calendar.webp',
    deployUrl: 'https://swiss-holiday-tracker.vercel.app',
    repoUrl: 'https://github.com/Hudsonjr90/swiss-holiday-tracker'
  },
  {
    name: 'Memory React Game',
    description: 'Jogo da memória para prática de estados, eventos e UX lúdica.',
    technologies: ['React', 'TypeScript', 'CSS'],
    image: '/imgs/imgProjects/memory.webp',
    deployUrl: 'https://reactmemorygame.vercel.app',
    repoUrl: 'https://github.com/Hudsonjr90/Reactmemorygame'
  }
];