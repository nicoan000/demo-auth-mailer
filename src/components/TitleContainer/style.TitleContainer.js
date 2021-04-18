import { css } from '@emotion/css';
import Input from '@utils/mixins/mixin.Input';

const style_TitleContainer = () => css`
    display: flex;
    flex-direction: row;
    max-width: 700px;
    margin-top: 5rem;
    ${Input}

    & input {
        padding: 10px 13px;
        font-size: 2rem;
    }
`;

export default style_TitleContainer;