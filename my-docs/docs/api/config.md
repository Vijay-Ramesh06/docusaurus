---
title: Configuration API
---

# Configuration API Reference

This page provides a comprehensive reference for all configuration options available in `docusaurus.config.js`.

## Top-Level Configuration

### `title` (string)
The title of your site, displayed in that browser tab and navbar.

```javascript
title: 'My Documentation Site'
```

### `tagline` (string)
A short description of your site.

```javascript
tagline: 'Build beautiful documentation'
```

### `url` (string)
The production URL of your site.

```javascript
url: 'https://my-site.com'
```

### `baseUrl` (string)
The base path under which your site is served.

```javascript
baseUrl: '/docs/'
```

### `favicon` (string)
Path to the favicon file.

```javascript
favicon: 'img/favicon.ico'
```

### `organizationName` (string)
Your GitHub organization or username.

```javascript
organizationName: 'my-org'
```

### `projectName` (string)
Your repository name.

```javascript
projectName: 'my-docs'
```

### `onBrokenLinks` (string)
How to handle broken links. Options: `'throw'`, `'warn'`, `'ignore'`.

```javascript
onBrokenLinks: 'throw'
```

## i18n Configuration

### `i18n.defaultLocale` (string)
The default locale for your site.

```javascript
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'fr', 'es'],
}
```

### `i18n.locales` (string[])
List of supported locales.

## Presets

### Classic Preset

The classic preset configures docs, blog, and theme plugins.

```javascript
presets: [
  [
    'classic',
    {
      docs: {
        sidebarPath: './sidebars.js',
        editUrl: 'https://github.com/my-org/my-repo/edit/main/',
      },
      blog: {
        showReadingTime: true,
        editUrl: 'https://github.com/my-org/my-repo/edit/main/',
      },
      theme: {
        customCss: './src/css/custom.css',
      },
    },
  ],
]
```

## Theme Configuration

### `themeConfig.colorMode`

```javascript
themeConfig: {
  colorMode: {
    defaultMode: 'light',
    disableSwitch: false,
    respectPrefersColorScheme: true,
  },
}
```

### `themeConfig.navbar`

```javascript
navbar: {
  title: 'My Site',
  logo: {
    alt: 'My Site Logo',
    src: 'img/logo.svg',
  },
  items: [
    {
      type: 'docSidebar',
      sidebarId: 'tutorialSidebar',
      position: 'left',
      label: 'Tutorial',
    },
    { to: '/blog', label: 'Blog', position: 'left' },
  ],
}
```

### `themeConfig.footer`

```javascript
footer: {
  style: 'dark',
  links: [
    {
      title: 'Docs',
      items: [
        {
          label: 'Tutorial',
          to: '/docs/intro',
        },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} My Project.`,
}
```

### `themeConfig.prism`

```javascript
prism: {
  theme: prismThemes.github,
  darkTheme: prismThemes.dracula,
}
```

## Plugins

You can add additional plugins to extend functionality.

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

For a complete list of configuration options, see the [Docusaurus Config API](https://docusaurus.io/docs/api/docusaurus-config).
