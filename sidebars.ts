import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'intro/intro',       // ton fichier intro.md
        'intro/chapitre-1',  // ton fichier chapitre-1.md
      ],
    },
  ],
};

export default sidebars;