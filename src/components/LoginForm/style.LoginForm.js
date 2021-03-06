import { css } from '@emotion/css';
import {fontSizes, colors} from '../../data/style.variables';

const style_LoginForm = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.background_components};
    padding: calc(1rem + 5vw);
    border-radius: 5px;
    min-height: 200px;
    width: 300px;
    box-shadow: 0px 0px 3px 1px black;
    font-size: ${fontSizes.standard};    

    & a {
        margin-top: 1rem;
        font-size: 75%;
        color: lightblue;
        text-decoration: underline;
        cursor: pointer;

        &:hover {
            color: lightgreen;
        }
    }
`;

export default style_LoginForm;