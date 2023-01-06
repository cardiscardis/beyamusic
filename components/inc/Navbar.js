import React from "react";
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
        <aside id="sidebar">
            <div class="sidebar-head d-flex align-items-center justify-content-between">
                <Link href="index.html" class="brand external">
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
                            <Link href="/" class="nav-link d-flex align-items-center">
                                <i class="ri-home-4-line fs-5"></i>
                                <span class="ps-3">Home</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href="/genres" class="nav-link d-flex align-items-center">
                                <i class="ri-disc-line fs-5"></i>
                                <span class="ps-3">Genres</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href="/freemusic" class="nav-link d-flex align-items-center">
                                <i class="ri-music-2-line fs-5"></i>
                                <span class="ps-3">Free Music</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href="/albums" class="nav-link d-flex align-items-center">
                                <i class="ri-album-line fs-5"></i>
                                <span class="ps-3">Albums</span>
                            </Link>
                        </li>
                        <li class="nav-item nav-item--head">
                            <span class="nav-item--head__text">Music</span>
                            <span class="nav-item--head__dots">...</span>
                        </li>
                        <li class="nav-item">
                            <Link href="/playlists" class="nav-link d-flex align-items-center">
                            <i class="ri-history-line fs-5"></i>
                                <span class="ps-3">Playlist</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href="/favorites" class="nav-link d-flex align-items-center">
                                <i class="ri-heart-line fs-5"></i>
                                <span class="ps-3">Favorites</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div class="sidebar-foot">
                <Link href="add-music.html" class="btn btn-primary d-flex">
                    <div class="btn__wrap">
                        <i class="ri-music-fill"></i>
                        <span>Add Music</span>
                    </div>
                </Link>
            </div>
        </aside>
        </>
    )
}

export default Navbar