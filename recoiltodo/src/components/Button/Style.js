import styled, { css } from 'styled-components';

const variantCSS = {
  primary: css`
    background: ${({ theme }) => theme.palette.primary[300]};
    color: ${({ theme }) => theme.palette.fontColor};
  `,

  'primary-text': css`
    background: none;
    color: ${({ theme }) => theme.palette.primary[300]};
  `,
};

const shapeCSS = {
  default: css`
    border-radius: 8px;
  `,
  round: css`
    border-radius: 16px;
  `,
};

const sizeCSS = {
  small: css`
    width: 64px;
    height: 32px;
    padding: 16px 0;
    font-size: ${({ theme }) => theme.fontSize.medium};
  `,

  medium: css`
    width: 96px;
    height: 48px;
    padding: 16px 0;
    font-size: ${({ theme }) => theme.fontSize.large};
  `,

  large: css`
    width: 128px;
    height: 64px;
    padding: 16px 0;
    font-size: ${({ theme }) => theme.fontSize.xLarge};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  `,

  full: css`
    width: 100%;
    padding: 16px 0;
    font-size: ${({ theme }) => theme.fontSize.small};
  `,
};

export const Button = styled.button`
  ${({ variant }) => variantCSS[variant]}
  ${({ shape }) => shapeCSS[shape]}
  ${({ size }) => sizeCSS[size]}
  cursor: pointer;
  border: none;
  :hover {
    opacity: 0.8;
  }
  :disabled {
    opacity: 0.5;
  }
`;
