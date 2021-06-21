import React from "react";
import { css } from '@emotion/css';
import LoginForm from '../components/LoginForm/LoginForm';
import AppWrapper from '../components/AppWrapper/AppWrapper';
import { withIronSession } from "next-iron-session";
import ironSessionConfig from '../utils/config/ironSessionConfig';

const style_LogInPage = css`
    min-height: 100vh;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

const LogInPage = () => {
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

export const getServerSideProps = withIronSession(
    async ({ req, res }) => {
        const user = req.session.get("user");

        if (user) {
            console.log('user already logged in; redirecting to /profile');
            res.writeHead(307, { Location: '/profile' });
            res.end();
            return { props: { user } };
        }

        return {
            props: { }
        };
    },
    {
        ...ironSessionConfig
    }
);


export default LogInPage;