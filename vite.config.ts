import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import monacoEditorPlugin from "vite-plugin-monaco-editor";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    monacoEditorPlugin({
      languageWorkers: ["json", "editorWorkerService", "typescript"],
      customWorkers: [
        {
          label: "graphql",
          entry: "monaco-graphql/dist/graphql.worker",
        },
      ],
    }),
  ],
});
