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
        padding: 4px 6px;
        border-radius: 3px;
        box-shadow: 0px 0px 3px 1px black;

        &:focus {
            box-shadow: inset 0px 0px 3px 1px black;
            outline: 1px solid lightblue;
        }
    }
`;

export default style_LoginInput;