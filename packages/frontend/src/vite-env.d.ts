/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BLOG_URL: string;
  readonly VITE_API_AUTH_URL: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_DEFAULT_LANGUAGE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
