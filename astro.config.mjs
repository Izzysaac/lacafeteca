// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  redirects: {
    "/001": "/cafes/deiroscoffee-deiro",
    "/002": "/cafes/deiroscoffee-elvia",
    "/003": "/cafes/deiroscoffee-risto",
    "/004": "/cafes/deiroscoffee-lahuilense",
    "/005": "/cafes/deiroscoffee-elparejo",
    "/006": "/cafes/deiroscoffee-laspala",
    "/007": "/cafes/deiroscoffee-losyuma",
    "/008": "/cafes/deiroscoffee-elparche",
  }
});