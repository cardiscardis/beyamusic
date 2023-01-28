import React from "react";
import Link from 'next/link'
import {useRouter} from 'next/router';

const AdminNavbar = () => {

    return (
        <>
            <aside id="sidebar">
                <div className="sidebar-head d-flex align-items-center justify-content-between">
                    <Link href="/admin?home" className="brand external">
                        <img src="images/logos/beyamusic.svg" alt="Beyamusic" style={{width: "150%"}}/>
                    </Link>
                    
                    <Link href="javascript:void(0);" role="button" className="sidebar-toggler" aria-label="Sidebar toggler">
                        <div className="d-none d-lg-block">
                            <i className="ri-menu-3-line sidebar-menu-1"></i>
                            <i className="ri-menu-line sidebar-menu-2"></i>
                        </div>
                        <i className="ri-menu-fold-line d-lg-none"></i>
                    </Link>
                </div>

                <div className="sidebar-body" data-scroll="true">
                    <nav className="navbar d-block p-0">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/admin?name=home" className="nav-link d-flex align-items-center">
                                    <span className="ps-3">Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/admin?name=users" className="nav-link d-flex align-items-center">
                                    <span className="ps-3">Users</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/admin?name=songs" className="nav-link d-flex align-items-center">
                                    <span className="ps-3">Songs</span>
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link href="/admin?name=payments" className="nav-link d-flex align-items-center">
                                    <span className="ps-3">Payments</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/admin?name=countries" className="nav-link d-flex align-items-center">
                                    <span className="ps-3">Countries</span>
                                </Link>
                            </li> */}
                            <li className="nav-item">
                                <Link href="/admin?name=ads" className="nav-link d-flex align-items-center">
                                    <span className="ps-3">Ads</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/admin?name=credit" className="nav-link d-flex align-items-center">
                                    <span className="ps-3">Credit</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* <div className="sidebar-foot">
                    <Link href="add-music.html" className="btn btn-primary d-flex">
                        <div className="btn__wrap">
                            <span>Create Credit</span>
                        </div>
                    </Link>
                </div> */}
            </aside>
        </>
    )
}

export default AdminNavbar