import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Slider from '../components/inc/Slider'
import TopChart from '../components/inc/TopChart'
import Tracks from '../components/user/Tracks'
import Playlist from '../components/user/Playlist'
import Player from '../components/inc/Player'

const inter = Inter({ subsets: ['latin'] })

export default function Forgot() {
  return (
    <>
        <div class="row">
            <div class="col-xl-5 col-lg-7 col-md-9 col-sm-11 mx-auto">
                <div class="card">
                    <div class="card-body p-sm-5">
                        <h4>Forgot <span class="text-primary">Password</span></h4>
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
                                <label for="password" class="form-label fw-medium">Password</label>
                                <input type="password" id="password" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <label for="c_password" class="form-label fw-medium">Confirm Password</label>
                                <input type="password" id="c_password" class="form-control" />
                            </div>
                            <div class="mb-5">
                                <input type="submit" class="btn btn-primary w-100" value="Reset" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
