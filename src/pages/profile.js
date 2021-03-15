import React from "react";
import { withIronSession } from "next-iron-session";
import ironSessionConfig from '../../utils/ironSessionConfig';

const ProfilePage = ({ user }) => (
    <div>
        <h1>Hello {user.email}</h1>
        <p>Secret things live here...</p>
    </div>
);

export const getServerSideProps = withIronSession(async ({ req, res }) => {
    const user = req.session.get("user");

        if (!user) {
            res.statusCode = 404;
            console.log('no user', user);
            res.end();
            return { props: {} };
        }

        return {
            props: { user }
        };
    },
    {
        ...ironSessionConfig
    }
);

export default ProfilePage;