import React from "react";
import Link from 'next/link';
import { withIronSession } from "next-iron-session";
import ironSessionConfig from '../utils/ironSessionConfig';

const ProfilePage = ({ user }) => (
    <div>
        <h1>Hello {user.email}</h1>
        <p>Secret things live here...</p>
        <Link href="/logout"><a>Logout</a></Link>
    </div>
);

export const getServerSideProps = withIronSession(
    async ({ req, res }) => {
        const user = req.session.get("user");

        if (!user) {
            console.log('user not logged in; redirecting to /login');
            res.writeHead(307, { Location: '/login' });
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