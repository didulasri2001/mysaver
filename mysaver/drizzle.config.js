import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./Utils/schema.jsx",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL,
  },
});
