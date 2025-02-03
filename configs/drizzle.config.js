import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials:  {
    url:'postgresql://neondb_owner:x1ZKav2dhOHp@ep-calm-surf-a5mc3h2a.us-east-2.aws.neon.tech/Ai-Study-Material-Gen?sslmode=require'
  }
});
