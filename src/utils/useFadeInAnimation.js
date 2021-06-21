import { useSpring } from 'react-spring'

export default ({ initialY, delay } = {}) => {
    return useSpring({
        from: {
            opacity: 0,
            translateY: initialY || '-5%',
        },
        to: {
            opacity: 1,
            translateY: '0%',
        },
        config: {
            friction: 100,
        },
        delay: delay || 1000,
    })
}
