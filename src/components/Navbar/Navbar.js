import { useState, useRef, useEffect } from 'react'
import style from './style.Navbar'
import Link from 'next/link'
import useOutsideAlerter from '@utils/hooks/useOutsideAlerter'
import cn from '@utils/constructClassName'
import { Divide as Hamburger } from 'hamburger-react'
import AccountModal from '@components/AccountModal/AccountModal'
import useFadeInAnimation from '@utils/useFadeInAnimation'
import { animated } from 'react-spring'

const Navbar = () => {
    const [showAccountModal, setShowAccountModal] = useState({ shown: true })
    const website_title = 'TicketMaker'
    const navbar_links = [
        { href: '/post', label: 'Create Post' },
        { href: '/find', label: 'Find' },
        { href: '/account', label: 'Account' },
    ]

    const [navbarOpen, setNavbarOpen] = useState({ open: false })

    const mobileNavRef = useRef(null)
    const accountModalRef = useRef(null)
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                mobileNavRef.current &&
                !mobileNavRef.current.contains(e.target)
            ) {
                if (window.innerWidth <= 900) {
                    setNavbarOpen({ open: false })
                }
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [mobileNavRef])

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                accountModalRef.current &&
                !accountModalRef.current.contains(e.target)
            ) {
                setShowAccountModal({ shown: false })
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [accountModalRef])

    useEffect(() => {
        console.log(navbarOpen)
    }, [navbarOpen])

    const anim = useFadeInAnimation()

    return (
        <div className={style}>
            <div className="subbar left_bar">
                <div className="navitem">
                    <Link href="/">
                        <a>{website_title}</a>
                    </Link>
                </div>
            </div>
            <div
                className={cn([
                    'subbar',
                    'right_bar',
                    'mobilemenu',
                    !navbarOpen.open ? 'hidden' : '',
                ])}
                ref={mobileNavRef}
            >
                {navbar_links.map(({ href, label }, i) => (
                    <div className="navitem" key={i}>
                        <Link href={href}>
                            <a>{label}</a>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="hamburger_btn_container">
                <Hamburger
                    toggled={navbarOpen.open}
                    toggle={setNavbarOpen}
                    easing="ease-in"
                    size={25}
                    color={'#add8e6'}
                />
            </div>
            <div
                className={cn([
                    'mobile_navmenu_background',
                    !navbarOpen.open ? 'hidden' : '',
                ])}
            ></div>
            <AccountModal shown={showAccountModal.shown} ref={accountModalRef}/>
        </div>
    )
}

export default Navbar
