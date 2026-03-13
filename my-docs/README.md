# My Docusaurus Documentation Site

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator designed for documentation sites.

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) version 20.0 or higher
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd my-docs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Local Development

Start the development server:

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

The site will be available at `http://localhost:3000`.

### Build for Production

Generate static content into the `build` directory:

```bash
npm run build
```

### Serve Production Build

Test the production build locally:

```bash
npm run serve
```

## 📁 Project Structure

```
my-docs/
├── blog/                    # Blog posts
├── docs/                    # Documentation pages
├── src/
│   ├── components/          # Custom React components
│   ├── css/                 # Custom CSS styles
│   └── pages/               # Custom pages
├── static/                  # Static assets (images, etc.)
├── docusaurus.config.js     # Site configuration
├── package.json             # Dependencies and scripts
├── sidebars.js              # Sidebar configuration
└── README.md               # This file
```

## 🛠️ Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Serve production build locally
- `npm run clear` - Clear cache and build artifacts
- `npm run swizzle` - Customize theme components
- `npm run deploy` - Deploy to GitHub Pages

## 🎨 Customization

### Theme

The site uses a dark theme by default. Theme configuration is in `docusaurus.config.js`.

### Styling

Custom styles are in `src/css/custom.css`. The site uses CSS custom properties for theming.

### Components

Customize theme components by swizzling:

```bash
npm run swizzle @docusaurus/theme-classic ComponentName
```

## 📚 Documentation

### Adding Documentation

1. Create new `.md` files in the `docs/` directory
2. Update `sidebars.js` to include new pages
3. Use front matter for metadata:

```yaml
---
title: My New Page
description: A description of the page
---
```

### Blog Posts

Add blog posts to the `blog/` directory with date-based filenames:

```
blog/2023-01-01-my-post.md
```

## 🔍 Search

The site includes local search functionality powered by `@docusaurus/plugin-search-local`.

## 🌐 Deployment

### GitHub Pages

Deploy automatically with:

```bash
npm run deploy
```

### Other Platforms

The built site in the `build/` directory can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your repository
- **AWS S3 + CloudFront**: Upload build files
- **Firebase Hosting**: Use Firebase CLI

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

### Guidelines

- Follow the existing code style
- Update documentation for new features
- Test changes in multiple browsers
- Use conventional commit messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- [GitHub Issues](https://github.com/your-username/your-repo/issues)
- [Discord Community](https://discord.gg/docusaurus)
- [Docusaurus Documentation](https://docusaurus.io/docs)

## 🙏 Acknowledgments

- [Docusaurus](https://docusaurus.io/) - The framework powering this site
- [React](https://reactjs.org/) - For the UI components
- [Infima](https://infima.dev/) - The CSS framework
- All contributors and the open source community
