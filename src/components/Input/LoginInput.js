import { useContext } from 'react';
import style from './style.LoginInput';
import {AppContext} from '@components/AppWrapper/AppWrapper';

const Input = ({description, field, placeholder, hideContent}) => {
    const { loginInfo, setLoginInfo } = useContext(AppContext);

    return (
        <div className={style}>
            <div className="description">{description}</div>
            <input 
                value={loginInfo[field]}
                type={field == "repeatPassword" ? "password" : field}
                onChange={e => setLoginInfo({...loginInfo, [field]: e.target.value})}
                placeholder={placeholder}
            />
        </div>
    )
};

export default Input;