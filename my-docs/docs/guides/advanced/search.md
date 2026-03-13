---
title: Search
---

# Adding Search to Docusaurus

Implement search functionality to help users find content quickly.

## Built-in Search Options

### Local Search

The `@docusaurus/plugin-search-local` provides client-side search.

#### Installation

```bash
npm install @docusaurus/plugin-search-local
```

#### Configuration

```javascript
// docusaurus.config.js
plugins: [
  [
    '@docusaurus/plugin-search-local',
    {
      indexDocs: true,
      indexBlog: true,
      indexPages: false,
      docsRouteBasePath: '/docs',
      blogRouteBasePath: '/blog',
      hashed: true,
      docsDir: 'docs',
      blogDir: 'blog',
      ignoreFiles: [/^docs\/deprecated/],
    },
  ],
]
```

#### Options

- `indexDocs`: Index documentation pages
- `indexBlog`: Index blog posts
- `indexPages`: Index custom pages
- `hashed`: Use hashed index for better caching
- `ignoreFiles`: Regex patterns to exclude files

### Algolia DocSearch

Algolia provides hosted search with advanced features.

#### Setup

1. Apply for DocSearch at [docsearch.algolia.com](https://docsearch.algolia.com/)
2. Install the theme:

```bash
npm install @docusaurus/theme-search-algolia
```

3. Configure in `docusaurus.config.js`:

```javascript
themeConfig: {
  algolia: {
    appId: 'YOUR_APP_ID',
    apiKey: 'YOUR_SEARCH_API_KEY',
    indexName: 'YOUR_INDEX_NAME',
    contextualSearch: true,
    searchParameters: {},
    searchPagePath: 'search',
  },
}
```

## Custom Search Implementation

### Search UI Component

Create a custom search component:

```javascript
// src/theme/SearchBar.js
import React from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (searchQuery) => {
    // Implement search logic
    const searchResults = await searchAPI(searchQuery);
    setResults(searchResults);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          handleSearch(e.target.value);
        }}
        placeholder="Search..."
      />
      {results.length > 0 && (
        <div className="search-results">
          {results.map((result) => (
            <div key={result.id} className="search-result">
              <a href={result.url}>{result.title}</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

### Search Index

Create a search index:

```javascript
// plugins/search-index/index.js
module.exports = function plugin() {
  return {
    name: 'search-index',
    async contentLoaded({content, actions}) {
      const {createData} = actions;

      // Collect all content
      const allContent = [
        ...content.docs,
        ...content.blog,
        ...content.pages,
      ];

      // Create search index
      const searchIndex = allContent.map((item) => ({
        id: item.id,
        title: item.title,
        content: item.content,
        url: item.permalink,
      }));

      await createData('search-index.json', JSON.stringify(searchIndex));
    },
  };
};
```

### Search Algorithm

Implement a simple search function:

```javascript
// src/utils/search.js
export function searchContent(query, index) {
  const lowercaseQuery = query.toLowerCase();

  return index.filter((item) =>
    item.title.toLowerCase().includes(lowercaseQuery) ||
    item.content.toLowerCase().includes(lowercaseQuery)
  );
}
```

## Search Best Practices

### Content Optimization

- Use descriptive titles and headings
- Include relevant keywords naturally
- Structure content with clear hierarchy
- Add meta descriptions

### Search UX

- Provide instant results as user types
- Highlight search terms in results
- Show relevant snippets
- Include breadcrumbs in results

### Performance

- Index content efficiently
- Use debouncing for search input
- Cache search results
- Lazy load search components

## Advanced Search Features

### Faceted Search

Allow filtering by categories:

```javascript
const facets = {
  category: ['docs', 'blog', 'api'],
  language: ['javascript', 'python', 'java'],
};
```

### Fuzzy Search

Handle typos and partial matches:

```javascript
import Fuse from 'fuse.js';

const fuse = new Fuse(index, {
  keys: ['title', 'content'],
  threshold: 0.3,
});

const results = fuse.search(query);
```

### Search Analytics

Track search behavior:

```javascript
// Track search queries
const trackSearch = (query, results) => {
  analytics.track('search', {
    query,
    resultCount: results.length,
  });
};
```

## Integration Examples

### With External Search Services

#### Elasticsearch

```javascript
const searchElasticsearch = async (query) => {
  const response = await fetch('/api/search', {
    method: 'POST',
    body: JSON.stringify({ query }),
  });
  return response.json();
};
```

#### Meilisearch

```javascript
import { MeiliSearch } from 'meilisearch';

const client = new MeiliSearch({
  host: 'http://localhost:7700',
});

const searchMeili = async (query) => {
  const results = await client.index('docs').search(query);
  return results.hits;
};
```

## Accessibility

Ensure search is accessible:

- Add ARIA labels
- Support keyboard navigation
- Provide screen reader support
- Use high contrast colors

## SEO Considerations

- Make search results crawlable
- Use structured data for rich snippets
- Optimize for search engine indexing

## Troubleshooting

### Search Not Working

- Check if search plugin is properly configured
- Verify index is being generated
- Check browser console for errors

### Poor Results

- Review content for keyword optimization
- Adjust search algorithm parameters
- Consider using external search service

### Performance Issues

- Optimize index size
- Implement caching
- Use web workers for search processing

For more information, see the [Search documentation](https://docusaurus.io/docs/search).
