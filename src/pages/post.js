import React from 'react';
import Editor from '@components/Editor/Editor';
import AppWrapper from '@components/AppWrapper/AppWrapper';
import { css } from '@emotion/css';

const style_PostPage = css`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    width: 100%;
    height: 100%;
`;

const Post = () => {
    const testClick = quill => {
        console.log(quill.getContents());
    }

    return (
        <AppWrapper>
            <div className={style_PostPage}>
                <Editor click={testClick} />
            </div>
        </AppWrapper>
    )
};

export default Post;