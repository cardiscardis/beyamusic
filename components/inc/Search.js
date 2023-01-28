import React from "react";
import Link from 'next/link'

const Search = () => {
    return (
        <>
        <header id="header" data-header="green">
            <div className="container">
                <div className="header-container">
                    <div className="d-flex align-items-center">
                        <a href="javascript:void(0);" role="button" className="header-text sidebar-toggler d-lg-none me-3" aria-label="Sidebar toggler">
                            <i className="ri-menu-3-line"></i>
                        </a>
                        <form action="#" id="search_form" className="me-3">
                            <label htmlFor="search_input">
                                <i className="ri-search-2-line"></i>
                            </label>
                            <input type="text" placeholder="Type anything to get result..." id="search_input" className="form-control form-control-sm" />
                        </form>
                        <div id="search_results" className="search pb-3">
                            <div className="search__head">
                                <div className="search__head__filter">
                                    <button type="button" className="btn btn-sm btn-light-primary active">Trending</button>
                                    <button type="button" className="btn btn-sm btn-light-primary">Artists</button>
                                    <button type="button" className="btn btn-sm btn-light-primary">Songs</button>
                                    <button type="button" className="btn btn-sm btn-light-primary">Albums</button>
                                </div>
                            </div>
                            <div className="search__body ps ps--active-y" data-scroll="true">
                                <div className="mb-4">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <span className="search__title">Artists</span>
                                        <a href="artists.html" className="btn btn-link">View All</a>
                                    </div>
                                    <div className="row g-4 list">
                                        <div className="col-xl-3 col-md-4 col-sm-6">
                                            <div className="list__item">
                                                <a href="artist-details.html" className="list__cover">
                                                    <img src="images/cover/large/5.jpg" alt="Jina Moore" />
                                                </a>
                                                <div className="list__content">
                                                    <a href="artist-details.html" className="list__title text-truncate">Jina Moore</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-4 col-sm-6">
                                            <div className="list__item">
                                                <a href="artist-details.html" className="list__cover">
                                                    <img src="images/cover/large/6.jpg" alt="Rasomi Pelina" />
                                                </a>
                                                <div className="list__content">
                                                    <a href="artist-details.html" className="list__title text-truncate">Rasomi Pelina</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-4 col-sm-6">
                                            <div className="list__item">
                                                <a href="artist-details.html" className="list__cover">
                                                    <img src="images/cover/large/7.jpg" alt="Pimila Holliwy" />
                                                </a>
                                                <div className="list__content">
                                                    <a href="artist-details.html" className="list__title text-truncate">Pimila Holliwy</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-4 col-sm-6">
                                            <div className="list__item">
                                                <a href="artist-details.html" className="list__cover">
                                                    <img src="images/cover/large/8.jpg" alt="Karen Jennings" />
                                                </a>
                                                <div className="list__content">
                                                    <a href="artist-details.html" className="list__title text-truncate">Karen Jennings</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <span className="search__title">Songs</span>
                                        <a href="songs.html" className="btn btn-link">View All</a>
                                    </div>
                                    <div className="row g-4 list">
                                        <div className="col-xl-3 col-md-4 col-sm-6">
                                            <div className="list__item">
                                                <a href="song-details.html" className="list__cover">
                                                    <img src="images/cover/small/6.jpg" alt="Hey not me" />
                                                </a>
                                                <div className="list__content">
                                                    <a href="song-details.html" className="list__title text-truncate">Hey not me</a>
                                                    <p className="list__subtitle text-truncate">
                                                        <a href="artist-details.html">Rasomi Pelina</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-4 col-sm-6">
                                            <div className="list__item">
                                                <a href="song-details.html" className="list__cover">
                                                    <img src="images/cover/small/7.jpg" alt="Deep inside" />
                                                </a>
                                                <div className="list__content">
                                                    <a href="song-details.html" className="list__title text-truncate">Deep inside</a>
                                                    <p className="list__subtitle text-truncate">
                                                        <a href="artist-details.html">Pimila Holliwy</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-4 col-sm-6">
                                            <div className="list__item">
                                                <a href="song-details.html" className="list__cover">
                                                    <img src="images/cover/small/8.jpg" alt="Sadness" />
                                                </a>
                                                <div className="list__content">
                                                    <a href="song-details.html" className="list__title text-truncate">Sadness</a>
                                                    <p className="list__subtitle text-truncate">
                                                        <a href="artist-details.html">Karen Jennings</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-4 col-sm-6">
                                            <div className="list__item">
                                                <a href="song-details.html" className="list__cover">
                                                    <img src="images/cover/small/9.jpg" alt="Electric wave" />
                                                </a>
                                                <div className="list__content">
                                                    <a href="song-details.html" className="list__title text-truncate">Electric wave</a>
                                                    <p className="list__subtitle text-truncate">
                                                        <a href="artist-details.html">Lenisa Gory</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <span className="search__title">Albums</span>
                                        <a href="albums.html" className="btn btn-link">View All</a>
                                    </div>
                                    <div className="row g-4 list">
                                        <div className="col-xl-3 col-md-4 col-sm-6">
                                            <div className="list__item">
                                                <a href="album-details.html" className="list__cover">
                                                    <img src="images/cover/small/1.jpg" alt="Mummy" />
                                                </a>
                                                <div className="list__content">
                                                    <a href="album-details.html" className="list__title text-truncate">Mummy</a>
                                                    <p className="list__subtitle text-truncate">
                                                        <a href="artist-details.html">Arebica Luna</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-4 col-sm-6">
                                            <div className="list__item">
                                                <a href="album-details.html" className="list__cover">
                                                    <img src="images/cover/small/2.jpg" alt="Hot shot" />
                                                </a>
                                                <div className="list__content">
                                                    <a href="album-details.html" className="list__title text-truncate">Hot shot</a>
                                                    <p className="list__subtitle text-truncate">
                                                        <a href="artist-details.html">Gerrina Linda</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-4 col-sm-6">
                                            <div className="list__item">
                                                <a href="album-details.html" className="list__cover">
                                                    <img src="images/cover/small/3.jpg" alt="Own way" />
                                                </a>
                                                <div className="list__content">
                                                    <a href="album-details.html" className="list__title text-truncate">Own way</a>
                                                    <p className="list__subtitle text-truncate">
                                                        <a href="artist-details.html">Zunira Willy &amp; Nutty Nina</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-4 col-sm-6">
                                            <div className="list__item">
                                                <a href="album-details.html" className="list__cover">
                                                    <img src="images/cover/small/4.jpg" alt="Say yes" />
                                                </a>
                                                <div className="list__content">
                                                    <a href="album-details.html" className="list__title text-truncate">Say yes</a>
                                                    <p className="list__subtitle text-truncate">
                                                        <a href="artist-details.html">Johnny Marro</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div className="ps__rail-x" style={{left: 0, bottom: 0}}><div className="ps__thumb-x" tabIndex="0" style={{left: 0, bottom: 0}}></div></div><div className="ps__rail-y" style={{top: 0, height: "239px", right: 0}}><div className="ps__thumb-y" tabIndex="0" style={{top: 0, height: "143px"}}></div></div></div>
                        </div>

                        <div className="d-flex align-items-center">
                            <div className="dropdown">
                                <a href="javascript:void(0);" className="header-text d-flex align-items-center" role="button" id="language_menu" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                    <i className="ri-earth-line fs-5"></i>
                                    <span className="d-none d-md-block ms-1">Language</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end" aria-labelledby="language_menu">
                                    <div className="py-2 px-4">
                                        <span className="d-block fw-bold">What music do you like?</span>
                                        <p>Select languages you want to listen.</p>
                                    </div>
                                    <div className="dropdown-divider"></div>
                                    <div className="d-flex flex-wrap py-2">
                                        <div className="py-2 px-4 w-50">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" type="checkbox" id="lang_1" />
                                                <label className="form-check-label fw-semi-bold" htmlFor="lang_1">Hindi</label>
                                            </div>
                                        </div>
                                        <div className="py-2 px-4 w-50">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" type="checkbox" id="lang_2" />
                                                <label className="form-check-label fw-semi-bold" htmlFor="lang_2">Punjabi</label>
                                            </div>
                                        </div>
                                        <div className="py-2 px-4 w-50">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" type="checkbox" id="lang_3" />
                                                <label className="form-check-label fw-semi-bold" htmlFor="lang_3">Tamil</label>
                                            </div>
                                        </div>
                                        <div className="py-2 px-4 w-50">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" type="checkbox" id="lang_4" />
                                                <label className="form-check-label fw-semi-bold" htmlFor="lang_4">Bengali</label>
                                            </div>
                                        </div>
                                        <div className="py-2 px-4 w-50">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" type="checkbox" id="lang_5" />
                                                <label className="form-check-label fw-semi-bold" htmlFor="lang_5">Kannada</label>
                                            </div>
                                        </div>
                                        <div className="py-2 px-4 w-50">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" type="checkbox" id="lang_6" />
                                                <label className="form-check-label fw-semi-bold" htmlFor="lang_6">Gujarati</label>
                                            </div>
                                        </div>
                                        <div className="py-2 px-4 w-50">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" type="checkbox" id="lang_7" />
                                                <label className="form-check-label fw-semi-bold" htmlFor="lang_7">Urdu</label>
                                            </div>
                                        </div>
                                        <div className="py-2 px-4 w-50">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" type="checkbox" id="lang_8" />
                                                <label className="form-check-label fw-semi-bold" htmlFor="lang_8">English</label>
                                            </div>
                                        </div>
                                        <div className="py-2 px-4 w-50">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" type="checkbox" id="lang_9" />
                                                <label className="form-check-label fw-semi-bold" htmlFor="lang_9">Telugu</label>
                                            </div>
                                        </div>
                                        <div className="py-2 px-4 w-50">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" type="checkbox" id="lang_10" />
                                                <label className="form-check-label fw-semi-bold" htmlFor="lang_10">Bhojpuri</label>
                                            </div>
                                        </div>
                                        <div className="py-2 px-4 w-50">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" type="checkbox" id="lang_11" />
                                                <label className="form-check-label fw-semi-bold" htmlFor="lang_11">Malayalam</label>
                                            </div>
                                        </div>
                                        <div className="py-2 px-4 w-50">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" type="checkbox" id="lang_12" />
                                                <label className="form-check-label fw-semi-bold" htmlFor="lang_12">Marathi</label>
                                            </div>
                                        </div>
                                        <div className="py-2 px-4 w-50">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" type="checkbox" id="lang_13" />
                                                <label className="form-check-label fw-semi-bold" htmlFor="lang_13">Haryanvi</label>
                                            </div>
                                        </div>
                                        <div className="py-2 px-4 w-50">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" type="checkbox" id="lang_14" />
                                                <label className="form-check-label fw-semi-bold" htmlFor="lang_14">Rajasthani</label>
                                            </div>
                                        </div>
                                        <div className="py-2 px-4 w-50">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" type="checkbox" id="lang_15" />
                                                <label className="form-check-label fw-semi-bold" htmlFor="lang_15">Assamese</label>
                                            </div>
                                        </div>
                                        <div className="py-2 px-4 w-50">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" type="checkbox" id="lang_16" />
                                                <label className="form-check-label fw-semi-bold" htmlFor="lang_16">Odia</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-divider"></div>
                                    <div className="py-2 px-4">
                                        <button type="button" className="btn btn-primary w-100 justify-content-center">Update</button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="dropdown ms-3 ms-sm-4">
                                <a href="javascript:void(0);" className="avatar header-text" role="button" id="user_menu" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div className="avatar__image">
                                        <img src="images/users/thumb.jpg" alt="user" />
                                    </div>
                                    <span className="ps-2 d-none d-sm-block">Isaaac M.</span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-md dropdown-menu-end" aria-labelledby="user_menu">
                                    <li>
                                        <div className="py-2 px-3 avatar avatar--lg">
                                            <div className="avatar__image">
                                                <img src="images/users/thumb.jpg" alt="user" />
                                            </div>
                                            <div className="avatar__content">
                                                <span className="avatar__title">Androws Kinny</span>
                                                <span className="avatar__subtitle">Artist</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dropdown-divider"></li>
                                    <li>
                                        <Link className="dropdown-item d-flex align-items-center" href="/dashboard">
                                            <i className="ri-user-3-line fs-5"></i>
                                            <span className="ps-2">Profile</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item d-flex align-items-center" href="/favorites">
                                            <i className="ri-heart-line fs-5"></i>
                                            <span className="ps-2">Favorites</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item d-flex align-items-center" href="/settings">
                                            <i className="ri-settings-line fs-5"></i>
                                            <span className="ps-2">Settings</span>
                                        </Link>
                                    </li>
                                    <li className="dropdown-divider"></li>
                                    <li>
                                        <Link className="dropdown-item d-flex align-items-center external text-danger" href="index.html">
                                            <i className="ri-logout-circle-line fs-5"></i>
                                            <span className="ps-2">Logout</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Search