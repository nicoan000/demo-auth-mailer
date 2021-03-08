const validateForm = ({password, repeatPassword, username, email}) => {
    let response = [];

    if (password != repeatPassword) {
        response.push({
            error: true,
            msg: "Passwords don't match.",
            color: "red"
        })
    };

    // if (password.length < 6 || password.length > 20) {
    //     response.push({
    //         error: true,
    //         msg: "Password length must be between 6 and 20 characters",
    //         color: "red"
    //     })
    // };

    // const emailAtIndex = email.indexOf('@');
    // if (
    //     email.length > 25 ||
    //     email.slice(0, emailAtIndex).length <= 3 ||
    //     email.slice(emailAtIndex, email.indexOf('.'))
    // ) {
    //     response.push({
    //         error: true,
    //         msg: "E-Mail length must be valid and at most 25 characters.",
    //         color: "red"
    //     })
    // }

    // if (username.length > 15) {
    //     response.push({
    //         error: true,
    //         msg: "Username length must be at most 15 characters.",
    //         color: "red"
    //     })
    // }

    // if (!email.endsWith('com') && !email.endsWith('net') && !email.endsWith('org') ) {
    //     response.push({
    //         error: true,
    //         msg: `E-Mail must end with ".com", ".net", or ".org".`,
    //         color: "red"
    //     })
    // }

    if (response.length == 0) {
        return [
            {
                error: false,
                msg: "Passed all validation.",
                color: "green"
            }
        ]
    } else {
        return response;
    }
}

export default validateForm;