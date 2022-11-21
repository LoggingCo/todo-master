import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    body {
        background-color: #e7e7e7;
    }
    button {
        border: none;
    }
`;
export default GlobalStyles;
