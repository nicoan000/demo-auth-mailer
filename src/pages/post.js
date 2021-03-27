import Editor from '@components/Editor/Editor';
import { css } from '@emotion/css';

const style_PostPage = css`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
`;

const Post = () => {
    return (
        <div className={style_PostPage}>
            <Editor />
        </div>
    )
};

export default Post;