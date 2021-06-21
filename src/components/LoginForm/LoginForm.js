import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import {AppContext} from '@components/AppWrapper/AppWrapper';
import validateForm from '@utils/validateForm';
import LoginInput from '@components/Input/LoginInput';
import GenericButton from '@components/GenericButton/GenericButton';
import style from './style.LoginForm';


const LoginForm = ({ type, submitFunc }) => {
    const { loginInfo, notification, setNotification } = useContext(AppContext);

    const router = useRouter();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const { username, password, repeatPassword, email, usernameOrEmail } = loginInfo;
            // const email = "chris@decimal.fm";
            // const password = "opensesame";

            if (type == "login") {
                const response = await fetch("/api/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username, password, repeatPassword, email, usernameOrEmail })
                });

                if (response.ok) {
                    return router.push("/profile");
                }
            }
        }
        catch (e) {
            console.log(e);
        }
    };

    return (
        <form
            className={style}
            onSubmit={submitFunc || (e => handleSubmit(e))}
        >
            {type == "login" &&
                <LoginInput
                    description="username -Or- Email"
                    field="usernameOrEmail"
                    placeholder="Input your username or email..."
                />
            }
            {type == "signup" &&
                <LoginInput
                    description="username"
                    field="username"
                    placeholder="Input your username..."
                />
            }
            <LoginInput
                description="Password"
                field="password"
                placeholder="Input your password..."
            />
            {type == "signup" &&
                <LoginInput
                    description="Repeat Password"
                    field="repeatPassword"
                    placeholder="Repeat your password..."
                />
            }
            {type == "signup" &&
                <LoginInput
                    description="e-mail"
                    field="email"
                    placeholder="Input your email..."
                />
            }
            <GenericButton
                label={type == "signup" ? "Sign-Up" : "Log In"}
                type="submit"
            />
            <Link 
                href={type == "signup" ? "/login" : "/"}
            >
                {type == "signup" 
                    ? <a>Click here to sign in instead</a>
                    : <a>Click here to register instead</a>
                }
            </Link>
            <div className="description">
                
            </div>
        </form>
    )
};

export default LoginForm;