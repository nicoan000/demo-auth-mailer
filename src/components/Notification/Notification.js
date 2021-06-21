// import style from './style.Notification';
import { css } from '@emotion/css'
import { fontSizes, colors } from '@data/style.variables'
import { animated, useSpring } from 'react-spring'
import { useEffect } from 'react'

const style = css`
    font-size: 2rem;
    position: absolute;
    background-color: ${colors.background_components_lighter_2};
    width: 400px;
    height: auto;
    border-radius: 4px;
    border: 0.5rem solid ${colors.background_components_lighter};
    box-shadow: inset 0px 0px 4px 2px black, 0px 0px 4px 2px black;
    right: 3%;
    top: 7%;
    display: flex;
    flex-direction: column;
    transition: 0.3s;
    visibility: hidden;
    opacity: 0;

    &.shown {
        opacity: 1;
        visibility: visible;
    }

    & .msg {
        margin: 1rem;
    }

    & .progress_bar {
        height: 3px;
        background-color: rgba(125,0,0);
    }
`

const Notification = ({ msg, shown }) => {
    const [{ width }, api] = useSpring(
        { width: '0%', config: { duration: 3000 } },
        []
    )

    useEffect(() => {
        if (shown) {
            api.start({ from: '0%', to: '100%' })
        }
    }, [shown])

    return (
        <div className={`${style} red ${shown ? 'shown' : 'hidden'}`}>
            <div className="msg">{msg}</div>
            <animated.div
                className="progress_bar"
                style={{ width }}
            ></animated.div>
        </div>
    )
}

export default Notification
