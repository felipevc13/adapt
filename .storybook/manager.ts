import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

const theme = create({
  base: 'light',
  brandTitle: 'Design System',
  brandUrl: 'https://localhost:6006',
  brandImage: '/logo-adapt.svg',
  colorPrimary: '#2b7aff', // cobalto-500
  colorSecondary: '#101010',
  appBg: '#f6f6f6',
  appContentBg: '#ffffff',
  appBorderColor: '#dcdcdc',
  appBorderRadius: 12,
  fontBase: '"Inter", "SF Pro Text", system-ui, -apple-system, sans-serif',
  textColor: '#101010',
  textInverseColor: '#ffffff'
});

addons.setConfig({
  theme
});
