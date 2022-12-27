// 색상
const palette = {
  primary: {
    100: '#CCFFF9',
    200: '#00E5C9',
    300: '#00C7AE',
  },
  subColor: {
    100: '#EBF1F4',
  },
  error: '#FF0000',
  white: '#ffffff',
  black: '#000000',
  fontColor: '#ffffff',
  gray: {
    100: '#e9e9e9',
    200: '#d9d9d9',
    300: '#656565',
  },
} as const;

// 폰트 크기
const fontSize = {
  small: '14px',
  medium: '16px',
  large: '18px',
  xLarge: '24px',
  xxLarge: '32px',
} as const;

// 굵기
const fontWeight = {
  thin: '100',
  regular: '400',
  medium: '500',
  bold: '800',
} as const;

// 행간
const lineHeight = {
  small: '16px',
  medium: '20px',
  large: '24px',
  xLarge: '28px',
} as const;

export const theme = {
  palette,
  fontSize,
  fontWeight,
  lineHeight,
} as const;
