/* eslint-disable no-undef */
import { defineConfig, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';
import jsconfigPaths from "vite-jsconfig-paths";

export default ({ mode }) => {
  dotenv.config({
    path: `./.env.${mode}`,
  });
  
  return defineConfig({
    plugins: [
      {
        name: 'treat-js-files-as-jsx',
        async transform(code, id) {
          if (!id.match(/src\/.*\.js$/)) return null;

          // Use the exposed transform from vite, instead of directly
          // transforming with esbuild
          return transformWithEsbuild(code, id, {
            loader: 'jsx',
            jsx: 'automatic',
          });
        },
      },
      react(),
      jsconfigPaths(),
    ],

    define: {
      'process.env': {
        DEBUG: process.env.DEBUG === 'true',
        APP_HOST: process.env.APP_HOST,
        APP_PORT: process.env.APP_PORT,
        API_ENDPOINT: process.env.API_ENDPOINT,
      },
    },

    server: {
      host: process.env.APP_HOST,
      port: Number(process.env.APP_PORT),
    },

    optimizeDeps: {
      force: true,
      esbuildOptions: {
        loader: {
          '.js': 'jsx',
        },
      },
    },
  });
};
