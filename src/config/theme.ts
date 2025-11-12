// Colors from AGÜERO OBRAS CIVILES brand PDF
export const colors = {
  primary: {
    main: '#274C5E', // Deep teal blue - brand primary
    light: '#3d6a7f',
    dark: '#1a3342',
  },
  secondary: {
    main: '#B0B0B0', // Gray - brand secondary
    light: '#d4d4d4',
    dark: '#8c8c8c',
  },
  accent: {
    main: '#E57C23', // Orange - brand accent
    light: '#f39c4f',
    dark: '#c4631a',
  },
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
}

export const theme = {
  colors,
  spacing: {
    section: {
      mobile: '4rem',
      tablet: '6rem',
      desktop: '8rem',
    },
  },
  typography: {
    fontFamily: {
      sans: 'var(--font-inter)',
      serif: 'var(--font-roboto-slab)',
    },
  },
}
