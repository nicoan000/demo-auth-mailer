import React, {useEffect} from 'react'
import styles from './AccountModal.module.css'
import useFadeInAnimation from '@utils/useFadeInAnimation'
import { animated, useSpring } from 'react-spring'

const AccountModal = React.forwardRef(({ shown }, ref) => {
    const [{ opacity, visibility }, api] = useSpring(
        { opacity: 0, visibility: "hidden", config: {duration: 500} },
        []
    )

    useEffect(() => {
        if (shown)
        api.start({
            // opacity: shown ? 1 : 0,
            // visibility: shown ? "visible" : "hidden"
            opacity: 1,
            visibility: "visible"
        })
        if (!shown) {
            api.start({
                opacity: 0,
                visible: "hidden"
            })
        }
        // if (shown) {
        //     opacity.start({ from: 0, to: 1 })
        //     visibility.start({ from: "hidden", to: "visible" })
        // }
    }, [shown])

    return (
        <animated.div style={{opacity, visibility}} ref={ref}>
            <div className={styles.wrapper}></div>
        </animated.div>
    )
})

export default AccountModal
