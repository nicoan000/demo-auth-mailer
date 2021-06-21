import { css } from '@emotion/css';
import {fontSizes, colors} from '../../data/style.variables';

const style_LoginForm = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(to bottom right, rgba(36, 36, 36, .9), rgba(12, 12, 12, .9));
    padding: calc(1rem + 5vw);
    border-radius: 10px;
    min-height: 200px;
    width: 300px;
    box-shadow: 0px 0px 7px 3px hsl(0, 0%, 0%, 20%);
    font-size: ${fontSizes.standard};    
    margin-top: 10rem;

    & a {
        margin-top: 1rem;
        font-size: 1em;
        color: lightblue;
        text-decoration: underline;
        cursor: pointer;

        &:hover {
            color: lightgreen;
        }
    }

    & .description {
        color: gray;
    }
`;

export default style_LoginForm;