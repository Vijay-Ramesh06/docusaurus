---
title: Plugins
---

# Using Plugins

Plugins extend Docusaurus functionality. Learn how to install, configure, and use plugins.

## Official Plugins

### Content Plugins

#### @docusaurus/plugin-content-docs
Handles documentation pages.

```javascript
// docusaurus.config.js
plugins: [
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'product-docs',
      path: 'docs/product',
      routeBasePath: 'product',
      sidebarPath: './sidebars/product.js',
    },
  ],
]
```

#### @docusaurus/plugin-content-blog
Manages blog posts.

```javascript
plugins: [
  [
    '@docusaurus/plugin-content-blog',
    {
      id: 'engineering-blog',
      path: 'blog/engineering',
      routeBasePath: 'engineering',
      showReadingTime: true,
      blogTitle: 'Engineering Blog',
      blogDescription: 'Insights from our engineering team',
    },
  ],
]
```

#### @docusaurus/plugin-content-pages
Handles custom pages.

```javascript
plugins: [
  [
    '@docusaurus/plugin-content-pages',
    {
      id: 'custom-pages',
      path: 'src/pages/custom',
    },
  ],
]
```

### Utility Plugins

#### @docusaurus/plugin-sitemap
Generates sitemap.xml for SEO.

```javascript
plugins: [
  [
    '@docusaurus/plugin-sitemap',
    {
      changefreq: 'weekly',
      priority: 0.5,
      trailingSlash: false,
    },
  ],
]
```

#### @docusaurus/plugin-google-analytics
Adds Google Analytics tracking.

```javascript
plugins: [
  [
    '@docusaurus/plugin-google-analytics',
    {
      trackingID: 'UA-XXXXXXX-X',
      anonymizeIP: true,
    },
  ],
]
```

#### @docusaurus/plugin-google-gtag
Uses Google Global Site Tag.

```javascript
plugins: [
  [
    '@docusaurus/plugin-google-gtag',
    {
      trackingID: 'GA-XXXXXXX-X',
      anonymizeIP: true,
    },
  ],
]
```

### Search Plugins

#### @docusaurus/plugin-search-local
Client-side search.

```javascript
plugins: [
  [
    '@docusaurus/plugin-search-local',
    {
      indexDocs: true,
      indexBlog: true,
      indexPages: false,
      docsRouteBasePath: '/docs',
      blogRouteBasePath: '/blog',
      hashed: true,
      docsDir: 'docs',
      blogDir: 'blog',
      ignoreFiles: [/^docs\/deprecated/],
    },
  ],
]
```

## Installing Plugins

### NPM Installation

```bash
npm install @docusaurus/plugin-google-analytics
```

### Yarn Installation

```bash
yarn add @docusaurus/plugin-google-analytics
```

## Configuring Plugins

Add plugins to `docusaurus.config.js`:

```javascript
module.exports = {
  // ... other config
  plugins: [
    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'UA-XXXXXXX-X',
      },
    ],
    // Simple plugin (no options)
    '@docusaurus/plugin-sitemap',
  ],
};
```

## Creating Custom Plugins

### Basic Plugin Structure

```javascript
// plugins/my-plugin/index.js
module.exports = function plugin(context, options) {
  return {
    name: 'my-plugin',

    async loadContent() {
      // Load content from files or APIs
      return { someData: 'value' };
    },

    async contentLoaded({content, actions}) {
      // Create pages or routes
      const {createData, addRoute} = actions;

      const dataPath = await createData('my-data.json', JSON.stringify(content));

      addRoute({
        path: '/my-page',
        component: '@site/src/components/MyPage.js',
        modules: {
          data: dataPath,
        },
      });
    },

    configureWebpack(config, isServer) {
      // Modify webpack configuration
      return {
        resolve: {
          alias: {
            '@my-plugin': path.resolve(__dirname, '../src'),
          },
        },
      };
    },
  };
};
```

### Plugin Context

The context object provides:

- `siteDir`: Absolute path to site directory
- `siteConfig`: Site configuration object
- `outDir`: Output directory
- `baseUrl`: Site base URL

### Plugin Options

```javascript
// plugins/my-plugin/index.js
module.exports = function plugin(context, options = {}) {
  const { apiUrl = 'https://api.example.com' } = options;

  return {
    name: 'my-plugin',
    // ... plugin implementation
  };
};
```

### Plugin Lifecycle Methods

#### loadContent()
Load and parse content.

#### contentLoaded({content, actions})
Process content and create routes.

#### configureWebpack(config, isServer)
Modify webpack configuration.

#### injectHtmlTags()
Inject HTML tags.

#### postBuild(props)
Run after build completes.

## Plugin Best Practices

- Keep plugins focused on single responsibilities
- Provide sensible default options
- Document plugin options and usage
- Handle errors gracefully
- Use TypeScript for better development experience
- Test plugins thoroughly

## Community Plugins

Find community plugins on npm:

- Search for `docusaurus-plugin` on npm
- Check GitHub for `docusaurus-plugin` repositories
- Browse the [Docusaurus plugins page](https://docusaurus.io/docs/api/plugins)

## Troubleshooting

### Plugin Not Loading
- Check plugin name spelling
- Verify plugin is installed
- Check console for error messages

### Configuration Issues
- Validate plugin options
- Check plugin documentation
- Test with minimal configuration

### Build Errors
- Clear cache: `npm run clear`
- Check webpack configuration
- Verify file paths

For more information, see the [Plugin API documentation](https://docusaurus.io/docs/api/plugin-methods).
