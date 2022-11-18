import * as S from './Style';

function Button({ variant, shape, size, children, ...rest }) {
  return (
    <S.Button variant={variant} shape={shape} size={size} {...rest}>
      {children}
    </S.Button>
  );
}
export default Button;
