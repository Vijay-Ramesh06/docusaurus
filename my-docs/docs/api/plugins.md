---
title: Plugins API
---

# Docusaurus Plugins

Plugins extend the functionality of your Docusaurus site. This page covers the plugin system and available plugins.

## Plugin Types

### Content Plugins

Content plugins add new types of content to your site.

- **@docusaurus/plugin-content-docs**: Handles documentation pages
- **@docusaurus/plugin-content-blog**: Manages blog posts
- **@docusaurus/plugin-content-pages**: Handles custom pages

### Theme Plugins

Theme plugins provide UI components and styling.

- **@docusaurus/theme-classic**: The default theme
- **@docusaurus/theme-live-codeblock**: Adds live code editing
- **@docusaurus/theme-search-algolia**: Algolia search integration

### Utility Plugins

Utility plugins add various features.

- **@docusaurus/plugin-google-analytics**: Google Analytics integration
- **@docusaurus/plugin-google-gtag**: Google Global Site Tag
- **@docusaurus/plugin-sitemap**: Generates sitemap.xml
- **@docusaurus/plugin-ideal-image**: Optimized images

## Using Plugins

### Installing Plugins

```bash
npm install @docusaurus/plugin-google-analytics
```

### Configuring Plugins

Add plugins to your `docusaurus.config.js`:

```javascript
plugins: [
  [
    '@docusaurus/plugin-google-analytics',
    {
      trackingID: 'UA-XXXXXXX-X',
    },
  ],
]
```

## Creating Custom Plugins

You can create your own plugins to extend Docusaurus.

### Plugin Structure

A plugin is a function that returns an object with lifecycle methods:

```javascript
module.exports = function plugin(context, options) {
  return {
    name: 'my-plugin',
    async loadContent() {
      // Load content
    },
    async contentLoaded({content, actions}) {
      // Process content
    },
    configureWebpack(config, isServer) {
      // Modify webpack config
    },
  };
};
```

### Plugin Context

The `context` object provides:

- `siteDir`: Absolute path to the site directory
- `generatedFilesDir`: Directory for generated files
- `siteConfig`: The site configuration
- `i18n`: Internationalization utilities

### Plugin Options

Plugins can accept options:

```javascript
module.exports = function plugin(context, options = {}) {
  const { customOption = 'default' } = options;
  // Use options
};
```

## Plugin Lifecycle

### `loadContent()`
Load and parse content from files or external sources.

### `contentLoaded({content, actions})`
Process loaded content and create routes.

### `configureWebpack(config, isServer)`
Modify the webpack configuration.

### `injectHtmlTags()`
Inject HTML tags into the head or body.

### `postBuild(props)`
Run after the build is complete.

## Theme Plugins

Theme plugins provide React components.

### Component Override

Override theme components by creating files in `src/theme/`:

```
src/theme/
  Layout.js
  Footer.js
  Navbar.js
```

### Swizzling

Use `docusaurus swizzle` to copy theme components:

```bash
npm run swizzle @docusaurus/theme-classic Footer
```

## Best Practices

- Keep plugins focused on a single responsibility
- Provide sensible defaults
- Document plugin options
- Handle errors gracefully
- Test plugins thoroughly

For more information, see the [Plugin API documentation](https://docusaurus.io/docs/api/plugin-methods).
