import React, { useEffect } from 'react';
import type { Preview } from '@storybook/nextjs-vite';
import '../src/app/globals.css';

// Load Plus Jakarta Sans for Storybook via a <link> element injected once
if (typeof document !== 'undefined') {
  const linkId = 'plus-jakarta-sans-font';
  if (!document.getElementById(linkId)) {
    const link = document.createElement('link');
    link.id = linkId;
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(link);
  }
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'circlehollow', title: 'Light Mode' },
          { value: 'dark', icon: 'circle', title: 'Dark Mode' },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';

      useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
          root.classList.add('dark');
          root.style.colorScheme = 'dark';
        } else {
          root.classList.remove('dark');
          root.style.colorScheme = 'light';
        }
      }, [theme]);

      return (
        <div
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          className={`p-8 min-h-screen transition-colors duration-300 ${
            theme === 'dark' ? 'dark bg-[#090d16]' : 'bg-[#f8fafc]'
          }`}
        >
          <div className="mx-auto max-w-3xl bg-card text-card-foreground p-6 rounded-xl border border-border shadow-md">
            <Story />
          </div>
        </div>
      );
    },
  ],
};

export default preview;