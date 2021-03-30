import React from 'react';
import Editor from '@components/Editor/Editor';
import AppWrapper from '@components/AppWrapper/AppWrapper';
import Dropzone from '@components/Dropzone/Dropzone';
import { css } from '@emotion/css';

const style_PostPage = css`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    width: 100%;
    height: 100%;
    min-height: 100vh;
`;

const Post = () => {
    const testClick = quill => {
        console.log(quill.getContents());
    }

    return (
        <AppWrapper>
            <div className={style_PostPage}>
                <Editor click={testClick} />
                <Dropzone />
            </div>
        </AppWrapper>
    )
};

export default Post;