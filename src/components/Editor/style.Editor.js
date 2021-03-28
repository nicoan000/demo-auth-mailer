import { css } from '@emotion/css';
import { colors } from '@data/style.variables.js';

const style_Editor = css`
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    margin-right: 1rem;

    & .editor_container {
        max-width: 700px;
        min-height: 500px;
        position: relative;
    }

    & .submission_container {
        position: absolute;
        left: calc(100% + 5rem);
        top: 0;

        @media screen and (max-width: 1200px) {
            position: relative;
            left: auto;
            top: 0;
            margin-top: 3rem;
        }
    }

    & .ql-toolbar {
        background: linear-gradient(to bottom right, ${colors.background_components_lighter_2}, ${colors.background_components_lighter});

        & .ql-fill {
            fill: ${colors.text};
            stroke: none;
        }

        & .ql-stroke {
            fill: none;
            stroke: ${colors.text};
        }

        .ql-picker {
            color: ${colors.text};
        }
    }

    & .ql-editor {
        ${'' /* background: linear-gradient(to bottom right, ${colors.background_components_lighter_3}, ${colors.background_components_lighter}); */}
        background-color: ${colors.background_components_lighter_1};
        &:focus {
            box-shadow: inset 0px 0px 10px 5px black;
        }        
        
        @media screen and (max-width: 1200px) {
            min-height: 500px;
        }
    }
`;

export default style_Editor;