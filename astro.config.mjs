// @ts-check
import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server",

  integrations: [
    svelte(),
    tailwind(),
    react({
      experimentalReactChildren: true,
    }),
  ],

  adapter: vercel(),
});