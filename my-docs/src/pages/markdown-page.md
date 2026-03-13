---
title: Markdown Page Example
description: An example of a custom page built with Markdown in Docusaurus
---

# Markdown Page Example

You don't need React to write simple standalone pages in Docusaurus. You can use Markdown to create custom pages that are automatically converted to HTML.

## Why Use Markdown Pages?

Markdown pages offer several advantages:

- **Simplicity**: Write content without JSX syntax
- **Speed**: Faster to create than React components
- **SEO**: Automatic meta tag generation
- **Consistency**: Same styling as documentation pages

## Page Structure

A Markdown page consists of:

1. **Front Matter**: YAML metadata at the top
2. **Content**: Standard Markdown content

### Front Matter Example

```yaml
---
title: My Custom Page
description: A description for SEO and social sharing
keywords: [keyword1, keyword2]
---
```

## Content Features

### Text Formatting

- **Bold text** and *italic text*
- `Inline code` snippets
- [Links](https://docusaurus.io) to external sites

### Lists

#### Unordered List
- Item 1
- Item 2
  - Nested item
  - Another nested item
- Item 3

#### Ordered List
1. First item
2. Second item
3. Third item

### Code Blocks

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
  return `Welcome, ${name}`;
}
```

### Tables

| Feature | Description |
|---------|-------------|
| Markdown | Simple text formatting |
| Tables | Easy data presentation |
| Code | Syntax highlighting |

### Admonitions

:::note
This is a note admonition.
:::

:::tip
This is a tip.
:::

:::info
This is an info message.
:::

:::caution
This is a caution.
:::

:::danger
This is a danger warning.
:::

## Images and Assets

Store images in the `static/` directory and reference them:

![Docusaurus Logo](/img/logo.svg)

## Custom Styling

Add custom CSS classes for styling:

<div className="custom-container">
  <h3>Custom Styled Content</h3>
  <p>This content has custom styling applied.</p>
</div>

## When to Use Markdown Pages

Use Markdown pages for:

- **Landing pages**
- **Simple content pages**
- **Documentation-like content**
- **Blog-style articles**
- **Quick prototypes**

## When to Use React Components

Use React pages for:

- **Interactive content**
- **Complex layouts**
- **Dynamic data fetching**
- **Custom UI components**
- **Advanced functionality**

## Best Practices

1. **Keep it simple**: Use Markdown for straightforward content
2. **Consistent structure**: Follow similar patterns across pages
3. **SEO optimization**: Use descriptive titles and descriptions
4. **Accessibility**: Ensure content is accessible
5. **Mobile-friendly**: Test on different screen sizes

## Example Use Cases

### Company About Page

```markdown
---
title: About Us
description: Learn about our company and mission
---

# About Our Company

We are a team of developers passionate about creating great documentation tools.

## Our Mission

To make technical documentation accessible and enjoyable for everyone.

## Our Team

- **Alice**: Lead Developer
- **Bob**: Documentation Specialist
- **Charlie**: Community Manager
```

### Product Landing Page

```markdown
---
title: Our Product
description: Discover our amazing product features
---

# Welcome to Our Product

Transform your workflow with our innovative solution.

## Key Features

- ⚡ Fast and reliable
- 🎨 Beautiful design
- 🔒 Secure by default

[Get Started](/docs/getting-started/installation)
```

## Conclusion

Markdown pages provide a simple yet powerful way to create content in Docusaurus. They strike the perfect balance between ease of use and functionality, making them ideal for most documentation and marketing pages.

Experiment with Markdown pages in your Docusaurus site and see how they can enhance your content strategy!
