import { withIronSession } from 'next-iron-session';
import pool from '../../utils/db/main';
import { encrypt, validate } from '../../utils/encryption';
import createUserTable from '../../utils/db/createUserTable';
import addUser from '../../utils/db/addUser';
import findUser from '../../utils/db/findUser';
import ironSessionConfig from '../../utils/ironSessionConfig';

// export default async (req, res) => {
//     try {
//         if (process.env.NODE_ENV == "development") {
//             await createUserTable();
//         }

//         const username = 'ox94';
//         const pass = 'password9494';
//         const email = 'ox949494@gmail.com';
//         const encrypted = encrypt(pass);

//         let fetchedUser = await findUser(username);
//         let user;
//         let passwordMatches;

//         if (fetchedUser.rows.length == 0) {
//             console.log('username invalid');
//         } else {
//             user = fetchedUser.rows[0];

//             if (validate(pass, user.pass_hash, user.pass_salt)) {
//                 passwordMatches = true;
//             } else {
//                 passwordMatches = false;
//             }
//         }

//         if (passwordMatches && user) {
//             res.status(200).send({
//                 username: user.username,
//                 email: user.email,
//                 role: user.role
//             });
//         } else {
//             console.log('password invalid');
//             res.status(401).send({
//                 error: true,
//                 error_msg: "User info is incorrect."
//             })
//         }
//     }
//     catch (e) {
//         console.log(e);
//         res.status(400).send({
//             error: true,
//             error_msg: "Uncaught error."
//         })
//     }
// };

export default withIronSession(
    async (req, res) => {
        console.log("/api/login.js", req.body);
        if (req.method === "POST") {
            if (process.env.NODE_ENV == "development") {
                await createUserTable();
            };

            const { password, usernameOrEmail } = req.body;
            const isEmail = usernameOrEmail.includes('@');
            let user;
            let passwordMatches;

            let fetchedUser = await findUser({
                [isEmail ? "email" : "username"]: usernameOrEmail
            });

            if (fetchedUser.rows.length == 0) {
                console.log('username invalid');
            } else {
                user = fetchedUser.rows[0];

                console.log(validate(password, user.pass_hash, user.pass_salt));

                if (validate(password, user.pass_hash, user.pass_salt)) {
                    passwordMatches = true;
                } else {
                    passwordMatches = false;
                }
            };
            
            if (passwordMatches && user) {
                req.session.set("user", {
                    id: user.id,
                    username: user.username,
                    email: user.email
                });
                await req.session.save();
                return res.status(201).send("");
            } else {
                console.log('password invalid');
                res.status(401).send({
                    error: true,
                    error_msg: "User info is incorrect."
                })
            }

            return res.status(403).send("");
        }

        return res.status(404).send("");
    },
    {
        ...ironSessionConfig
    }
);