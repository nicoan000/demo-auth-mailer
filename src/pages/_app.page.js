import '../data/globals.css'
import AppWrapper from '@components/AppWrapper/AppWrapper'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
    const route = useRouter()
    if (route.route === '/vanta') return <Component {...pageProps} />
    
    else
        return (
            <AppWrapper>
                <Component {...pageProps} />
            </AppWrapper>
        )
}

export default MyApp

// useEffect(() => {
//     const threeScript = document.createElement('script')
//     threeScript.setAttribute('id', 'threeScript')
//     threeScript.setAttribute(
//         'src',
//         'https://cdnjs.cloudflare.com/ajax/libs/three.js/r119/three.min.js'
//     )
//     document.getElementsByTagName('head')[0].appendChild(threeScript)
//     return () => {
//         if (threeScript) {
//             threeScript.remove()
//         }
//     }
// }, [])
