import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { css } from '@emotion/css';
import Context from '../context/context';
import LoginForm from '../components/LoginForm/LoginForm';
import Notification from '../components/Notification/Notification';
import nc from 'next-connect';

const style_IndexPage = css`
    min-height: 100vh;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Index = ({ data }) => {
    const [loginInfo, setLoginInfo] = useState({
        username: "",
        password: "",
        repeatPassword: "",
        email: ""
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
    }, [notification])

    return (
        <Context.Provider value={{
            loginInfo, setLoginInfo,
            notification, setNotification
        }}>
            <Notification msg={notification.msg} shown={notification.shown} />
            <div className={style_IndexPage}>
                <LoginForm />
            </div>
        </Context.Provider>
    )
}

export const getServerSideProps = async () => {
    // const test = await axios.get('http://localhost:3000/api/getUsers')

    try {
        return {
            props: {
                test: true
            }
        }
    }
    catch (e) {
        console.log(e);
        return {
            props: {
                error: "Unhandled error."
            }
        }
    }
};

export default Index;