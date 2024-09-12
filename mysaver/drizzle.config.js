import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./Utils/schema.jsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://mysaverDB_owner:i0HxPzXh6GBZ@ep-orange-boat-a5s6kty1.us-east-2.aws.neon.tech/mysaverDB?sslmode=require",
  },
});
