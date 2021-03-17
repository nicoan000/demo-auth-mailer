// import createUserTable from '../utils/db/createUserTable';
import loadTestEnv from '../../utils/config/loadTestEnv';
loadTestEnv();

test('should create the database and then drop it', () => {
    // expect(validateForm({ password: "password123", repeatPassword: "password123" })).toStrictEqual([
    //     {
    //         error: false,
    //         msg: "Passed all validation.",
    //         color: "green"
    //     }
    // ]);
    console.log(process.env.PGUSER);
});

// test('doesnt repeat', () => {
//     expect(validateForm({ password: "password123", repeatPassword: "password12" })).toStrictEqual([
//         {
//             error: true,
//             msg: "Passwords don't match.",
//             color: "red"
//         }
//     ]);
// });