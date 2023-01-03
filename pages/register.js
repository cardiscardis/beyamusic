import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Slider from '../components/inc/Slider'
import TopChart from '../components/inc/TopChart'
import Tracks from '../components/user/Tracks'
import Playlist from '../components/user/Playlist'
import Player from '../components/inc/Player'

const inter = Inter({ subsets: ['latin'] })

export default function Register() {
  return (
    <>
        <div class="row">
            <div class="col-xl-5 col-lg-7 col-md-9 col-sm-11 mx-auto">
                <div class="card">
                    <div class="card-body p-sm-5">
                        <h4>Register with <span class="text-primary">Beyamusic</span></h4>
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
                            <div class="mb-3">
                                <div class="row">
                                    <label for="email" class="form-label fw-medium">Confirmation Code</label>
                                    <div class="col-8">
                                        <input type="number" id="email" class="form-control" />
                                    </div>
                                    <div class="col-4">
                                        <button type="button" class="btn btn-outline-success w-100">Get Code</button>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-2">
                                <label for="username" class="form-label fw-medium">Username</label>
                                <input type="text" id="username" class="form-control" />
                            </div>
                            <div class="mb-2">
                                <label for="password" class="form-label fw-medium">Password</label>
                                <input type="password" id="password" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <label for="c_password" class="form-label fw-medium">Confirm Password</label>
                                <input type="password" id="c_password" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <label for="c_password" class="form-label fw-medium">Gender</label>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="female" />
                                    <label class="form-check-label" for="inlineRadio1">Female</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="male" />
                                    <label class="form-check-label" for="inlineRadio2">Male</label>
                                    </div>
                                </div>
                            <div class="mb-4">
                                <div class="form-check mb-0">
                                    <input class="form-check-input" type="checkbox" id="agree" />
                                    <label class="form-check-label" for="agree">I agree <a href="#">Terms & Condition</a></label>
                                </div>
                            </div>
                            <div class="mb-5">
                                <input type="submit" class="btn btn-primary w-100" value="Login" />
                            </div>
                            <p>Do you have an Account? <br /><a href="login.html" class="fw-medium external">Register</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
