import Head from 'next/head'
import Image from 'next/image'
//import { Inter } from '@next/font/google'
import { signIn, signOut } from "next-auth/react"
import cogoToast from 'cogo-toast'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSession } from 'next-auth/react'

import Slider from '../components/inc/Slider'
import TopChart from '../components/inc/TopChart'
import Tracks from '../components/user/Tracks'
import Playlist from '../components/user/Playlist'
import Player from '../components/inc/Player'


//const inter = Inter({ subsets: ['latin'] })

export default function Login() {

    const { data:session, status } = useSession()
    const router = useRouter()

    const [ mainState, setMainState ] = useState({
        code: '',
        pno: '',
        password: '',
    });


    const onChange = (e) => {  
        console.log(e.target.name, e.target.value)
        if (e.target.name === 'pno' || e.target.name === 'code') {
            if((e.target.value[e.target.value.length-1]>='0' && e.target.value[e.target.value.length-1]<='9') || !e.target.value) {      
                setMainState(prev => ({...prev, [e.target.name]: e.target.value}))        
            } else cogoToast('invalid data')
        } else {
            setMainState(prev => ({...prev, [e.target.name]: e.target.value}))
        }      
    }



    const handleLogin = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (!mainState.code || !mainState.pno || !mainState.password || mainState.code === 'choose') {
            cogoToast.error('Oops! All field required')
            return
        }

        const result = await signIn("credentials", {
            phone: `${mainState.code}${mainState.pno}`, password: mainState.password, callbackUrl: `${window.location.origin}/dashboard`, redirect: false
        })
        
        if (result.error !== null) {
            if (result.status === 401) {
                return cogoToast.error("Your username/password combination was incorrect. Please try again")
            }
            else {
                return cogoToast.error(result.error)
            }

        } else {
            cogoToast.success('Success!')
            return router.push(result.url)
        }
    }


  return (
    <>
        <div className="row">
            <div className="col-xl-5 col-lg-7 col-md-9 col-sm-11 mx-auto">
                <div className="card">
                    <div className="card-body p-sm-5">
                        <h4>Login to <span className="text-primary">Beyamusic</span></h4>
                        <p className="fs-6">Welcome back! login with your data that you entered during registration</p>
                        <form onSubmit={handleLogin} className="mt-5">
                            <div className="mb-3">
                                <div className="row">
                                    <label htmlFor="email" className="form-label fw-medium">Phone Number</label>
                                    <div className="col-5">
                                        <select name="code" id="code" className="form-select" 
                                          value={mainState.code} 
                                          onChange={(e) => onChange(e)}>
                                            <option>choose</option>
                                            <option value="234">+ 243</option>
                                            <option value="1">+ 1</option>
                                        </select>
                                    </div>
                                    <div className="col-7">
                                        <input name="pno" type="number" id="pno" className="form-control" value={mainState.pno} onChange={(e) => onChange(e)} />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="password" className="form-label fw-medium">Password</label>
                                <input type="password" id="password" name='password' className="form-control" onChange={(e) => onChange(e)} minLength={6} required />                            </div>
                            <div className="mb-4 text-end">
                                <a href="#" className="link-primary fw-medium">Forgot Password?</a>
                            </div>
                            <div className="mb-5">
                                <input type="submit" className="btn btn-primary w-100" value={"Login"} />
                            </div>
                            <p>Not registered yet? <br /><a href="/register" className="fw-medium external">Register</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
