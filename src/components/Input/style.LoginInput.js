import { css } from '@emotion/css';

const style_LoginInput = css`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    width: 100%;

    & .description {
        color: gray;
        text-transform: uppercase;
        font-size: 80%;
        letter-spacing: 2px;
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
            box-shadow: inset 0px 0px 3px 1px black;
        }
    }
`;

export default style_LoginInput;