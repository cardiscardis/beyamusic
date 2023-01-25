import React from "react";
import Link from 'next/link'
import {useRouter} from 'next/router';

const AdminNavbar = () => {

    return (
        <>
            <aside id="sidebar">
                <div class="sidebar-head d-flex align-items-center justify-content-between">
                    <Link href="/admin?home" class="brand external">
                        <img src="images/logos/beyamusic.svg" alt="Beyamusic" style={{width: "150%"}}/>
                    </Link>
                    
                    <Link href="javascript:void(0);" role="button" class="sidebar-toggler" aria-label="Sidebar toggler">
                        <div class="d-none d-lg-block">
                            <i class="ri-menu-3-line sidebar-menu-1"></i>
                            <i class="ri-menu-line sidebar-menu-2"></i>
                        </div>
                        <i class="ri-menu-fold-line d-lg-none"></i>
                    </Link>
                </div>

                <div class="sidebar-body" data-scroll="true">
                    <nav class="navbar d-block p-0">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link href="/admin?name=home" class="nav-link d-flex align-items-center">
                                    <span class="ps-3">Home</span>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link href="/admin?name=users" class="nav-link d-flex align-items-center">
                                    <span class="ps-3">Users</span>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link href="/admin?name=songs" class="nav-link d-flex align-items-center">
                                    <span class="ps-3">Songs</span>
                                </Link>
                            </li>
                            {/* <li class="nav-item">
                                <Link href="/admin?name=payments" class="nav-link d-flex align-items-center">
                                    <span class="ps-3">Payments</span>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link href="/admin?name=countries" class="nav-link d-flex align-items-center">
                                    <span class="ps-3">Countries</span>
                                </Link>
                            </li> */}
                            <li class="nav-item">
                                <Link href="/admin?name=ads" class="nav-link d-flex align-items-center">
                                    <span class="ps-3">Ads</span>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link href="/admin?name=credit" class="nav-link d-flex align-items-center">
                                    <span class="ps-3">Credit</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* <div class="sidebar-foot">
                    <Link href="add-music.html" class="btn btn-primary d-flex">
                        <div class="btn__wrap">
                            <span>Create Credit</span>
                        </div>
                    </Link>
                </div> */}
            </aside>
        </>
    )
}

export default AdminNavbar