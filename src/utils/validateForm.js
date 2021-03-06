

const validateForm = ({password, repeatPassword, username, email}) => {
    let response = [];

    if (password != repeatPassword) {
        response.push({
            error: true,
            msg: "Passwords don't match.",
            color: "red"
        })
    };

    if (password.length < 6) {
        response.push({
            error: true,
            msg: "Password length must be at least 6 characters.",
            color: "red"
        })
    };

    if (password.length > 20) {
        response.push({
            error: true,
            msg: "Password length must be at most 20 characters.",
            color: "red"
        })
    }

    if (email.length > 25) {
        response.push({
            error: true,
            msg: "E-Mail length must be at most 25 characters.",
            color: "red"
        })
    }

    if (username.length > 15) {
        response.push({
            error: true,
            msg: "Username length must be at most 15 characters.",
            color: "red"
        })
    }
}

export default validateForm;