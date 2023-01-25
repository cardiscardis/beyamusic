import { Inter } from '@next/font/google'
import Link from 'next/link'
import {useRouter} from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export default function AdminUsers() {

  return (
    <>

        <div class="row">
            <div class="col-lg-12 mx-auto">
                <div class="mb-60">

                    <form action="#" class="mb-60">
                        <div class="row">
                            <div class="col-md-6 col-lg-3 my-3">
                                <div class="input-group position-relative">
                                    <input type="text" class="form-control" placeholder="Username" id="keywords"  />
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 my-3">
                                <div class="select-container">
                                    <select class="form-select">
                                        <option selected="">Country</option>
                                        <option value="1">Jaipur</option>
                                        <option value="2">Pune</option>
                                        <option value="3">Bangalore</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 my-3">
                                <div class="select-container">
                                    <select class="form-select">
                                        <option selected="">State</option>
                                        <option value="1">Ui designer</option>
                                        <option value="2">JS developer</option>
                                        <option value="3">Web developer</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 my-3">
                                <button type="button" class="btn btn-md btn-block btn-light btn-custom" id="contact-submit">
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>

                    <div class="filter-result">
                        <div class="row">
                            <div class="col-md-6 pt-3 pb-3" style={{textAlign: 'left'}}>
                                <p class="ff-montserrat">Total Users : 5M</p>
                            </div>
                            <div class="col-md-6 pt-3 pb-3" style={{textAlign: 'right'}}>
                                <p class="ff-montserrat">
                                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addnewuserModal" style={{background:'#6caf17', borderColor: '#6caf17'}}>Add New User</button>
                                </p>
                            </div>
                        </div>
                        <div class="job-box d-md-flex align-items-center justify-content-between mb-30">
                            <div class="job-left my-4 d-md-flex align-items-center flex-wrap">
                                <div class="img-holder">
                                    FI
                                </div>
                                <div class="job-content">
                                    <b class="" style={{marginLeft: '15px'}}>Fally Ipupa</b>
                                    <div style={{marginLeft: '15px'}}>
                                        <p>DR. Congo / Kinshasa</p>
                                    </div>
                                </div>
                            </div>
                            <div class="job-right my-4 flex-shrink-0">
                                <Link href="/admin?name=user_details" class="btn d-block w-100 d-sm-inline-block btn-light">View Details</Link>
                            </div>
                        </div>

                    </div>
                </div>
                <nav aria-label="Page navigation">
                    <ul class="pagination pagination-reset justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                                <i class="zmdi zmdi-long-arrow-left"></i>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item d-none d-md-inline-block"><a class="page-link" href="#">2</a></li>
                        <li class="page-item d-none d-md-inline-block"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">...</a></li>
                        <li class="page-item"><a class="page-link" href="#">8</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                <i class="zmdi zmdi-long-arrow-right"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        {/* Aadd New User Modal */}
        <div class="modal fade" id="addnewuserModal" tabindex="-1" aria-labelledby="addnewuserModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addnewuserModalLabel">Add New User</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
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
                            <label for="username" class="form-label fw-medium">Username</label>
                            <input type="text" id="username" class="form-control" />
                        </div>
                        <div>
                            <label for="username" class="form-label fw-medium">Account Type</label>
                            <select class="form-select">
                                <option selected="">Select Account Type</option>
                                <option selected="admin">Admin</option>
                                <option selected="user">User</option>
                            </select>
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
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Create New User</button>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}
