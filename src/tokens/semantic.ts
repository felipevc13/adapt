import { palettes } from './colors';

const pick = (family: string, tone: number, fallback: string): string => {
  const scale = palettes[family as keyof typeof palettes];
  const value = scale && scale[tone as keyof typeof scale];
  return typeof value === 'string' ? value : fallback;
};

export type SemanticToken = {
  light: string;
  dark: string;
  lightRef?: string;
  darkRef?: string;
  legacy?: string;
  usage: string;
};

export type SemanticGroup = Record<string, SemanticToken>;

export const semanticTokens: Record<string, SemanticGroup> = {
  fill: {
    background: {
      legacy: 'background-secondary',
      light: pick('grey', 50, '#f1f1f1'),
      dark: pick('grey', 900, '#161616'),
      lightRef: 'grey-50',
      darkRef: 'grey-900',
      usage: 'Cor para fundo da tela'
    },
    foreground: {
      legacy: 'background-primary',
      light: '#ffffff',
      dark: pick('grey', 900, '#161616'),
      lightRef: 'white',
      darkRef: 'grey-900',
      usage: 'Cor para primeiro plano de tela'
    },
    surface: {
      legacy: 'background-secondary, background-tertiary',
      light: 'rgba(0,0,0,0.10)',
      dark: 'rgba(255,255,255,0.10)',
      lightRef: 'black-alpha-10',
      darkRef: 'white-alpha-10',
      usage: 'Cor para superfície de destaque do primeiro plano da tela'
    },
    inverse: {
      legacy: 'background-accent',
      light: pick('grey', 800, '#323232'),
      dark: '#ffffff',
      lightRef: 'grey-800',
      darkRef: 'white',
      usage: 'Cor de contraste com fundo e primeiro plano da tela'
    },
    overlay: {
      legacy: 'background-overlay',
      light: 'rgba(0,0,0,0.12)',
      dark: 'rgba(255,255,255,0.12)',
      lightRef: 'black-alpha-12',
      darkRef: 'white-alpha-12',
      usage: 'Plano de fundo para sobreposição'
    }
  },
  content: {
    readable: {
      legacy: 'text-primary',
      light: pick('grey', 800, '#323232'),
      dark: pick('grey', 50, '#f1f1f1'),
      lightRef: 'grey-800',
      darkRef: 'grey-50',
      usage: 'Texto e ícone padrão'
    },
    'readable-subtle': {
      legacy: 'text-secondary',
      light: pick('grey', 600, '#575f5f'),
      dark: pick('grey', 300, '#a5a5a5'),
      lightRef: 'grey-600',
      darkRef: 'grey-300',
      usage: 'Texto e ícone sutis'
    }
  },
  border: {
    divider: {
      legacy: 'border-divider',
      light: 'rgba(0,0,0,0.10)',
      dark: 'rgba(255,255,255,0.10)',
      lightRef: 'black-alpha-10',
      darkRef: 'white-alpha-10',
      usage: 'Cor para divisores'
    },
    stroke: {
      legacy: 'border-secondary, border-tertiary',
      light: 'rgba(0,0,0,0.30)',
      dark: 'rgba(255,255,255,0.30)',
      lightRef: 'black-alpha-30',
      darkRef: 'white-alpha-30',
      usage: 'Cor para bordas'
    }
  },
  state: {
    'state-hover': {
      light: 'rgba(0,0,0,0.08)',
      dark: 'rgba(255,255,255,0.10)',
      lightRef: 'black-alpha-08',
      darkRef: 'white-alpha-10',
      usage: 'Hover de itens interativos'
    },
    'state-pressed': {
      light: 'rgba(0,0,0,0.14)',
      dark: 'rgba(255,255,255,0.14)',
      lightRef: 'black-alpha-14',
      darkRef: 'white-alpha-14',
      usage: 'Pressionado de itens interativos'
    },
    'state-disabled': {
      legacy: 'background-disabled, border-disabled, icon-disabled, text-disabled',
      light: 'rgba(0,0,0,0.20)',
      dark: 'rgba(255,255,255,0.20)',
      lightRef: 'black-alpha-20',
      darkRef: 'white-alpha-20',
      usage: 'Estado desabilitado de itens interativos'
    },
    'state-selected': {
      legacy: 'state-selected',
      light: 'rgba(0,0,0,0.10)',
      dark: 'rgba(255,255,255,0.10)',
      lightRef: 'black-alpha-10',
      darkRef: 'white-alpha-10',
      usage: 'Estado selecionado de itens interativos'
    }
  },
  system: {
    'system-critical': {
      legacy: 'state-critical',
      light: pick('red', 500, '#d2392f'),
      dark: pick('red', 400, '#d45d54'),
      lightRef: 'red-500',
      darkRef: 'red-400',
      usage: 'Crítica / bloqueio'
    },
    'system-positive': {
      legacy: 'state-positive',
      light: pick('green', 500, '#2d8228'),
      dark: pick('green', 400, '#53994f'),
      lightRef: 'green-500',
      darkRef: 'green-400',
      usage: 'Sucesso'
    },
    'system-warning': {
      legacy: 'state-warning',
      light: pick('yellow', 500, '#ffc400'),
      dark: pick('yellow', 400, '#ffc730'),
      lightRef: 'yellow-500',
      darkRef: 'yellow-400',
      usage: 'Alerta'
    }
  },
  brand: {
    brand: {
      legacy: 'style-color',
      light: pick('cobalto', 500, '#2b7aff'),
      dark: pick('cobalto', 400, '#5595ff'),
      lightRef: 'cobalto-500',
      darkRef: 'cobalto-400',
      usage: 'Cor principal da marca'
    },
    'brand-subtle': {
      legacy: 'style-color-light',
      light: pick('cobalto', 50, '#eaf2ff'),
      dark: pick('cobalto', 300, '#71a6ff'),
      lightRef: 'cobalto-50',
      darkRef: 'cobalto-300',
      usage: 'Cor suave de marca'
    }
  }
};
