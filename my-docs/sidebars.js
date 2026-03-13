const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/configuration',
        'getting-started/first-project',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'category',
          label: 'Basics',
          items: [
            'guides/basics/navigation',
            'guides/basics/sidebar',
          ],
        },
        {
          type: 'category',
          label: 'Customization',
          items: [
            'guides/customization/themes',
            'guides/customization/styling',
            'guides/customization/plugins',
          ],
        },
      ],
    },
  ],
};

export default sidebars;