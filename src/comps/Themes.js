import {createGlobalStyle} from 'styled-components';

export const lightTheme = {
    body: "white",
    fontColor: "black"
};

export const darkTheme = {
    body: "black",
    fontColor: "white"
}

export const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${(props) => props.theme.body};
        transition: all .5s ease;
    }

`;