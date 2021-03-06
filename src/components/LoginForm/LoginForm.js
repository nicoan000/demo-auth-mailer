import { useContext } from 'react';
import AppContext from '../../context/context';
import style from './style.LoginForm';
import LoginInput from '../Input/LoginInput';
import GenericButton from '../GenericButton/GenericButton';
import validateForm from '../../utils/validateForm';

const LoginForm = () => {
    const { loginInfo,
        notification, setNotification
    } = useContext(AppContext);

    const submit = async e => {
        try {
            e.preventDefault();
            console.log('happening');
            // const {password, repeatPassword, username, email} = loginInfo;
            const test = await validateForm(loginInfo);
            console.log('passed', test);
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <form className={style} onSubmit={e => submit(e)}>
            <LoginInput
                description="username"
                field="username"
                placeholder="Awesome_Person123"
            />
            <LoginInput
                description="Password"
                field="password"
                placeholder="notPassword123"
            />
            <LoginInput
                description="Repeat Password"
                field="repeatPassword"
                placeholder="notPassword123"
            />
            <LoginInput
                description="e-mail"
                field="email"
                placeholder="someone@somewhere.com"
            />
            <GenericButton label="Sign-Up" type="submit" />
            <a>Click here to sign in instead</a>
        </form>
    )
};

export default LoginForm;