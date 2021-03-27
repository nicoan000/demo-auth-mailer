import { css } from '@emotion/css';
import { colors } from '@data/style.variables.js';

const style_Editor = css`
    max-width: 700px;
    height: 500px;
    border-radius: 20px;

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
    }
`;

export default style_Editor;