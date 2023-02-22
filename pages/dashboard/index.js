//import { Inter } from '@next/font/google'
//import {useRouter} from "next/router";
//import useSWR from 'swr';
import Head from 'next/head'
import Image from 'next/image'
import { useSession } from "next-auth/react"
import DashboardHeader from '../../components/dashboard/Header'
import DashboardTable from '../../components/dashboard/Table'
import AllTracks from '../../components/dashboard/AllTracks'
import Tracks from '../../components/dashboard/Tracks'
import PopulaTracks from '../../components/dashboard/PopulaTracks'
import Albums from '../../components/dashboard/Albums'
//import { useCurrentUser } from '@/lib/user';
//import { fetcher } from '@/lib/fetch';

/**
 * <ReactAudioPlayer src={`${musicList.url}`} controls />
 */


//const inter = Inter({ subsets: ['latin'] })

export default function Userdashboard() {

     //function useCurrentUser() {
        //return useSWR('/api/user', fetcher);
    //}
 
    const { data:session, status } = useSession()
    console.log(status, session)

    /* const { data, error, mutate } = useCurrentUser();
    const router = useRouter(); */

    /* useEffect(() => {
      if (!data && !error) return;
      if (!data.user) {
        router.replace('/login');
      }
    }, [router, data, error]); */
    
  return (
    <>
      <DashboardHeader user={session?.user} />
      <DashboardTable />
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
              <button className="nav-link active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All</button>
          </li>
          <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-populatrack-tab" data-bs-toggle="pill" data-bs-target="#pills-populatrack" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Popular Tracks</button>
          </li>
          <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-tracks" type="button" role="tab" aria-controls="pills-tracks" aria-selected="false">Tracks</button>
          </li>
          <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-albums-tab" data-bs-toggle="pill" data-bs-target="#pills-albums" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Albums</button>
          </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab">
          <AllTracks />
        </div>
        <div className="tab-pane fade" id="pills-populatrack" role="tabpanel" aria-labelledby="pills-populatrack-tab">
          <PopulaTracks />
        </div>
        <div className="tab-pane fade" id="pills-tracks" role="tabpanel" aria-labelledby="pills-tracks-tab">
          <Tracks />
        </div>
        <div className="tab-pane fade" id="pills-albums" role="tabpanel" aria-labelledby="pills-albums-tab">
          <Albums />
        </div>
      </div>


      <div className="modal fade" id="shareCredit" tabIndex="-1" aria-labelledby="shareCreditLabel" aria-hidden="true">
        <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title" id="shareCreditLabel">Share Credit With Friends & Family</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="alert alert-success" role="alert">
                    You have successfuly sent 14 days credit to @Gerard!
                </div>
                <div className="alert alert-warning" role="alert">
                    The user entered doesn't exist, please check again.
                </div>
                <div className="alert alert-danger" role="alert">
                    You don't have enought credit in your account, you can buy more here: <a href="" style={{color: "#fff"}}>https://www.beyamusic.com/buycredit</a>
                </div>
                <div className="row">
                    <div className="col-12">
                        <label htmlFor="inputPassword5" className="form-label">@Username or Phone Number</label>
                        <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
                        <div id="passwordHelpBlock" className="form-text">
                            Please make sure to type in perfectly the username or the phone number.
                        </div>
                    </div>
                    <div className="col-12 p-3">
                        <label htmlFor="inputPassword5" className="form-label">How many days</label>
                        <select className="form-select" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1">1 Day</option>
                            <option value="2">7 Days</option>
                            <option value="3">14 Days</option>
                            <option value="4">30 Days</option>
                          </select>
                        <div id="passwordHelpBlock" className="form-text">
                            Please specify the credit is being share for how many days?
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-success">Send Credit</button>
            </div>
        </div>
        </div>
      </div>

      <div className="modal fade" id="addCredit" tabIndex="-1" aria-labelledby="addCreditLabel" aria-hidden="true">
        <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title" id="addCreditLabel">Add Credit</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="alert alert-success" role="alert">
                    Your 30 days credit has been added successfuly!
                </div>
                <div className="alert alert-warning" role="alert">
                    Looks like there was something wrong with the number you entered, please try again.
                </div>
                <div className="alert alert-danger" role="alert">
                    The card entered has expired or the numbers are incorrect.
                </div>
                <label htmlFor="inputPassword5" className="form-label">Card #</label>
                <input type="text" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
                <div className="mb-4">
                    <div className="auth__or mx-auto fw-medium"></div>
                </div>
                <div className="mb-4">
                    <h6>Buy Credit</h6>
                    <div className="row">
                        <div className="col-12 p-3">
                            <label htmlFor="inputPassword5" className="form-label">How many days</label>
                            <select className="form-select" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value="1">1 Day</option>
                                <option value="2">7 Days</option>
                                <option value="3">14 Days</option>
                                <option value="4">30 Days</option>
                              </select>
                        </div>
                    </div>
                    <div className="row">
                        <h6>How would you pay?</h6>
                        <div className="col-4">
                            <a href="">Paypal</a>
                        </div>
                        <div className="col-4">
                            <a href="">Credit Card</a>
                        </div>
                        <div className="col-4">
                            <a href="">M-Pesa</a>
                        </div>
                    </div>
                </div>
                <div id="passwordHelpBlock" className="form-text">
                    Your can purchase your credit card online here: <a href=""> https://beyamusic.com</a>, or in person. The card can only be used once.
                </div>
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-success">Add Credit</button>
            </div>
        </div>
        </div>
      </div>
    </>
  )
}
