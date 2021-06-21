import { css } from '@emotion/css';
import Input from '@utils/mixins/mixin.Input';

const style_LoginInput = css`
    ${Input}
    margin-bottom: 2rem;

    & .description {
        font-size: .6em;
    }

    & input {
        font-size: 1em;
    }
`;

export default style_LoginInput;