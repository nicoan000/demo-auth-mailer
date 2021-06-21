import { useEffect, useRef, useState } from 'react'
import RINGS from 'vanta/dist/vanta.rings.min'
import * as THREE from 'three'
import { css } from '@emotion/css'
import { AiOutlineGithub } from 'react-icons/ai'
import AnimatedInput from '@components/AnimatedInput/AnimatedInput'
import AnimatedButton from '@components/AnimatedButton/AnimatedButton'
import { animated } from 'react-spring'
import useFadeInAnimation from '@utils/useFadeInAnimation'
import Head from 'next/head';

const style = css`
    min-height: 100vh;
    height: 100%;
    width: 100%;

    & .main {
        height: 100%;
        width: 100%;
        min-height: 100vh;

        & canvas {
            height: 100%;
        }
    }

    & .background_container {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(12, 12, 12, 0.3);
        z-index: 2;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    & .access_container {
        width: 600px;
        background-color: rgba(12, 12, 12, 0.9);
        box-shadow: 0px 0px 6px 4px rgba(15, 15, 15, 0.4);
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;

        & h1 {
            font-size: 3rem;
            letter-spacing: 4px;
            margin: 0;
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
            width: 100%;
            border-bottom: 1px solid rgba(94, 94, 94, 0.5);
            text-align: center;
            padding-bottom: 1rem;
            font-family: 'Montserrat', sans-serif;
        }

        & .text-field {
            font-size: 1.6rem;
            display: flex;
            align-items: center;
            letter-spacing: 1px;
            text-align: center;

            &.spacetop {
                margin-top: 2rem;
            }
            &.spacetop_2 {
                margin-top: 3.5rem;
            }
            &.spacebottom {
                margin-bottom: 0.5rem;
            }
            &.small {
                font-size: 1.1rem;
            }

            &.widespacing {
                letter-spacing: 2px;
            }

            &.italic {
                font-style: italic;
            }
        }

        & .link_icon {
            font-size: 3rem;
            transition: 0.3s;
            justify-self: flex-end;
            margin-top: 4rem;

            &:hover {
                color: lightblue;
            }
        }

        & form {
            display: flex;
            align-items: center;
            flex-direction: column;

            & .submit_btn_container {
                margin-top: 3rem;
                width: 200px;
                display: flex;
                align-items: center;
                text-align: center;
                justify-content: center;
            }
        }
    }

    .gray {
        color: gray;
    }

    .small {
        font-size: 0.8em;
    }
`

const LandingPage = () => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const vantaRef = useRef(null)

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                RINGS({
                    el: vantaRef.current,
                    THREE,
                    backgroundColor: 0x202022,
                    color: 0x235459,
                })
            )
        }

        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    const anim = useFadeInAnimation()

    return (
        <div className={style}>
            <main className="main" ref={vantaRef}>
                <div className="background_container">
                    <animated.div className="access_container" style={anim}>
                        <h1>TicketMaker</h1>
                        <form>
                            <AnimatedInput
                                placeholder={'Access token'}
                                tag={'access_token'}
                            />
                            <div className="text-field gray spacetop">-or-</div>
                            <AnimatedInput
                                placeholder={'E-Mail'}
                                tag={'e-mail'}
                            />
                            <AnimatedInput
                                placeholder={'Reason for requesting access'}
                                tag={'request_access_reason'}
                            />
                            <div className="text-field spacebottom spacetop_2 widespacing italic">
                                What is this?
                            </div>
                            <div className="text-field small">
                                This site is purely meant as a demo, so access
                                is limited to conserve hosting costs.
                            </div>
                            <div className="text-field small">
                                Request to get an access token if you don't
                                already have one.
                            </div>
                            <div className="text-field small spacebottom">
                                If you're a recruiter, I provided an access
                                token on my resume.
                            </div>
                            <div className="text-field small">
                                Thank you for visiting.
                            </div>
                            <div className="submit_btn_container">
                                <AnimatedButton />
                            </div>
                        </form>
                        <div className="link_icon">
                            <a
                                href="https://github.com/nicoan000/ticket-maker"
                                target="_tab"
                            >
                                <AiOutlineGithub />
                            </a>
                        </div>
                    </animated.div>
                </div>
            </main>
        </div>
    )
}

export default LandingPage

// setVantaEffect(TOPOLOGY({
//     el: vantaRef.current,
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: false,
//     scale: 1.00,
//     scaleMobile: 1.00,
//     THREE,
//     color: 0x14b679,
//     backgroundColor: 0x2222,
//     maxDistance: 34.0,
//     minHeight: 1000,
//     color: 0x90adc0
// }))

// <Head>
// <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r127/three.min.js" integrity="sha512-U4J4PbEJ2TMjFqPUSiKq7LLTHuEkPZVo0jl2fomi9pT7UAExh4xVi8KmoR7EfmyigH95aA68zpW7y3XzuoSurQ==" crossorigin="anonymous"></script> */}
// {/* <script src="/static/scripts/vanta.net.min.js" />
// </Head>


// <Head>
// <script
//     src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r119/three.min.js"
//     id="threeScript"
// />
// </Head>