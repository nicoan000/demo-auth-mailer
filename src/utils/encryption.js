import crypto from 'crypto';

export const encrypt = (str) => {
    // Generate random salt
    let length = 20;
    let salt = crypto.randomBytes(Math.ceil(length / 2))
        .toString('hex')
        .slice(0, length);

    // SHA512 at work
    let hash = crypto.createHmac('sha512', salt);
    hash.update(str);
    return {
        salt: salt,
        hash: hash.digest('hex')
    };
};

export const validate = (userpass, hashedpass, salt) => {
    let hash = crypto.createHmac('sha512', salt);
    hash.update(userpass);
    userpass = hash.digest('hex');
    return userpass == hashedpass;
};