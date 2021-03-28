import { css } from '@emotion/css';
import {colors, fontSizes} from '@data/style.variables';

const style_GenericButton = css`
    background: linear-gradient(to bottom, ${colors.background_components_lighter_3},  ${colors.background_components_lighter});
    outline: none;
    border: none;
    padding: 8px 25px;
    font-size: ${fontSizes.standard_big};
    box-shadow: 0px 0px 3px 1px black;
    border-radius: 4px;
    cursor: pointer;
    transition: .4s;

    &:hover {
        color: lightblue;
    }

    &:active {
        box-shadow: inset 0px 0px 3px 1px black;
    }
`;

export default style_GenericButton;