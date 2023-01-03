import React from "react";

const Navbar = () => {
    return (
        <>
        <aside id="sidebar">
            <div class="sidebar-head d-flex align-items-center justify-content-between">
                <a href="index.html" class="brand external">
                    {/* <img src="images/logos/logo.svg" alt="Listen app"> */}
                </a>
                
                <a href="javascript:void(0);" role="button" class="sidebar-toggler" aria-label="Sidebar toggler">
                    <div class="d-none d-lg-block">
                        <i class="ri-menu-3-line sidebar-menu-1"></i>
                        <i class="ri-menu-line sidebar-menu-2"></i>
                    </div>
                    <i class="ri-menu-fold-line d-lg-none"></i>
                </a>
            </div>

            <div class="sidebar-body" data-scroll="true">
                <nav class="navbar d-block p-0">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href="home.html" class="nav-link d-flex align-items-center">
                                <i class="ri-home-4-line fs-5"></i>
                                <span class="ps-3">Home</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="genres.html" class="nav-link d-flex align-items-center">
                                <i class="ri-disc-line fs-5"></i>
                                <span class="ps-3">Genres</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="music.html" class="nav-link d-flex align-items-center">
                                <i class="ri-music-2-line fs-5"></i>
                                <span class="ps-3">Free Music</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="albums.html" class="nav-link d-flex align-items-center">
                                <i class="ri-album-line fs-5"></i>
                                <span class="ps-3">Albums</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="artists.html" class="nav-link d-flex align-items-center">
                                <i class="ri-mic-line fs-5"></i>
                                <span class="ps-3">Artists</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="stations.html" class="nav-link d-flex align-items-center">
                                <i class="ri-radio-2-line fs-5"></i>
                                <span class="ps-3">Stations</span>
                            </a>
                        </li>
                        <li class="nav-item nav-item--head">
                            <span class="nav-item--head__text">Music</span>
                            <span class="nav-item--head__dots">...</span>
                        </li>
                        <li class="nav-item">
                            <a href="analytics.html" class="nav-link d-flex align-items-center">
                                <i class="ri-pie-chart-line fs-5"></i>
                                <span class="ps-3">Analytics</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="favorites.html" class="nav-link d-flex align-items-center">
                                <i class="ri-heart-line fs-5"></i>
                                <span class="ps-3">Favorites</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="history.html" class="nav-link d-flex align-items-center">
                                <i class="ri-history-line fs-5"></i>
                                <span class="ps-3">History</span>
                            </a>
                        </li>
                        <li class="nav-item nav-item--head">
                            <span class="nav-item--head__text">Events</span>
                            <span class="nav-item--head__dots">...</span>
                        </li>
                        <li class="nav-item">
                            <a href="events.html" class="nav-link d-flex align-items-center">
                                <i class="ri-calendar-event-line fs-5"></i>
                                <span class="ps-3">Events</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="event-details.html" class="nav-link d-flex align-items-center">
                                <i class="ri-newspaper-line fs-5"></i>
                                <span class="ps-3">Event Details</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="add-event.html" class="nav-link d-flex align-items-center">
                                <i class="ri-add-circle-line fs-5"></i>
                                <span class="ps-3">Add Event</span>
                            </a>
                        </li>
                        <li class="nav-item nav-item--head">
                            <span class="nav-item--head__text">Extra</span>
                            <span class="nav-item--head__dots">...</span>
                        </li>
                        <li class="nav-item">
                            <a href="404.html" class="nav-link d-flex align-items-center external">
                                <i class="ri-error-warning-line fs-5"></i>
                                <span class="ps-3">404 Page</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="blank.html" class="nav-link d-flex align-items-center">
                                <i class="ri-file-line fs-5"></i>
                                <span class="ps-3">Blank Template</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div class="sidebar-foot">
                <a href="add-music.html" class="btn btn-primary d-flex">
                    <div class="btn__wrap">
                        <i class="ri-music-fill"></i>
                        <span>Add Music</span>
                    </div>
                </a>
            </div>
        </aside>
        </>
    )
}

export default Navbar