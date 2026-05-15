# FineDayClub UI Library

A premium UI library delivering consistent, high-end components for FineDayClub's travel platforms.

## Features

- Responsive components optimized for desktop and mobile
- Consistent design language aligned with FineDayClub branding
- Built on Nuxt 3 for optimal Vue.js integration
- Fully customizable themes and styling options

## Installation

### 1. Add as a git submodule

In your frontend project root:

```bash
git submodule add git@github.com:tryandco/finedayclub-ui.git modules/finedayclub-ui
git submodule update --init --recursive
```

### 2. Add the module to your `nuxt.config.ts`

```ts
export default defineNuxtConfig({
  modules: [
    './modules/finedayclub-ui/src/module',
  ],

  finedayclub: {
    siteUrl: "https://www.finedayclub.com",
  }
})
```

### Updating the UI library

```bash
git submodule update --remote modules/finedayclub-ui
```

## Usage

Once installed, all components are automatically available in your Nuxt project without needing to import them:

```vue
<template>
  <div>
    <ProductContent>
      <h3>Premium Experience</h3>
      <p>Enjoy a luxurious stay at our partner locations.</p>
      <ul>
        <li>Luxury accommodations</li>
        <li>Gourmet dining options</li>
      </ul>
    </ProductContent>
    
    <ProductContentImage src="/path/to/image.jpg" alt="Luxury accommodation" />
  </div>
</template>
```

## Component Examples

Below are examples of some key components available in this library:

### ProductContent

A rich text content container with typography styling for product descriptions.

```vue
<ProductContent>
  <h2>Section Title</h2>
  <p>Detailed product description with rich typography</p>
  <ul>
    <li>Feature one</li>
    <li>Feature two</li>
  </ul>
</ProductContent>
```

The component automatically styles:
- Headings (h2, h3)
- Paragraphs
- Ordered and unordered lists
- Special styling for section titles

### ProductDailySchedule

Display detailed daily itineraries with time and activity information.

```vue
<ProductDailySchedule :schedule="itinerary" />
```

### SectionTitle

A styled section title component for consistent headings.

```vue
<SectionTitle>Featured Experiences</SectionTitle>
```

## Documentation

For detailed documentation and examples, refer to:
- [Component Storybook](https://ui.finedayclub.com)
- [Contributing Guidelines](./CONTRIBUTING.md)

## License

Proprietary - © tryandco. All rights reserved.
