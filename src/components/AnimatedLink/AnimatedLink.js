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
    box-sizing: border-box;
    transition-property: all;
    transition-duration: .6s;
    transition-timing-function: ease;
    text-align:center;
    color: green;

    &:hover,
    &:active {
        text-decoration: none;
        letter-spacing: 3px;
    }

    &:after,
    &:before {
        backface-visibility: hidden;
        border: 1px solid rgba(0,177,0, 0);
        bottom: 0px;
        content: " ";
        display: block;
        margin: 0 auto;
        position: relative;
        transition: all 280ms ease-in-out;
        width: 0;
    }

    &:hover::after,
    &:hover::before {
        backface-visibility: hidden;
        border-color: rgb(0,177,0);
        transition: width 350ms ease-in-out;
        width: 70%;
    }

    &:hover::before {
        bottom: auto;
        top: 0;
        width: 70%;
    }
`;

const AnimatedButton = ({ placeholder, tag }) => {
    return (
        <a href="https://twitter.com/Dave_Conner" className={style + " spacetop"}>Go</a> 
    )
};

export default AnimatedButton;