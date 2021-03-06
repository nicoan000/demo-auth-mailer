import { css } from '@emotion/css';

const style_GenericButton = css`
    background-color: #252525;
    outline: none;
    border: none;
    padding: 8px 25px;
    font-size: 110%;
    box-shadow: 0px 0px 3px 1px black;
    border-radius: 4px;
    cursor: pointer;
    transition: .2s;

    &:hover {
        color: lightblue;
        transform: scale(.95);
    }

    &:active {
        box-shadow: inset 0px 0px 3px 1px black;
    }
`;

export default style_GenericButton;