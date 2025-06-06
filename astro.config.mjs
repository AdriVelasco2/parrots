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
    SUPABASE_URL: process.env.SUPABASE_URL || "https://aggaqlbtadudarkstveu.supabase.co",
    SUPABASE_KEY: process.env.SUPABASE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnZ2FxbGJ0YWR1ZGFya3N0dmV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1NTM1ODYsImV4cCI6MjA2NDEyOTU4Nn0.BwNiJYIMUggCNv8NLxP2gXkursnk1xsJF3c7n-CXF88",

  },
});