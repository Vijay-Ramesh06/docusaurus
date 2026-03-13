---
title: Installation
---

# Installing Docusaurus

This guide will help you install and set up Docusaurus for your documentation site.

## Prerequisites

Before installing Docusaurus, ensure you have the following:

- **Node.js**: Version 20.0 or higher. You can download it from [nodejs.org](https://nodejs.org/).
- **npm** or **yarn**: These come with Node.js, but make sure you have the latest version.

To check your Node.js version, run:

```bash
node --version
```

To check npm version:

```bash
npm --version
```

## Creating a New Docusaurus Site

The easiest way to create a new Docusaurus site is using the `create-docusaurus` command.

Run the following command in your terminal:

```bash
npx create-docusaurus@latest my-website classic
```

This will:

1. Create a new directory called `my-website`
2. Set up a Docusaurus project with the classic template
3. Install all necessary dependencies

## Navigating to Your Project

Once the installation is complete, navigate to your project directory:

```bash
cd my-website
```

## Starting the Development Server

To start the development server and see your site in action:

```bash
npm start
```

This will:

- Start a local development server
- Open your browser to `http://localhost:3000`
- Enable hot reloading for instant updates

## Building for Production

When you're ready to deploy your site, build it for production:

```bash
npm run build
```

This creates an optimized version of your site in the `build` directory.

## Serving the Production Build Locally

To test the production build locally:

```bash
npm run serve
```

This serves the built site on `http://localhost:3000`.

## Next Steps

Now that you have Docusaurus installed:

1. Edit the configuration in `docusaurus.config.js`
2. Add your documentation in the `docs` folder
3. Customize the theme in `src/css/custom.css`
4. Write blog posts in the `blog` folder

For more information, visit the [Docusaurus documentation](https://docusaurus.io/docs).