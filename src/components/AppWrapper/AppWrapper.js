import React, { useEffect, useState } from 'react';
import Context from '../../utils/context';
import Notification from '../Notification/Notification';

const AppWrapper = (props) => {
    const [loginInfo, setLoginInfo] = useState({
        username: "",
        password: "",
        repeatPassword: "",
        email: "",
        usernameOrEmail: ""
    });

    const [notification, setNotification] = useState({
        shown: false,
        msg: ""
    });

    useEffect(() => {
        if (notification.shown) {
            setTimeout(() => {
                setNotification({ ...notification, shown: false });
            }, 3000)
        }
    }, [notification]);

    return (
        <Context.Provider value={{
            loginInfo, setLoginInfo,
            notification, setNotification
        }}>
            <Notification msg={notification.msg} shown={notification.shown} />
            {props.children}
        </Context.Provider>
    )
};

export default AppWrapper;