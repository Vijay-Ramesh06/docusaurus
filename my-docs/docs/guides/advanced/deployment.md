---
title: Deployment
---

# Deploying Docusaurus

Learn how to deploy your Docusaurus site to various hosting platforms.

## Building for Production

Before deploying, build your site for production:

```bash
npm run build
```

This creates an optimized build in the `build` directory.

## Local Testing

Test the production build locally:

```bash
npm run serve
```

This serves the built site on `http://localhost:3000`.

## Deployment Options

### GitHub Pages

#### Automatic Deployment

1. Enable GitHub Pages in repository settings
2. Use the deploy script:

```bash
npm run deploy
```

This builds and pushes to the `gh-pages` branch.

#### Manual Deployment

1. Build the site: `npm run build`
2. Copy `build` directory contents to `docs` folder or `gh-pages` branch
3. Configure GitHub Pages to serve from the appropriate source

#### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

### Netlify

#### Drag & Drop

1. Build locally: `npm run build`
2. Drag the `build` folder to [netlify.com/drop](https://netlify.com/drop)

#### Git Integration

1. Connect your Git repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy

#### Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod --dir=build
```

### Vercel

#### Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts to configure deployment.

#### Git Integration

1. Import your repository on Vercel
2. Set build command: `npm run build`
3. Set output directory: `build`
4. Deploy

### AWS S3 + CloudFront

1. Create S3 bucket
2. Enable static website hosting
3. Upload `build` directory contents
4. Configure CloudFront distribution
5. Point domain to CloudFront

### Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

### Surge

```bash
npm install -g surge
surge build
```

### Other Platforms

Docusaurus can be deployed to any static hosting service:

- **Render**: Connect Git repository, set build command
- **Railway**: Similar to Render
- **Heroku**: Use static buildpack
- **Azure Static Web Apps**: Git integration
- **DigitalOcean App Platform**: Git integration

## Environment Variables

Set environment variables for different deployment environments:

```javascript
// docusaurus.config.js
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  // ... config
  url: isProduction ? 'https://my-site.com' : 'http://localhost:3000',
};
```

## Custom Domain

### GitHub Pages

Add `CNAME` file to `static` directory:

```
my-custom-domain.com
```

### Netlify

Configure custom domain in Netlify dashboard.

### Vercel

Add domain in Vercel project settings.

## CDN Configuration

For better performance, use a CDN:

- **Cloudflare**: Free CDN with additional features
- **AWS CloudFront**: Scalable CDN
- **Fastly**: High-performance CDN

## SSL/TLS

Most hosting platforms provide automatic HTTPS:

- GitHub Pages: Automatic
- Netlify: Automatic
- Vercel: Automatic
- Firebase: Automatic

## Analytics and Monitoring

Add analytics after deployment:

```javascript
// docusaurus.config.js
plugins: [
  [
    '@docusaurus/plugin-google-analytics',
    {
      trackingID: 'UA-XXXXXXX-X',
    },
  ],
]
```

## Performance Optimization

### Build Optimization

- Enable minification
- Optimize images
- Use CDN for assets

### Runtime Optimization

- Enable service worker for caching
- Use lazy loading for images
- Minimize bundle size

## Troubleshooting

### Build Failures

- Check build logs for errors
- Verify all dependencies are installed
- Test build locally first

### 404 Errors

- Check base URL configuration
- Verify routing setup
- Ensure all links are correct

### Slow Loading

- Optimize images
- Enable compression
- Use CDN
- Minimize bundle size

### HTTPS Issues

- Ensure SSL certificate is valid
- Check mixed content warnings
- Update all HTTP links to HTTPS

## Continuous Deployment

Set up automatic deployments on every push:

- **GitHub Actions**: For GitHub repositories
- **Netlify**: Automatic on git push
- **Vercel**: Automatic on git push
- **Railway**: Automatic on git push

## Backup and Rollback

- Keep build artifacts
- Use version control for rollbacks
- Test deployments before going live

For more deployment options, see the [Deployment documentation](https://docusaurus.io/docs/deployment).
