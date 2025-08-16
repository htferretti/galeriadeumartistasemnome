import { createGlobalStyle } from 'styled-components';

export const colors = {
    background: '#000',
    main: '#fff',
    red: '#bb0a1e'
}

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        border: none;
        text-decoration: none;
        list-style: none;
        font-family: Roboto;
        transition: 0.2s;
        cursor: default;
    }

    html, body {
        height: 100%;
        width: 100%;
        overflow: hidden;
        background: ${colors.background};
    }
`

export default GlobalStyle