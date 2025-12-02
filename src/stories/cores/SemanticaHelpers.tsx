import React from 'react';
import { palettes } from '../../tokens/colors';
import { semanticTokens } from '../../tokens/semantic';
import type { SemanticGroup } from '../../tokens/semantic';

const color = (family: string, tone: number, fallback: string): string => {
  const scale = palettes[family as keyof typeof palettes];
  return scale && scale[tone] ? scale[tone] : fallback;
};

export const Tag = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4px 10px',
      borderRadius: '12px',
      background: '#2b7aff',
      color: '#ffffff',
      fontWeight: 700,
      fontSize: '11px',
      lineHeight: '14px',
      letterSpacing: '0.25px',
      marginBottom: '12px',
      width: 'fit-content',
      boxShadow: 'none'
    }}
  >
    {children}
  </span>
);

const Swatch = ({ color }: { color: string }) => (
  <span
    style={{
      display: 'inline-flex',
      width: '32px',
      height: '22px',
      borderRadius: '6px',
      background: color,
      border: '1px solid rgba(0,0,0,0.06)'
    }}
  />
);

export type TokenRow = {
  legacy?: string;
  token: string;
  usage: string;
  light: string;
  lightLabel?: string;
  dark: string;
  darkLabel?: string;
};

export type TokenSection = {
  title: string;
  rows: TokenRow[];
};

export const Table = ({ title, rows }: TokenSection) => (
  <div style={{ margin: '20px 0', border: '1px solid #e6e6e6', borderRadius: '12px', overflow: 'hidden' }}>
    <div style={{ padding: '12px 14px', fontWeight: 700, background: '#f8f8f8', borderBottom: '1px solid #e6e6e6' }}>{title}</div>
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
      <thead style={{ background: '#fafafa', textAlign: 'left' }}>
        <tr>
          <th style={{ padding: '10px 12px', width: '20%' }}>Token antigo</th>
          <th style={{ padding: '10px 12px', width: '15%' }}>Token</th>
          <th style={{ padding: '10px 12px' }}>Função</th>
          <th style={{ padding: '10px 12px', width: '15%' }}>Modo claro</th>
          <th style={{ padding: '10px 12px', width: '15%' }}>Modo escuro</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={`${row.token}-${row.light}`}>
            <td style={{ padding: '10px 12px', verticalAlign: 'middle', color: '#555' }}>{row.legacy ? row.legacy : '—'}</td>
            <td style={{ padding: '10px 12px', verticalAlign: 'middle', fontWeight: 700, textTransform: 'lowercase' }}>{row.token}</td>
            <td style={{ padding: '10px 12px', verticalAlign: 'middle', color: '#444' }}>{row.usage}</td>
            <td style={{ padding: '10px 12px', verticalAlign: 'middle' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Swatch color={row.light} />
                <span style={{ color: '#666' }}>{row.lightLabel ? row.lightLabel : row.light}</span>
              </div>
            </td>
            <td style={{ padding: '10px 12px', verticalAlign: 'middle' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Swatch color={row.dark} />
                <span style={{ color: '#666' }}>{row.darkLabel ? row.darkLabel : row.dark}</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const sections: TokenSection[] = [
  ...Object.entries(semanticTokens).map(([title, group]) => ({
    title: title.charAt(0).toUpperCase() + title.slice(1),
    rows: Object.entries(group as SemanticGroup).map(([token, value]) => ({
      legacy: value.legacy,
      token,
      usage: value.usage,
      light: value.light,
      lightLabel: value.lightRef,
      dark: value.dark,
      darkLabel: value.darkRef
    }))
  }))
];
