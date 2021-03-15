import { css } from '@emotion/css';
import nc from 'next-connect';
import { withIronSession} from 'next-iron-session';
import LoginForm from '../components/LoginForm/LoginForm';
import AppWrapper from '../components/AppWrapper/AppWrapper';
import { useRouter } from "next/router";

const style_IndexPage = css`
    min-height: 100vh;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Index = ({ data }) => {
    return (
        <AppWrapper>
            <div className={style_IndexPage}>
                <LoginForm 
                    type="signup"
                />
            </div>
        </AppWrapper>
    )
}

export const getServerSideProps = withIronSession(async ({ req, res }) => {
    const user = req.session.get("user");

        if (user) {
            console.log('user logged in; redirecting to /profile');
            res.writeHead(307, { Location: '/profile' });
            res.end();
            return {
                props: { user }
            };
        }

        return {
            props: {
                user: null
            }
        }
    },
    {
        cookieName: "USER",
        cookieOptions: {
            secure: process.env.NODE_ENV === "production" ? true : false
        },
        password: process.env.IRON_SESSION_SECRET
    }
);

export default Index;