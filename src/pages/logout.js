import React from "react";
import { withIronSession } from "next-iron-session";
import ironSessionConfig from '../utils/config/ironSessionConfig';

const ProfilePage = ({ user }) => (
    <div>
        If this page doesn't automatically redirect you something went wrong.
    </div>
);

export const getServerSideProps = withIronSession(
    async ({ req, res }) => {
        req.session.destroy();
        console.log('user logged out; redirecting to /login');
        res.writeHead(307, { Location: '/login' });
        res.end();

        return {
            props: { }
        };
    },
    {
        ...ironSessionConfig
    }
);

export default ProfilePage;