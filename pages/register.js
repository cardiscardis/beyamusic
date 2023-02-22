import { useState } from 'react'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { signIn } from "next-auth/react"
import {useRouter} from "next/router";
import cogoToast from 'cogo-toast'

//import { Inter } from '@next/font/google'
import Slider from '../components/inc/Slider'
import TopChart from '../components/inc/TopChart'
import Tracks from '../components/user/Tracks'
import Playlist from '../components/user/Playlist'
import Player from '../components/inc/Player'
import {
    Paper,
    TextField,
    MenuItem,
    Button,
    IconButton
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Otp from '../components/Otp';

function isNumeric(n) {
    return !isNaN(parseInt(n)) && isFinite(n);
}

//const inter = Inter({ subsets: ['latin'] })

export default function Register() {
    const router = useRouter()

    const [ mainState, setMainState ] = useState({
        code: '',
        pno: '',
        otpShow: false,
        otp: '',
        confirm_code: '',
        verified: false,
        gender: '',
        password: '',
        user: '',
        c_password: '',
        checked: false
    });


    
    const onChange = (e) => {  
        if (e.target.name === 'pno' || e.target.name === 'code') {
            if((e.target.value[e.target.value.length-1]>='0' && e.target.value[e.target.value.length-1]<='9') || !e.target.value) {      
                setMainState(prev => ({...prev, [e.target.name]: e.target.value}))        
            } else cogoToast('invalid data')
        } else if (e.target.name === 'checked') {
            setMainState(prev => ({...prev, checked: (!mainState.checked)}));
        } else if (e.target.name === 'code' && e.target.value === 'choose') {
            cogoToast.error('Oops! You have not selected your Country Code!')
            return
        } else {
            setMainState(prev => ({...prev, [e.target.name]: e.target.value}))
        }        
    }



    const registerUser = async (event) => {
        event.preventDefault();
        event.stopPropagation()

        if (mainState.password !== mainState.c_password) {
            cogoToast.warn('Password does not match')
            return;
        }

        if (!mainState.pno || !mainState.code || !mainState.verified ||
            !mainState.gender || !mainState.password || !mainState.user || 
            !mainState.checked || mainState.code === 'choose') {
                cogoToast.error('All field required!')
                return
            }
      /*   const data = {
            phone: `${mainState.code}${mainState.pno}`,
            username: mainState.user,
            gender: mainState.gender,
            password: mainState.password
        }
        
        axios.post('/api/register', data).then((res) => {
            console.log(res)
            if (res.status === 200 && res.data === 'Registered successfully') {
 */
                signIn("credentials", {
                    phone: `${mainState.code}${mainState.pno}`, 
                    password: mainState.password,
                    gender: mainState.gender,
                    username: mainState.user,
                    callbackUrl: `${window.location.origin}/dashboard`, 
                    redirect: false 
                }).then(function(result) {
                    console.log(result)
                    cogoToast.success('Success!');
                    router.push(result.url)
                }).catch(err => {
                    cogoToast.error('Failed to sign in: ' + err.toString());
                    router.push('/login')
                });
           /*  }
        }).catch((e) => {
            cogoToast.error('Failed!')
        }) */
    }



    
    const _getCode = async() => {
        const e = mainState.code+mainState.pno;
        console.log(e)
        await axios.get("http://localhost:3000/api/twilio/getcode", {
            params: {
                phonenumber: e,
                channel: 'sms'
            }
        })
        .then(data => console.log(data))
        .catch(err => console.log(err));
    };

    const _verifyCode = async () => {
        const e = mainState.code+mainState.pno;
        console.log(e)
        await axios.get("http://localhost:3000/api/twilio/verifycode", {
            params: {
                phonenumber: e,
                code: mainState.otp
            }
        })
        .then(data => {
            if (data?.data?.status === 'approved' && data?.data?.valid === true) setMainState(prev => ({...prev, verified: true}))
            console.log(data)
        })
        .catch(err => console.log(err));
    }

  return (
    <>
        <div className="row">
        {mainState.otpShow && !mainState.verified && <IconButton onClick={() => {
            setMainState(prev => ({...prev, otpShow: false, otp: ''}));
        }} size="small"><ArrowBackIcon /></IconButton>}
            
            <div className="col-xl-5 col-lg-7 col-md-9 col-sm-11 mx-auto">
                <div className="card">
                    <div className="card-body p-sm-5">
                        <h4>Register with <span className="text-primary">Beyamusic</span></h4>
                        <form onSubmit={registerUser} className="mt-5">
                            <div className="mb-3">
                                <div className="row">
                                    <label htmlFor="code" className="form-label fw-medium">Phone Number</label>
                                    <div className="col-5">
                                        <select name="code" id="code" className="form-select" 
                                          value={mainState.code} 
                                          onChange={(e) => onChange(e)}>
                                            <option>choose</option>
                                            <option value="234">+ 234</option>
                                            <option value="1">+ 1</option>
                                        </select>
                                    </div>
                                    <div className="col-7">
                                        <input name="pno" type="number" id="pno" className="form-control" value={mainState.pno} onChange={(e) => onChange(e)} />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="row">
                                {mainState.otpShow && !mainState.verified && <p>A One Time Password has been sent to your phone number for verification puposes.</p>}
                                {mainState.otpShow && !mainState.verified && <div className="form-group"><label htmlFor="confirm_code" className="form-label fw-medium">Confirmation Code</label>
                                    <div className="col-12">
                                    {/*mainState.otpShow && <><input name="confirm_code" type="number" id="email" className="form-control" value={mainState.confirm_code} onChange={(e) => onChange(e)} /></>*/}
                                        <Otp otp={mainState.otp} setOtp={val => setMainState(prev => ({...prev, otp: val}))} />
                                        <div style={{width: '100%', display: 'flex', alignItems: 'center', marginTop: 5}}>
                                            Didn't receive an OTP? <Button onClick={_getCode} color="primary" style={{textTransform: 'none', fontSize: 15}}>Resend OTP</Button>
                                        </div>                                         
                                    </div></div>}
                                    {mainState.otpShow && !mainState.verified && <p>By tapping Verify an SMS may be sent. Message & data rates may apply.</p>}
                                    <div className="col-4">
                                        {!mainState.verified && <button type="button" className="btn btn-outline-success w-100"  
                                          onClick={() => {
                                            if ((mainState.pno.length!==10) || (mainState.code===null) || !isNumeric(mainState.pno) || (mainState.otpShow && mainState.otp.length!==6)) {
                                                alert('invalid data')
                                                return
                                            }
                                            if(!mainState.otpShow) {
                                                _getCode();                                                
                                                setMainState(prev => ({...prev, otpShow: true}));
                                            } else _verifyCode()
                                        }}>
                                            {mainState.otpShow ? 'Verify' : 'Get Code'}
                                        </button>}
                                  </div>
                                </div>
                                {mainState.verified && <p className='text-success'>Approved! You can continue filling out the form.</p>}
                            </div>
                            
                            {mainState.verified && <><div className="mb-2">
                                <label htmlFor="username" className="form-label fw-medium">Username</label>
                                <input type="text" id="username" name='user' className="form-control" onChange={(e) => onChange(e)} minLength={3} required />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="password" className="form-label fw-medium">Password</label>
                                <input type="password" id="password" name='password' className="form-control" onChange={(e) => onChange(e)} minLength={6} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="c_password" className="form-label fw-medium">Confirm Password</label>
                                <input type="password" id="c_password" name='c_password' className="form-control" onChange={(e) => onChange(e)} minLength={6} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="c_password" className="form-label fw-medium">Gender</label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" value={"female"} checked={mainState.gender === 'female'} onChange={(e) => onChange(e)} required />
                                    <label className="form-check-label" htmlFor="inlineRadio1">Female</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value={"male"} checked={mainState.gender === 'male'} onChange={(e) => onChange(e)} />
                                    <label className="form-check-label" htmlFor="inlineRadio2">Male</label>
                                    </div>
                                </div>
                            <div className="mb-4">
                                <div className="form-check mb-0">
                                    <input className="form-check-input" name='checked' type="checkbox" id="agree" onChange={(e) => onChange(e)} required />
                                    <label className="form-check-label" htmlFor="agree">I agree <a href="#">Terms & Condition</a></label>
                                </div>
                            </div></>}
                        
                            {mainState.verified && <div className="mb-5">
                                <input type="submit" className="btn btn-primary w-100" value={"Sign Up"} />
                            </div>}
                            <p>Do you have an Account? <br /><a href="/login" className="fw-medium external">Login</a></p>
                        </form>
                        <div style={{display: 'flex', flexDirection: 'row', marginTop: 30}}>
                            <a href='#' style={{textDecoration: 'none', fontSize: 14}}>Terms of service</a>
                            <a href='#' style={{textDecoration: 'none', fontSize: 14, marginLeft: 10}}>User agreement</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}
