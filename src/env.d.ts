interface ImportMetaEnv {
  readonly PUBLIC_APP_TITLE: string;
  readonly PUBLIC_SITE: string;
  readonly PUBLIC_AUTHOR: string;
  readonly PUBLIC_DESCRIPTION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
