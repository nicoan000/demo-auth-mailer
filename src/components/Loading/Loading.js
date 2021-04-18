import { useContext } from 'react';
import { css } from '@emotion/css';
import PuffLoader from 'react-spinners/PuffLoader';
import { PostContext } from '@pages/post';

const style = (visible) => (css`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(6, 6, 6, .7);
    top: 0;
    left: 0;
    z-index: 55;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: ${visible || 'hidden'};
    opacity: ${visible ? 1 : 0};
    transition: .2s;

    & .content_container {
        display: flex;
        flex-direction: column;
        align-items: center;

        & .label {
            margin-top: 2rem;
            font-size: 1.5rem;
            text-indent: 1rem;
        }
    }
`);

const spinner_override = css`
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Loading = ({visible}) => {
    // const { loading } = useContext(PostContext);

    return (
        <div className={style(visible)}>
            <div className="content_container">
                <PuffLoader 
                    loading={true} 
                    size={50} 
                    color={'white'} 
                    css={spinner_override}    
                />
                <div className="label">Processing uploads...</div>
            </div>
        </div>
    )

};

export default Loading;