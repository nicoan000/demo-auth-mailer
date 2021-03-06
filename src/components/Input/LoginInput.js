import { useContext } from 'react';
import style from './style.LoginInput';
import AppContext from '../../context/context';

const Input = ({description, field, placeholder, hideContent}) => {
    const { loginInfo, setLoginInfo } = useContext(AppContext);

    return (
        <div className={style}>
            <div className="description">{description}</div>
            <input 
                value={field.toLowerCase().includes("password") ? 
                    "*".repeat(loginInfo[field].length) :
                    loginInfo[field]
                }
                type={field}
                onChange={e => setLoginInfo({...loginInfo, [field]: e.target.value})}
                placeholder={placeholder}
            />
        </div>
    )
};

export default Input;