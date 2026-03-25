import { Quasar } from 'quasar';
import langPtBr from 'quasar/lang/pt-BR';
import iconSet from 'quasar/icon-set/material-icons';

import 'quasar/dist/quasar.css';
import '@quasar/extras/material-icons/material-icons.css';
import { defineNuxtPlugin } from 'nuxt/app';

export default defineNuxtPlugin((nuxtApp) => {
  const quasarOptions = {
    lang: langPtBr,
    iconSet,
    config: {
      brand: {
        primary: '#53d3ff',
        secondary: '#ff9153',
        accent: '#7af4d6',
        dark: '#0b111f'
      }
    }
  };
  nuxtApp.vueApp.use(Quasar, quasarOptions);
});
