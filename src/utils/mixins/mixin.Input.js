import { css } from '@emotion/css';

const Input_Mixin = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 1.75rem;

    & .description {
        color: gray;
        text-transform: uppercase;
        font-size: 90%;
        letter-spacing: 2px;
        display: flex;
        align-items: center;

        & .disclaimer {
            font-size: 70%;
            margin-left: .5rem;
        }
    }

    & input {
        background-color: #252525;
        outline: none;
        border: none;
        padding: 8px 6px;
        border-radius: 3px; 
        box-shadow: 0px 0px 3px 0px black;
        font-size: 80%;

        &:focus {
            box-shadow: inset 0px 0px 7px 1px black;
        }
    }
`;

export default Input_Mixin;