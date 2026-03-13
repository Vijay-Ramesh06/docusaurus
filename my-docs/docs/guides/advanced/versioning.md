---
title: Versioning
---

# Documentation Versioning

Manage multiple versions of your documentation for different releases.

## Versioning Strategy

### When to Version

- Major product releases
- Breaking API changes
- Significant feature updates
- Long-term support (LTS) releases

### Versioning Schemes

- **Semantic Versioning**: 1.0.0, 2.1.3, etc.
- **Date-based**: 2023-01, 2023-06
- **Product versions**: v1.0, v2.0

## Setting Up Versioning

### Enable Versioning

In `docusaurus.config.js`:

```javascript
presets: [
  [
    'classic',
    {
      docs: {
        // ... other options
        versions: {
          current: {
            label: 'Next',
            path: 'next',
          },
        },
      },
    },
  ],
]
```

### Create a Version

```bash
npm run docusaurus docs:version 1.0.0
```

This creates a versioned docs folder and updates the version dropdown.

## Version Structure

After versioning, your docs structure becomes:

```
docs/
├── intro.md
├── getting-started/
│   ├── installation.md
│   └── configuration.md
versioned_docs/
├── version-1.0.0/
│   ├── intro.md
│   ├── getting-started/
│   │   ├── installation.md
│   │   └── configuration.md
versioned_sidebars/
├── version-1.0.0-sidebars.json
```

## Version Configuration

### Version Labels

Customize version labels:

```javascript
versions: {
  current: {
    label: 'Next',
    path: 'next',
    banner: 'unreleased',
  },
  '1.0.0': {
    label: '1.0.0',
    banner: 'none',
  },
}
```

### Version Banner

Show banners for different version states:

- `none`: No banner
- `unreleased`: "Unreleased" banner
- `unmaintained`: "Unmaintained" banner

## Managing Versions

### Update Version

To update an existing version:

1. Switch to the version branch/tag
2. Make documentation changes
3. Run version command again

### Delete Version

Remove a version:

```bash
npm run docusaurus docs:version:remove 1.0.0
```

### List Versions

See all versions:

```bash
npm run docusaurus docs:version:list
```

## Version Navigation

### Version Dropdown

Automatically added to navbar when versioning is enabled.

### Version Banner

Shows version status at the top of pages.

### URL Structure

- Current version: `/docs/intro`
- Versioned docs: `/docs/1.0.0/intro`

## Advanced Versioning

### Version-Specific Content

Use version-specific includes:

```markdown
<!-- This content is only for version 1.0.0 and above -->
:::version v1.0.0

New feature documentation here.

:::
```

### Conditional Rendering

Show content based on version:

```jsx
import {useDocVersion} from '@docusaurus/theme-common';

function MyComponent() {
  const version = useDocVersion();
  return (
    <div>
      {version.version === '1.0.0' ? (
        <p>Version 1.0.0 content</p>
      ) : (
        <p>Other version content</p>
      )}
    </div>
  );
}
```

### Version Redirects

Set up redirects for moved pages:

```javascript
plugins: [
  [
    '@docusaurus/plugin-client-redirects',
    {
      redirects: [
        {
          to: '/docs/new-path',
          from: '/docs/old-path',
        },
      ],
    },
  ],
]
```

## Version Maintenance

### Version Lifecycle

1. **Development**: Current/next version
2. **Release**: Tagged version
3. **Maintenance**: Bug fixes only
4. **End of Life**: No longer maintained

### Automated Versioning

Use CI/CD for automated versioning:

```yaml
# .github/workflows/version.yml
name: Version Documentation
on:
  release:
    types: [published]

jobs:
  version:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run docusaurus docs:version ${{ github.event.release.tag_name }}
      - run: |
          git config --global user.name 'GitHub Actions'
          git config --global user.email 'actions@github.com'
          git add .
          git commit -m "Version docs for ${{ github.event.release.tag_name }}"
          git push
```

## Best Practices

### Version Planning

- Plan versioning strategy early
- Communicate version support policy
- Use consistent versioning scheme

### Documentation Updates

- Update docs before releasing code
- Keep versioned docs in sync
- Archive outdated versions

### User Experience

- Clearly indicate version status
- Provide migration guides
- Maintain old version access

## Troubleshooting

### Version Not Appearing

- Check version command ran successfully
- Verify versioned files exist
- Clear cache: `npm run clear`

### Broken Links

- Update internal links for versioned content
- Use relative links where possible
- Set up redirects for moved content

### Sidebar Issues

- Check versioned sidebar files
- Ensure sidebar IDs match
- Test sidebar navigation

## Migration Guides

Create guides for upgrading between versions:

```markdown
# Migrating from 1.0.0 to 2.0.0

## Breaking Changes

- API endpoint `/old` removed
- New authentication required

## Migration Steps

1. Update API calls
2. Add authentication headers
3. Test integration
```

For more information, see the [Versioning documentation](https://docusaurus.io/docs/versioning).
