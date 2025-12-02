export type ColorScale = Record<number, string>;

type Palette = Record<string, ColorScale>;

export const palettes: Palette = {
  grey: {
    50: '#f1f1f1',
    100: '#dddddd',
    200: '#c2c2c2',
    300: '#a5a5a5',
    400: '#8a8a8a',
    500: '#707070',
    600: '#5f5f5f',
    700: '#505050',
    800: '#323232',
    900: '#161616'
  },
  cobalto: {
    50: '#eaf2ff',
    100: '#bdd6ff',
    200: '#9dc2ff',
    300: '#71a6ff',
    400: '#5595ff',
    500: '#2b7aff',
    600: '#276fe8',
    700: '#1f57c5',
    800: '#18438c',
    900: '#123368'
  },
  lirio: {
    50: '#fff1e6',
    100: '#ffd3b0',
    200: '#ffbd8a',
    300: '#ff9f54',
    400: '#ff8d33',
    500: '#ff7000',
    600: '#e86600',
    700: '#f55000',
    800: '#8c3e00',
    900: '#6b2f00'
  },
  yellow: {
    50: '#fff6e6',
    100: '#fff1c3',
    200: '#ffe893',
    300: '#ffde60',
    400: '#ffc730',
    500: '#ffc400',
    600: '#d9a703',
    700: '#b58b02',
    800: '#917002',
    900: '#735801'
  },
  green: {
    50: '#eaf3ea',
    100: '#dce1cb',
    200: '#a5c9a3',
    300: '#7bb078',
    400: '#53994f',
    500: '#2d8228',
    600: '#266f22',
    700: '#205c1c',
    800: '#1a4a17',
    900: '#143a12'
  },
  red: {
    50: '#fbe8ea',
    100: '#f4c4cd',
    200: '#ecaab6',
    300: '#e3827c',
    400: '#d45d54',
    500: '#d2392f',
    600: '#b33028',
    700: '#952821',
    800: '#78201b',
    900: '#5e1a15'
  }
};

export const alphas: Record<string, string> = {
  'black-alpha-10': 'rgba(0,0,0,0.1)',
  'black-alpha-20': 'rgba(0,0,0,0.2)',
  'black-alpha-30': 'rgba(0,0,0,0.3)',
  'black-alpha-40': 'rgba(0,0,0,0.4)',
  'black-alpha-50': 'rgba(0,0,0,0.5)',
  'black-alpha-60': 'rgba(0,0,0,0.6)',
  'black-alpha-70': 'rgba(0,0,0,0.7)',
  'black-alpha-80': 'rgba(0,0,0,0.8)',
  'black-alpha-90': 'rgba(0,0,0,0.9)',
  black: '#000000',

  'white-alpha-10': 'rgba(255,255,255,0.1)',
  'white-alpha-20': 'rgba(255,255,255,0.2)',
  'white-alpha-30': 'rgba(255,255,255,0.3)',
  'white-alpha-40': 'rgba(255,255,255,0.4)',
  'white-alpha-50': 'rgba(255,255,255,0.5)',
  'white-alpha-60': 'rgba(255,255,255,0.6)',
  'white-alpha-70': 'rgba(255,255,255,0.7)',
  'white-alpha-80': 'rgba(255,255,255,0.8)',
  'white-alpha-90': 'rgba(255,255,255,0.9)',
  white: '#ffffff'
};
