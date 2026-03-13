---
title: Styling
---

# Custom Styling

Learn how to customize the appearance of your Docusaurus site with CSS and styling techniques.

## CSS Architecture

Docusaurus uses a component-based CSS architecture with:

- **Infima**: A CSS framework designed for content sites
- **CSS Custom Properties**: For theme customization
- **Utility Classes**: For common styling needs

## Custom CSS File

The main place for custom styles is `src/css/custom.css`.

```css
/* src/css/custom.css */

/* Import additional fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

/* Override default variables */
:root {
  --ifm-font-family-base: 'Inter', system-ui, sans-serif;
  --ifm-color-primary: #007acc;
  --ifm-color-primary-dark: #005999;
  --ifm-color-primary-darker: #004d80;
  --ifm-color-primary-darkest: #003d66;
  --ifm-color-primary-light: #338fff;
  --ifm-color-primary-lighter: #4d9fff;
  --ifm-color-primary-lightest: #80c4ff;
}

/* Dark mode overrides */
[data-theme='dark'] {
  --ifm-color-primary: #4d9fff;
  --ifm-color-primary-dark: #338fff;
  --ifm-background-color: #1a1a1a;
  --ifm-background-color-secondary: #252525;
}

/* Custom component styles */
.custom-hero {
  background: linear-gradient(135deg, var(--ifm-color-primary) 0%, var(--ifm-color-primary-light) 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.custom-card {
  border: 1px solid var(--ifm-color-emphasis-200);
  border-radius: var(--ifm-global-radius);
  padding: 1.5rem;
  transition: all 0.2s ease;
}

.custom-card:hover {
  border-color: var(--ifm-color-primary);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
```

## CSS Variables

Docusaurus provides many CSS custom properties you can override:

### Colors
- `--ifm-color-primary`
- `--ifm-color-secondary`
- `--ifm-color-success`
- `--ifm-color-info`
- `--ifm-color-warning`
- `--ifm-color-danger`

### Typography
- `--ifm-font-family-base`
- `--ifm-font-family-monospace`
- `--ifm-font-size-base`
- `--ifm-line-height-base`

### Spacing
- `--ifm-global-spacing`
- `--ifm-container-width`
- `--ifm-container-width-xl`

### Layout
- `--ifm-navbar-height`
- `--ifm-sidebar-width`

## Component Styling

### Targeting Components

Use browser dev tools to inspect and target specific components.

```css
/* Style the navbar */
.navbar {
  background-color: var(--ifm-color-primary);
}

/* Style documentation pages */
.theme-doc-markdown {
  font-size: 16px;
}

/* Style code blocks */
.theme-code-block {
  border-radius: 8px;
}
```

### Utility Classes

Docusaurus includes utility classes for common styling:

```html
<div class="margin-bottom--lg padding--md text--center">
  <p class="text--primary">Styled content</p>
</div>
```

## Responsive Design

Use media queries for responsive styling:

```css
/* Mobile first */
.hero-section {
  padding: 2rem 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .hero-section {
    padding: 3rem 2rem;
  }
}

/* Desktop */
@media (min-width: 996px) {
  .hero-section {
    padding: 4rem 3rem;
  }
}
```

## Custom Fonts

Add custom fonts to your site:

```css
/* Import font */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

/* Use font */
:root {
  --ifm-font-family-base: 'Roboto', sans-serif;
}
```

Or load fonts locally:

```css
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/custom-font.woff2') format('woff2');
}

:root {
  --ifm-font-family-base: 'CustomFont', sans-serif;
}
```

## Animations and Transitions

Add smooth transitions:

```css
.button {
  transition: all 0.2s ease-in-out;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
```

## Dark Mode Styling

Ensure your custom styles work in both light and dark modes:

```css
.custom-component {
  background-color: var(--ifm-background-color);
  border: 1px solid var(--ifm-color-emphasis-200);
}

[data-theme='dark'] .custom-component {
  /* Additional dark mode styles if needed */
}
```

## Performance Considerations

- Minimize CSS bundle size
- Use CSS custom properties for theme values
- Avoid deep CSS selectors
- Consider using CSS-in-JS for component-specific styles

## Advanced Styling

### CSS Modules

For component-specific styles, use CSS modules:

```css
/* src/components/MyComponent.module.css */
.container {
  display: flex;
  align-items: center;
}

.title {
  color: var(--ifm-color-primary);
  font-size: 1.5rem;
}
```

```javascript
// src/components/MyComponent.js
import styles from './MyComponent.module.css';

export default function MyComponent() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Component</h1>
    </div>
  );
}
```

### PostCSS

Docusaurus supports PostCSS for advanced CSS processing.

Install plugins and configure in `postcss.config.js`.

## Best Practices

- Use CSS custom properties for theming
- Test styles in both light and dark modes
- Ensure responsive design
- Keep CSS organized and commented
- Use semantic class names
- Avoid !important when possible
- Validate CSS for cross-browser compatibility

For more styling examples, see the [Styling documentation](https://docusaurus.io/docs/styling-layout).
