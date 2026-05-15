import { defineNuxtModule, createResolver, addComponentsDir, logger, installModule, hasNuxtModule } from '@nuxt/kit';
import type { ModuleOptions } from './types'
import { readFileSync, existsSync } from 'fs';

import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

export * from './types';

const defaultGoogleFontOptions = {
  families: {
    'Noto+Serif+TC': [400, 500, 700],
    'Cormorant+Garamond': [400, 500, 600, 700],
  }
};

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'finedayclub/ui',
    configKey: 'finedayclub',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    googleFont: defaultGoogleFontOptions,
    siteUrl: 'https://www.finedayclub.com',
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    const currentDir = dirname(fileURLToPath(import.meta.url));
    const packageJsonPath = join(currentDir, '..', 'package.json')
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
    const version = packageJson.version;

    if (!hasNuxtModule('@nuxt/ui')) {
      console.warn(`
        ⚠️  [finedayclub-ui] You must install @nuxt/ui v2 (or compatible) manually in your project.
        Run:
          npm install @nuxt/ui@^2
        `);
    }

    if (!hasNuxtModule('@nuxtjs/tailwindcss')) {
      console.warn(`
        ⚠️  [finedayclub-ui] You must install @nuxtjs/tailwindcss v6 (or compatible) manually in your project.
        Run:
          npm install @nuxtjs/tailwindcss@^6.13.2
        `);
    }

    // Install Google Fonts with merged options
    const googleFontOptions = { ...defaultGoogleFontOptions, ...options.googleFont };
    await installModule('@nuxtjs/google-fonts', googleFontOptions);

    // Register components
    addComponentsDir({
      path: resolve('runtime/components'),
      prefix: 'Fdc',
      global: true,
    });

    // Add types
    nuxt.hook('prepare:types', (options) => {
      options.references.push({ path: resolve(nuxt.options.buildDir, 'types/finedayclub-ui.d.ts') })
    });

    nuxt.hook('tailwindcss:config', function (tailwindConfig) {
      tailwindConfig.content.files.push(
        resolve("./runtime/components/**/*.{vue,mjs,ts}"),
      );
    });

    nuxt.options.runtimeConfig.public.fdcSiteUrl = options.siteUrl;

    logger.info(`Finedayclub UI Module  \`${version}\`, Site URL: ${options.siteUrl}`);
  }
})
