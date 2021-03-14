import { withIronSession } from 'next-iron-session';
import pool from '../../utils/db/main';
import { encrypt, validate } from '../../utils/encryption';
import createUserTable from '../../utils/db/createUserTable';
import addUser from '../../utils/db/addUser';
import findUser from '../../utils/db/findUser';

export default async (req, res) => {
    try {
        if (process.env.NODE_ENV == "development") {
            await createUserTable();
        }

        // const user = await addUser({
        //     username: temp_user, 
        //     pass_hash: encrypted.hash, 
        //     pass_salt: encrypted.salt, 
        //     email: email, 
        //     role: "user"
        // });

        let fetchedUser = await findUser(username);
        let user;
        let passwordMatches;

        if (fetchedUser.rows.length == 0) {
            console.log('username invalid');
        } else {
            user = fetchedUser.rows[0];
        }

        if (validate(pass, user.pass_hash, user.pass_salt)) {
            passwordMatches = true;
        } else {
            passwordMatches = false;
        }

        if (passwordMatches && user) {
            res.status(200).send(user);
        } else {

        }
    }
    catch (e) {
        console.log(e);
        res.status(400).send({
            error: true,
            error_msg: "Uncaught error."
        })
    }
};

