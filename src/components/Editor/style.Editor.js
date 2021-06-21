import { css } from '@emotion/css';
import { colors } from '@data/style.variables.js';

const style_Editor = css`
    --editor-height: 450px;

    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    margin-right: 1rem;
    position: relative;
    margin-bottom: 4rem;

    & .editor_container {
        max-width: 700px;
        position: relative;
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
        min-height: var(--editor-height);
        &:focus {
            box-shadow: inset 0px 0px 10px 5px black;
        }        
        
        @media screen and (max-width: 1200px) {
            min-height: 500px;
        }
    }
`;

export default style_Editor;