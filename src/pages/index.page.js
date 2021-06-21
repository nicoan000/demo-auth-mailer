import { css } from '@emotion/css';
import nc from 'next-connect';
import { withIronSession } from 'next-iron-session';
import LoginForm from '../components/LoginForm/LoginForm';
import AppWrapper from '../components/AppWrapper/AppWrapper';
import { useRouter } from "next/router";
import ironSessionConfig from '../utils/config/ironSessionConfig';
import GenericDropdown from '../components/GenericDropdown/GenericDropdown';

const style_IndexPage = css`
    min-height: 100vh;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
`;

const test_state = [
    {
        question_title: "Which ",
    }
]

const Index = ({user}) => {
    return (
        <AppWrapper>
            <div className={style_IndexPage}>
                <div>Hello</div>
                <GenericDropdown />
            </div>
        </AppWrapper>
    )
}

export const getServerSideProps = withIronSession(
    async ({ req, res }) => {
        const user = req.session.get("user");

        if (user) {
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
        ...ironSessionConfig
    }
);

export default Index;