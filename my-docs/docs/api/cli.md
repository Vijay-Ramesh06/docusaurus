---
title: Command Line Interface
---

# Docusaurus CLI

The Docusaurus CLI provides a set of commands to help you develop, build, and deploy your Docusaurus site.

## Available Commands

### `docusaurus start`

Starts the development server.

```bash
docusaurus start [siteDir] [options]
```

**Options:**
- `--port <number>`: Port to run the server on (default: 3000)
- `--host <string>`: Host to run the server on (default: localhost)
- `--hot-only`: Only use hot reloading, no live reloading

### `docusaurus build`

Builds the site for production.

```bash
docusaurus build [siteDir] [options]
```

**Options:**
- `--out-dir <dir>`: Directory to write the built files to (default: build)
- `--bundle-analyzer`: Analyze bundle size
- `--minify`: Minify the output

### `docusaurus serve`

Serves the built site locally.

```bash
docusaurus serve [siteDir] [options]
```

**Options:**
- `--port <number>`: Port to serve on (default: 3000)
- `--host <string>`: Host to serve on
- `--build`: Build the site before serving

### `docusaurus deploy`

Deploys the site to GitHub Pages.

```bash
docusaurus deploy [siteDir]
```

**Environment Variables:**
- `GIT_USER`: Your GitHub username
- `USE_SSH`: Set to `true` to use SSH instead of HTTPS

### `docusaurus clear`

Clears the cache and build artifacts.

```bash
docusaurus clear [siteDir]
```

### `docusaurus write-translations`

Extracts translation messages from your site.

```bash
docusaurus write-translations [siteDir] [options]
```

**Options:**
- `--locale <locale>`: Target locale
- `--override`: Override existing translation files

### `docusaurus write-heading-ids`

Generates heading IDs for all headings in your docs.

```bash
docusaurus write-heading-ids [siteDir] [options]
```

## Global Options

All commands support these global options:

- `--help`: Show help
- `--version`: Show version
- `--config <path>`: Path to config file
- `--verbose`: Enable verbose logging

## Examples

Start development server on port 8080:
```bash
docusaurus start --port 8080
```

Build for production with bundle analysis:
```bash
docusaurus build --bundle-analyzer
```

Deploy using SSH:
```bash
USE_SSH=true docusaurus deploy
```

For more information, run `docusaurus --help` or visit the [CLI documentation](https://docusaurus.io/docs/cli).
