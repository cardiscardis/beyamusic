import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Slider from '../components/inc/Slider'
import TopChart from '../components/inc/TopChart'
import Tracks from '../components/user/Tracks'
import Playlist from '../components/user/Playlist'
import Player from '../components/inc/Player'

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  return (
    <>
        <div class="row">
            <div class="col-xl-5 col-lg-7 col-md-9 col-sm-11 mx-auto">
                <div class="card">
                    <div class="card-body p-sm-5">
                        <h4>Login to <span class="text-primary">Beyamusic</span></h4>
                        <p class="fs-6">Welcome back! login with your data that you entered during registration</p>
                        <form action="#" class="mt-5">
                            <div class="mb-3">
                                <div class="row">
                                    <label for="email" class="form-label fw-medium">Phone Number</label>
                                    <div class="col-4">
                                        <select name="" id="" class="form-select">
                                            <option value="">+ 243</option>
                                            <option value="">+ 1</option>
                                        </select>
                                    </div>
                                    <div class="col-8">
                                        <input type="number" id="email" class="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div class="mb-2">
                                <label for="password" class="form-label fw-medium">Password</label>
                                <input type="password" id="password" class="form-control" />
                            </div>
                            <div class="mb-4 text-end">
                                <a href="#" class="link-primary fw-medium">Forgot Password?</a>
                            </div>
                            <div class="mb-5">
                                <input type="submit" class="btn btn-primary w-100" value="Login" />
                            </div>
                            <p>Not registered yet? <br /><a href="register.html" class="fw-medium external">Register</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
