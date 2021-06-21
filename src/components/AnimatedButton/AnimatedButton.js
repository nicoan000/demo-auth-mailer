import { css } from '@emotion/css';

const style = css`
    color: #fff;
    cursor: pointer;
    font-size:16px;
    font-weight: 400;
    line-height: 45px;
    margin: 0 0 2em;
    max-width: 160px; 
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%; 
    background: darken(rgb(0,177,0), 1.5%);
    font-weight: 100;
    transition: .3s;

    & svg {
        height: 45px;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }

    & rect {
        fill: none;
        stroke: #fff;
        stroke-width: 2;
        stroke-dasharray: 422, 0;
        transition: all .2s linear;
    }

    &:hover {
        letter-spacing: 3px;
        color: lightblue;
        font-weight: bold;

        & rect {
            stroke-width: 5;
            stroke-dasharray: 20, 195;
            stroke-dashoffset: 48;
            transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
            stroke: lightblue;
        }
    }
`;

const AnimatedButton = ({ placeholder, tag }) => {
    return (
        <a href="https://twitter.com/Dave_Conner" class={style}>
            <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>
            Enter
        </a>
    )
};

export default AnimatedButton;