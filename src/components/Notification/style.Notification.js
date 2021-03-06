import { css } from '@emotion/css';
import { fontSizes, colors } from '../../data/style.variables';

const style_Notification = css`
    font-size: ${fontSizes.standard};   
    position: absolute;
    background-color: ${colors.background_components_lighter_2};
    width: 400px;
    height: auto;
    border-radius: 4px;
    border: .5rem solid ${colors.background_components_lighter};
    box-shadow: inset 0px 0px 4px 2px black,
    0px 0px 4px 2px black;
    right: 3%;
    top: 3%;
    display: flex;
    flex-direction: column;
    transition: .3s;
    visibility: hidden;
    opacity: 0;

    &.shown {
        opacity: 1;
        visibility: visible;
    }

    & .msg {
        margin: 1rem;
    }

    & .progress_bar {
        height: 3px;
        background-color: red;
        ${'' /* animation-name: progress_bar_elapse;
        animation-duration: 3s;
        animation-timing-function: linear; */}
    }
`;

export default style_Notification;