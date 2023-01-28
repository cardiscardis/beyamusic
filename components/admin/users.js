//import { Inter } from '@next/font/google'
import Link from 'next/link'
import {useRouter} from 'next/router';

//const inter = Inter({ subsets: ['latin'] })

export default function AdminUsers() {

  return (
    <>

        <div className="row">
            <div className="col-lg-12 mx-auto">
                <div className="mb-60">

                    <form action="#" className="mb-60">
                        <div className="row">
                            <div className="col-md-6 col-lg-3 my-3">
                                <div className="input-group position-relative">
                                    <input type="text" className="form-control" placeholder="Username" id="keywords"  />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 my-3">
                                <div className="select-container">
                                    <select className="form-select">
                                        <option selected="">Country</option>
                                        <option value="1">Jaipur</option>
                                        <option value="2">Pune</option>
                                        <option value="3">Bangalore</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 my-3">
                                <div className="select-container">
                                    <select className="form-select">
                                        <option selected="">State</option>
                                        <option value="1">Ui designer</option>
                                        <option value="2">JS developer</option>
                                        <option value="3">Web developer</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 my-3">
                                <button type="button" className="btn btn-md btn-block btn-light btn-custom" id="contact-submit">
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className="filter-result">
                        <div className="row">
                            <div className="col-md-6 pt-3 pb-3" style={{textAlign: 'left'}}>
                                <p className="ff-montserrat">Total Users : 5M</p>
                            </div>
                            <div className="col-md-6 pt-3 pb-3" style={{textAlign: 'right'}}>
                                <p className="ff-montserrat">
                                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addnewuserModal" style={{background:'#6caf17', borderColor: '#6caf17'}}>Add New User</button>
                                </p>
                            </div>
                        </div>
                        <div className="job-box d-md-flex align-items-center justify-content-between mb-30">
                            <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
                                <div className="img-holder">
                                    FI
                                </div>
                                <div className="job-content">
                                    <b className="" style={{marginLeft: '15px'}}>Fally Ipupa</b>
                                    <div style={{marginLeft: '15px'}}>
                                        <p>DR. Congo / Kinshasa</p>
                                    </div>
                                </div>
                            </div>
                            <div className="job-right my-4 flex-shrink-0">
                                <Link href="/admin?name=user_details" className="btn d-block w-100 d-sm-inline-block btn-light">View Details</Link>
                            </div>
                        </div>

                    </div>
                </div>
                <nav aria-label="Page navigation">
                    <ul className="pagination pagination-reset justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
                                <i className="zmdi zmdi-long-arrow-left"></i>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item d-none d-md-inline-block"><a className="page-link" href="#">2</a></li>
                        <li className="page-item d-none d-md-inline-block"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">...</a></li>
                        <li className="page-item"><a className="page-link" href="#">8</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                <i className="zmdi zmdi-long-arrow-right"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        {/* Aadd New User Modal */}
        <div className="modal fade" id="addnewuserModal" tabIndex="-1" aria-labelledby="addnewuserModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="addnewuserModalLabel">Add New User</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
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
                            <label htmlFor="username" className="form-label fw-medium">Username</label>
                            <input type="text" id="username" className="form-control" />
                        </div>
                        <div>
                            <label htmlFor="username" className="form-label fw-medium">Account Type</label>
                            <select className="form-select">
                                <option selected="">Select Account Type</option>
                                <option selected="admin">Admin</option>
                                <option selected="user">User</option>
                            </select>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="form-label fw-medium">Password</label>
                            <input type="password" id="password" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="c_password" className="form-label fw-medium">Confirm Password</label>
                            <input type="password" id="c_password" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="c_password" className="form-label fw-medium">Gender</label>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="female" />
                                <label className="form-check-label" htmlFor="inlineRadio1">Female</label>
                                </div>
                                <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="male" />
                                <label className="form-check-label" htmlFor="inlineRadio2">Male</label>
                                </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Create New User</button>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}
