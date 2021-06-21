import { css } from '@emotion/css'

const style_Navbar = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 60%;
    padding: 2rem 20%;
    font-size: 2rem;
    margin-bottom: 2rem;
    background: linear-gradient(
        to bottom,
        hsl(0, 0%, 10.5%, 100%),
        hsl(0, 0%, 10.5%, 5%)
    );
    align-items: center;
    position: relative;

    @media screen and (max-width: 1400px) {
        width: 80%;
        padding: 2rem 10%;
    }

    @media screen and (max-width: 900px) {
        width: 100%;
        padding: 2rem 0;
        justify-content: center;
    }

    & .subbar {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }

    & .left_bar {
        font-size: 3rem;
    }

    & .right_bar {
        @media screen and (max-width: 900px) {
            position: fixed;
            flex-direction: column;
            padding-top: 5rem;
            top: 0;
            left: 0;
            gap: 3rem;
            height: 100%;
            background: linear-gradient(
                to top right,
                hsl(0, 0%, 8%),
                hsl(0, 0%, 13%)
            );
            transform: translateX(0);
            transition: 0.5s;
            z-index: 4;
        }

        &.hidden {
            @media screen and (max-width: 900px) {
                transform: translateX(-100%);
            }
        }

        & .navitem {
            @media screen and (max-width: 900px) {
                padding: 0 3rem 0 5rem;
                border-right: 3px solid hsl(197.2, 95.6%, 17.8%);
                margin: 0;
                text-align: right;
            }
        }
    }

    & a {
        transition: 0.2s;
        &:hover {
            color: lightblue;
        }
    }

    & .navitem {
        position: relative;
        margin-left: 4rem;
        margin-right: 4rem;
        &:before,
        &:after {
            content: '';
            position: absolute;
            bottom: -10px;
            width: 0px;
            height: 1px;
            margin: 5px 0 0;
            transition: all 0.2s ease-out;
            opacity: 0;
            background-color: lightblue;
        }

        &:before {
            left: 50%;
        }
        &:after {
            right: 50%;
        }

        &:hover {
            cursor: pointer;
            &:before,
            &:after {
                width: 50%;
                opacity: 1;
            }
        }
    }

    & .hamburger_btn_container {
        position: absolute;
        left: 3rem;
        @media screen and (min-width: 900px) {
            display: none;
        }
    }

    & .mobile_navmenu_background {
        display: none;
        @media screen and (max-width: 900px) {
            content: '';
            position: fixed;
            background: rgba(10, 10, 10, 0.6);
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 2;
            pointer-events: none;
            opacity: 1;
            visibility: visible;
            transition: 0.3s;
        }

        &.hidden {
            @media screen and (max-width: 900px) {
                visible: hidden;
                opacity: 0;
            }
        }
    }
`

export default style_Navbar
