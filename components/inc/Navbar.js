import React from "react";
import Link from 'next/link'
import {useRouter} from 'next/router';

const Navbar = () => {

    return (
        <>
            <aside id="sidebar">
                <div className="sidebar-head d-flex align-items-center justify-content-between">
                    <Link href="index.html" className="brand external">
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
                                <Link href="/" className="nav-link d-flex align-items-center">
                                    <i className="ri-home-4-line fs-5"></i>
                                    <span className="ps-3">Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/genres" className="nav-link d-flex align-items-center">
                                    <i className="ri-disc-line fs-5"></i>
                                    <span className="ps-3">Genres</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/freemusic" className="nav-link d-flex align-items-center">
                                    <i className="ri-music-2-line fs-5"></i>
                                    <span className="ps-3">Free Music</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/albums" className="nav-link d-flex align-items-center">
                                    <i className="ri-album-line fs-5"></i>
                                    <span className="ps-3">Albums</span>
                                </Link>
                            </li>
                            <li className="nav-item nav-item--head">
                                <span className="nav-item--head__text">Music</span>
                                <span className="nav-item--head__dots">...</span>
                            </li>
                            <li className="nav-item">
                                <Link href="/playlists" className="nav-link d-flex align-items-center">
                                <i className="ri-history-line fs-5"></i>
                                    <span className="ps-3">Playlist</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/favorites" className="nav-link d-flex align-items-center">
                                    <i className="ri-heart-line fs-5"></i>
                                    <span className="ps-3">Favorites</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="sidebar-foot">
                    <Link href="add-music.html" className="btn btn-primary d-flex">
                        <div className="btn__wrap">
                            <i className="ri-music-fill"></i>
                            <span>Add Music</span>
                        </div>
                    </Link>
                </div>
            </aside>
        </>
    )
}

export default Navbar