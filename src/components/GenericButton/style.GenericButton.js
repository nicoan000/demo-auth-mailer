import { css } from '@emotion/css';
import {colors, fontSizes} from '@data/style.variables';

const style_GenericButton = color => css`
    --button-border-radius: 4px;

    background: linear-gradient(to bottom, ${colors.background_components_lighter_3},  ${colors.background_components_lighter});
    outline: none;
    border: none;
    padding: 8px 25px;
    font-size: ${fontSizes.standard_medium};
    box-shadow: 0px 0px 3px 1px black;
    border-radius: var(--button-border-radius);
    cursor: pointer;
    transition: .4s;
    position: relative;
    text-transform: uppercase;

    &.green {
        background-image: linear-gradient(to bottom, hsl(120,100%,21.9%), hsl(120,100%,16.9%));
        z-index: 1;

        &::before {
            position: absolute;
            content: "";
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            background-image: linear-gradient(to bottom, hsl(120,100%,24.9%), hsl(120,100%,18.9%));
            z-index: -1;
            transition: opacity 0.2s linear;
            opacity: 0;
            border-radius: var(--button-border-radius);
        }

        &:hover::before {
            opacity: 1;
        }
    }

    &:active {
        box-shadow: inset 0px 0px 3px 1px black;
    }
`;

export default style_GenericButton;