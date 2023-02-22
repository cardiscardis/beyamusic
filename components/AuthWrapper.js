import * as React from "react";
import {useSession} from "next-auth/react";
import Link from 'next/link'
import {useRouter} from "next/router";
import cogoToast from "cogo-toast";

export default function Wrapper({ children })
{
    const [ renderChildren, setRenderChildren ] = React.useState(false)
    const { data: session, status } = useSession();
    const router = useRouter();

    console.log(session.user)

    React.useEffect(() => {

        
        if ((status === "authenticated" && Object.keys(session?.user).length > 0) || router.pathname === '/register' ||
            router.pathname === '/login')
        {
            setRenderChildren(true)
        }
        if (status === 'unauthenticated') {
            cogoToast.error('You are not logged in')
            router.push('/login')
        }
        if ( status === 'authenticated' && Object.keys(session?.user).length < 1) {

            cogoToast.error('There is an error logging you in. Please contact admin if you are having a problem logging in...')
            return router.push('/register')
        }
    }, [ status, router.route ])

    if (renderChildren) {
        return (
            <>{children}</>
        )
    }

    return(
        <>
            <h1>Loading...Please wait...</h1>
        </>
    )

}