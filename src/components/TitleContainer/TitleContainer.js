
import { useContext } from 'react';
import Input from '@components/Input/LoginInput';
import style from './style.TitleContainer';
import {PostContext} from '@pages/post';

const TitleContainer = () => {
    const { title, setTitle } = useContext(PostContext);

    return (
        <div className={style()}>
            <div className="description">title 
                <span className="disclaimer">(required)</span>
            </div>
            <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder={"Title your post..."}
            />
        </div>
    )
};

export default TitleContainer;