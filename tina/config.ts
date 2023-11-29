import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "public",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Блог",
        path: "src/content/blog",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Заголовок",
            description: "Введите заголовок для статьи (обязательно)",
          },
          {
            type: "string",
            name: "description",
            label: "Краткое описание",
            required: false,
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Дата публикации",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Статья",
            isBody: true,
          },
        ],
      },
    ],
  },
});
