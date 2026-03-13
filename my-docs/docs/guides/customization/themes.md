---
title: Themes
---

# Customizing Themes

Docusaurus themes control the appearance and layout of your site. Learn how to customize and create themes.

## Default Theme

Docusaurus comes with the classic theme that provides:

- Responsive layout
- Dark/light mode toggle
- Navigation components
- Documentation layout
- Blog layout

## Theme Configuration

Configure theme options in `docusaurus.config.js`:

```javascript
themeConfig: {
  colorMode: {
    defaultMode: 'light',
    respectPrefersColorScheme: true,
  },
  navbar: {
    // Navbar configuration
  },
  footer: {
    // Footer configuration
  },
}
```

## CSS Customization

### Custom CSS File

Add custom styles in `src/css/custom.css`:

```css
/* Custom styles */
:root {
  --ifm-color-primary: #25c2a0;
  --ifm-color-primary-dark: #21af90;
}

[data-theme='dark'] {
  --ifm-color-primary: #25c2a0;
  --ifm-background-color: #000000;
}
```

### CSS Variables

Docusaurus uses CSS custom properties (variables) for theming:

- `--ifm-color-primary`: Primary brand color
- `--ifm-color-secondary`: Secondary color
- `--ifm-background-color`: Background color
- `--ifm-font-family-base`: Base font family
- `--ifm-font-size-base`: Base font size

## Component Customization

### Swizzling

Copy theme components to customize them:

```bash
npm run swizzle @docusaurus/theme-classic Footer
```

This creates `src/theme/Footer.js` that you can modify.

### Available Components

Common components you can swizzle:

- `Footer`
- `Navbar`
- `Layout`
- `DocSidebar`
- `DocPage`
- `BlogPostPage`

### Custom Components

Create custom theme components in `src/theme/`:

```javascript
// src/theme/Footer.js
import React from 'react';
import Footer from '@theme-original/Footer';

export default function FooterWrapper(props) {
  return (
    <div className="custom-footer-wrapper">
      <Footer {...props} />
    </div>
  );
}
```

## Creating a Custom Theme

### Theme Structure

Create a theme package:

```
my-theme/
├── src/
│   ├── theme/
│   │   ├── Layout.js
│   │   ├── Footer.js
│   │   └── index.js
│   └── index.js
├── package.json
```

### Theme Entry Point

```javascript
// src/index.js
const path = require('path');

module.exports = {
  getThemePath() {
    return path.resolve(__dirname, './theme');
  },
  getTypeScriptThemePath() {
    return path.resolve(__dirname, './theme');
  },
};
```

### Theme Components

```javascript
// src/theme/Layout.js
import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';

export default function Layout(props) {
  const {children} = props;
  const themeConfig = useThemeConfig();

  return (
    <div className="custom-layout">
      <header>{/* Custom header */}</header>
      <main>{children}</main>
      <footer>{/* Custom footer */}</footer>
    </div>
  );
}
```

## Theme Plugins

Themes can include plugins:

```javascript
// In docusaurus.config.js
plugins: [
  [
    'my-theme',
    {
      customOption: 'value',
    },
  ],
]
```

## Advanced Theming

### Using Theme Context

Access theme configuration in components:

```javascript
import {useThemeConfig} from '@docusaurus/theme-common';

function MyComponent() {
  const themeConfig = useThemeConfig();
  // Use themeConfig
}
```

### Responsive Design

Use Docusaurus breakpoints:

```css
@media (min-width: 768px) {
  /* Tablet and up */
}

@media (min-width: 996px) {
  /* Desktop and up */
}
```

### Dark Mode

Handle dark mode in components:

```javascript
import {useColorMode} from '@docusaurus/theme-common';

function MyComponent() {
  const {colorMode, setColorMode} = useColorMode();

  return (
    <button onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}>
      Toggle {colorMode === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  );
}
```

## Best Practices

- Start with the classic theme and customize gradually
- Use CSS variables for consistent theming
- Test themes on different screen sizes
- Consider accessibility when choosing colors
- Document custom theme options
- Keep themes modular and reusable

## Community Themes

Explore community-created themes:

- [Infima](https://infima.dev/) - Docusaurus design system
- [Docusaurus themes on GitHub](https://github.com/topics/docusaurus-theme)

For more information, see the [Theming documentation](https://docusaurus.io/docs/styling-layout).
