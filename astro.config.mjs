import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  adapter: netlify(),
  env: {
    AIRTABLE_BASE_ID: import.meta.env.AIRTABLE_TOKEN,
    AIRTABLE_TOKEN: import.meta.env.AIRTABLE_TOKEN,
    AIRTABLE_TABLE_ID: import.meta.env.AIRTABLE_TABLE_ID
  },
});