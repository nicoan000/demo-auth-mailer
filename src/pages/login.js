import React from "react";
import { css } from '@emotion/css';
import LoginForm from '../components/LoginForm/LoginForm';
import AppWrapper from '../components/AppWrapper/AppWrapper';

const style_LogInPage = css`
    min-height: 100vh;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SignInPage = () => {
    return (
        <AppWrapper>
            <div className={style_LogInPage}>
                <LoginForm 
                    type="login"
                />
            </div>
        </AppWrapper>
    );
};

export default SignInPage;