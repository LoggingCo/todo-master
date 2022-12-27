import * as S from './Style';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'primary-text';
  shape: 'round' | 'default';
  size: 'small' | 'medium' | 'large' | 'full';
  children: React.ReactNode;
}

function Button({ variant, shape, size, children, ...rest }: ButtonProps) {
  return (
    <S.Button variant={variant} shape={shape} size={size} {...rest}>
      {children}
    </S.Button>
  );
}
export default Button;
