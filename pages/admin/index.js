import { Inter } from '@next/font/google'
import {useRouter} from 'next/router';
import AdminCredit from '../../components/admin/credit';
import AdminHome from '../../components/admin/home';
import AdminSongs from '../../components/admin/songs';
import AdminSongDetails from '../../components/admin/song_details';
import AdminUsers from '../../components/admin/users';
import AdminUserDetails from '../../components/admin/user_details';

const inter = Inter({ subsets: ['latin'] })

export default function AdminDash() {
const router = useRouter()
const pathname  = router.pathname
const { query } = router;

const checkSubPage = (name) => {
    if(name == 'home')
        return (
            <>
                <AdminHome />
            </>
        )
    else if(name == 'users')
        return (
            <>
                <AdminUsers />
            </>
        )
    else if(name == 'songs')
    return (
        <>
            <AdminSongs />
        </>
    )
    else if(name == 'payments')
        return (
            <>
                <h1>Payments</h1>
            </>
        )
    else if(name == 'countries')
        return (
            <>
                <h1>Countries</h1>
            </>
        )
    else if(name == 'ads')
        return (
            <>
                <h1>Ads</h1>
            </>
        )
    else if(name == 'user_details')
        return (
            <>
                <AdminUserDetails />
            </>
        )
    else if(name == 'song_details')
        return (
            <>
                <AdminSongDetails />
            </>
        )
    else if(name == 'credit')
        return (
            <>
                <AdminCredit />
            </>
        )
}
  return (
    <>
        {checkSubPage(query.name)}
    </>
  )
}
