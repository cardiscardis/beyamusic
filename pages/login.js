import Head from 'next/head'
import Image from 'next/image'
//import { Inter } from '@next/font/google'
import Slider from '../components/inc/Slider'
import TopChart from '../components/inc/TopChart'
import Tracks from '../components/user/Tracks'
import Playlist from '../components/user/Playlist'
import Player from '../components/inc/Player'

//const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  return (
    <>
        <div className="row">
            <div className="col-xl-5 col-lg-7 col-md-9 col-sm-11 mx-auto">
                <div className="card">
                    <div className="card-body p-sm-5">
                        <h4>Login to <span className="text-primary">Beyamusic</span></h4>
                        <p className="fs-6">Welcome back! login with your data that you entered during registration</p>
                        <form action="#" className="mt-5">
                            <div className="mb-3">
                                <div className="row">
                                    <label htmlFor="email" className="form-label fw-medium">Phone Number</label>
                                    <div className="col-4">
                                        <select name="" id="" className="form-select">
                                            <option value="1">+ 243</option>
                                            <option value="2">+ 1</option>
                                        </select>
                                    </div>
                                    <div className="col-8">
                                        <input type="number" id="email" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="password" className="form-label fw-medium">Password</label>
                                <input type="password" id="password" className="form-control" />
                            </div>
                            <div className="mb-4 text-end">
                                <a href="#" className="link-primary fw-medium">Forgot Password?</a>
                            </div>
                            <div className="mb-5">
                                <input type="submit" className="btn btn-primary w-100" value={"Login"} />
                            </div>
                            <p>Not registered yet? <br /><a href="register.html" className="fw-medium external">Register</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
