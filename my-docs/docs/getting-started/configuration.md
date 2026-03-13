---
title: Configuration
---

# Project Configuration

Docusaurus uses a central configuration file to control the behavior and appearance of your documentation site. This file is located at the root of your project and is called `docusaurus.config.js`.

## Basic Configuration Options

### Site Information

- **title**: The title of your site, displayed in the browser tab and navbar.
- **tagline**: A short description that appears on the homepage.
- **url**: The production URL of your site (e.g., `https://my-site.com`).
- **baseUrl**: The base path for your site (usually `/` for root deployment).

### Organization Details

- **organizationName**: Your GitHub organization or username.
- **projectName**: The name of your repository.

## Theme Configuration

The `themeConfig` object controls the visual aspects of your site.

### Color Mode

```javascript
colorMode: {
  defaultMode: 'dark',
  respectPrefersColorScheme: true,
}
```

This sets the default theme to dark mode while respecting user preferences.

### Navbar

Configure the top navigation bar:

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

### Footer

Set up the site footer with links and copyright information.

## Presets

Docusaurus uses presets to configure plugins and themes. The classic preset includes:

- **docs**: Handles documentation pages
- **blog**: Manages blog posts
- **theme**: Applies the default theme

## Plugins

You can add additional plugins to extend functionality, such as search, analytics, or custom content types.

## Deployment Configuration

For GitHub Pages deployment:

```javascript
organizationName: 'your-github-username',
projectName: 'your-repo-name',
```

## Internationalization

To support multiple languages:

```javascript
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'fr', 'es'],
}
```

## Customizing Further

For advanced customization, you can:

- Modify CSS variables in `src/css/custom.css`
- Create custom components in `src/components/`
- Add custom pages in `src/pages/`

Refer to the [Docusaurus configuration reference](https://docusaurus.io/docs/api/docusaurus-config) for all available options.
