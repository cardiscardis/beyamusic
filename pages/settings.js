import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Usersettings() {
  return (
    <>
        <div class="section">
        <div class="row">
            <div class="col-xl-8 col-md-11 mx-auto">
                <div class="card">
                    <div class="card-header">
                        <h4 class="mb-0">Settings</h4>
                    </div>
                    <div class="card-body">
                        <h5 class="mb-3">Notification</h5>
                        <div class="d-flex align-items-center mb-2">
                            <label for="email" class="pe-3">Get email notifications</label>
                            <div class="switch ms-auto">
                                <input type="checkbox" id="email" checked="checked"/> 
                                    <label for="email"></label>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <label for="message" class="pe-3">Get message notifications</label>
                            <div class="switch ms-auto">
                                <input type="checkbox" id="message" checked="checked"/> 
                                    <label for="message"></label>
                            </div>
                        </div>
                        <h5 class="mt-4 mb-3">Music Quality</h5>
                        <div class="d-flex align-items-center mb-2">
                            <label for="stream" class="pe-3">Streaming quality</label> 
                                <select name="stream" id="stream" class="form-select form-select-sm w-auto ms-auto" style={{minWidth: "120px"}}>
                                    <option value="0">Very High</option>
                                    <option value="1">High</option>
                                    <option value="2">Medium</option>
                                    <option value="4">Low</option>
                                </select>
                            </div>
                            <div class="d-flex align-items-center mb-2">
                                <label for="level" class="pe-3">Adjust the volume level for your environment</label>
                                    <select name="level" id="level" class="form-select form-select-sm w-auto ms-auto" style={{minWidth: "120px"}}>
                                    <option value="0">Quiet</option>
                                    <option value="1">Normal</option>
                                    <option value="2">Loud</option>
                                    <option value="4">Louder</option>
                                </select>
                            </div>
                            <div class="d-flex align-items-center">
                                <label for="volume" class="pe-3">Same volume level for all songs</label>
                                <div class="switch ms-auto">
                                    <input type="checkbox" id="volume" checked="checked" /> 
                                        <label for="volume"></label>
                                </div>
                            </div>
                            <h5 class="mt-4 mb-3">Theme</h5>
                            <div class="d-flex align-items-center">
                                <label for="theme" class="pe-3">Night mode</label>
                                <div class="switch ms-auto">
                                    <input type="checkbox" id="theme" /> 
                                        <label for="theme"></label>
                                </div>
                            </div>
                            <h5 class="mt-4 mb-3">History</h5>
                            <div class="d-flex align-items-center">
                                <label class="pe-3">Clear your music history</label> 
                                    <button type="button" class="btn btn-sm btn-primary ms-auto">Clear Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
