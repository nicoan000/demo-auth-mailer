import React, { useEffect, useState } from 'react';
import Notification from '../Notification/Notification';


export const AppContext = React.createContext();

const AppWrapper = props => {
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
                setNotification(prevState => ({ ...prevState, shown: false }));
            }, 3000)
        }
    }, [notification]);

    return (
        <AppContext.Provider value={{
            loginInfo, setLoginInfo,
            notification, setNotification
        }}>
            <Notification msg={notification.msg} shown={notification.shown} />
            {props.children}
        </AppContext.Provider>
    )
};

export default AppWrapper;