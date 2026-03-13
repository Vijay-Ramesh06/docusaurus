---
title: Your First Project
---

# Creating Your First Docusaurus Project

Congratulations on installing Docusaurus! This guide will walk you through creating your first documentation project.

## Project Structure

After running `npx create-docusaurus@latest my-website classic`, you'll have a project structure like this:

```
my-website/
├── blog/
├── docs/
├── src/
│   ├── css/
│   └── pages/
├── static/
├── docusaurus.config.js
├── package.json
├── README.md
└── sidebars.js
```

## Understanding the Folders

- **docs/**: Contains your documentation pages in Markdown format
- **blog/**: Blog posts (optional)
- **src/**: Source code for custom components and pages
- **static/**: Static assets like images and files

## Editing Your First Page

Let's start by editing the homepage. Open `src/pages/index.js` in your code editor.

You'll see a React component that renders the homepage. You can customize:

- The hero section title and subtitle
- Feature highlights
- Call-to-action buttons

## Adding Documentation

Create your first documentation page in `docs/intro.md`:

```markdown
---
id: intro
title: Introduction
---

# Welcome to My Documentation

This is my first documentation page.
```

## Configuring the Sidebar

Edit `sidebars.js` to organize your documentation:

```javascript
module.exports = {
  tutorialSidebar: [
    'intro',
    'getting-started/installation',
    'getting-started/configuration',
  ],
};
```

## Customizing the Theme

Modify `src/css/custom.css` to change colors and styles:

```css
:root {
  --ifm-color-primary: #your-color;
}
```

## Running the Site

Start the development server:

```bash
npm start
```

Visit `http://localhost:3000` to see your changes.

## Next Steps

- Add more documentation pages
- Configure the navbar and footer
- Set up deployment
- Customize the theme further

Explore the [Docusaurus documentation](https://docusaurus.io/docs) for more advanced features.
