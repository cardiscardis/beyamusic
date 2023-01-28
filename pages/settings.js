import Head from 'next/head'
import Image from 'next/image'
//import { Inter } from '@next/font/google'

//const inter = Inter({ subsets: ['latin'] })

export default function Usersettings() {
  return (
    <>
        <div className="section">
        <div className="row">
            <div className="col-xl-8 col-md-11 mx-auto">
                <div className="card">
                    <div className="card-header">
                        <h4 className="mb-0">Settings</h4>
                    </div>
                    <div className="card-body">
                        <h5 className="mb-3">Notification</h5>
                        <div className="d-flex align-items-center mb-2">
                            <label htmlFor="email" className="pe-3">Get email notifications</label>
                            <div className="switch ms-auto">
                                <input type="checkbox" id="email" checked="checked"/> 
                                    <label htmlFor="email"></label>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <label htmlFor="message" className="pe-3">Get message notifications</label>
                            <div className="switch ms-auto">
                                <input type="checkbox" id="message" checked="checked"/> 
                                    <label htmlFor="message"></label>
                            </div>
                        </div>
                        <h5 className="mt-4 mb-3">Music Quality</h5>
                        <div className="d-flex align-items-center mb-2">
                            <label htmlFor="stream" className="pe-3">Streaming quality</label> 
                                <select name="stream" id="stream" className="form-select form-select-sm w-auto ms-auto" style={{minWidth: "120px"}}>
                                    <option value="0">Very High</option>
                                    <option value="1">High</option>
                                    <option value="2">Medium</option>
                                    <option value="4">Low</option>
                                </select>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <label htmlFor="level" className="pe-3">Adjust the volume level for your environment</label>
                                    <select name="level" id="level" className="form-select form-select-sm w-auto ms-auto" style={{minWidth: "120px"}}>
                                    <option value="0">Quiet</option>
                                    <option value="1">Normal</option>
                                    <option value="2">Loud</option>
                                    <option value="4">Louder</option>
                                </select>
                            </div>
                            <div className="d-flex align-items-center">
                                <label htmlFor="volume" className="pe-3">Same volume level for all songs</label>
                                <div className="switch ms-auto">
                                    <input type="checkbox" id="volume" checked="checked" /> 
                                        <label htmlFor="volume"></label>
                                </div>
                            </div>
                            <h5 className="mt-4 mb-3">Theme</h5>
                            <div className="d-flex align-items-center">
                                <label htmlFor="theme" className="pe-3">Night mode</label>
                                <div className="switch ms-auto">
                                    <input type="checkbox" id="theme" /> 
                                        <label htmlFor="theme"></label>
                                </div>
                            </div>
                            <h5 className="mt-4 mb-3">History</h5>
                            <div className="d-flex align-items-center">
                                <label className="pe-3">Clear your music history</label> 
                                    <button type="button" className="btn btn-sm btn-primary ms-auto">Clear Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
