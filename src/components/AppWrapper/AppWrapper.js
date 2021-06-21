import React, { useEffect, useState } from 'react';
import Notification from '../Notification/Notification';
import Navbar from '@components/Navbar/Navbar';
import AccountModal from '@components/AccountModal/AccountModal';
import { css } from '@emotion/css';


export const AppContext = React.createContext();

const style = css`
    height: 100%;
    min-height: 100vh;
`;

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
        <AppContext.Provider
            value={{
                loginInfo, setLoginInfo,
                notification, setNotification
            }}
        >
            <div className={style}>
                <Navbar />
                <Notification msg={notification.msg} shown={notification.shown} />
                {props.children}
            </div>
        </AppContext.Provider>
    )
};

export default AppWrapper;