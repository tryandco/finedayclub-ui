import type { ModuleOptions as GoogleFontsOptions } from '@nuxtjs/google-fonts'

export interface ModuleOptions {
  /**
   * Google Fonts configuration
   * @default {
   *   families: {
   *     'Noto+Serif+TC': [400, 500, 700],
   *     'Cormorant+Garamond': [400, 500, 600, 700],
   *   }
   * }
   */
  googleFont?: GoogleFontsOptions

  /**
   * Site URL for link tags
   * @default 'https://www.finedayclub.com'
   * @example 'https://www.finedayclub.com'
   *
   */
  siteUrl?: string
}
