import React from "react";

const Albums = () => {
    return (
        <>
            <div className="section">
                <div className="section__head">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">All <span className="text-primary">Albums</span></h3>
                    </div>
                </div>
                <div className="list list--lg list--order">
                    <div className="row">
                        <div className="col-xl-6">
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
                                <ul className="list__option">
                                    <li>
                                        <span className="badge rounded-pill bg-info">
                                            <i className="ri-vip-crown-fill"></i>
                                        </span>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="100">
                                            <i className="ri-heart-line heart-empty"></i>
                                            <i className="ri-heart-fill heart-fill"></i>
                                        </a>
                                    </li>
                                    <li className="dropstart d-inline-flex">
                                        <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                            <i className="ri-more-fill"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-sm">
                                            <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-favorite-id="100">Favorite</a></li>
                                            <li><a className="dropdown-item" href="audio/ringtone-1.mp3" download="">Download</a></li>
                                            <li><a className="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                            <li className="dropdown-divider"></li>
                                            <li><a className="dropdown-item" href="album-details.html">View details</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
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
                                <ul className="list__option">
                                    <li>
                                        <span className="badge rounded-pill bg-info">
                                            <i className="ri-vip-crown-fill"></i>
                                        </span>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="101">
                                            <i className="ri-heart-line heart-empty"></i>
                                            <i className="ri-heart-fill heart-fill"></i>
                                        </a>
                                    </li>
                                    <li className="dropstart d-inline-flex">
                                        <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                            <i className="ri-more-fill"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-sm">
                                            <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-favorite-id="101">Favorite</a></li>
                                            <li><a className="dropdown-item" href="audio/ringtone-2.mp3" download="">Download</a></li>
                                            <li><a className="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                            <li className="dropdown-divider"></li>
                                            <li><a className="dropdown-item" href="album-details.html">View details</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
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
                                <ul className="list__option">
                                    <li>
                                        <span className="badge rounded-pill bg-info">
                                            <i className="ri-vip-crown-fill"></i>
                                        </span>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="102">
                                            <i className="ri-heart-line heart-empty"></i>
                                            <i className="ri-heart-fill heart-fill"></i>
                                        </a>
                                    </li>
                                    <li className="dropstart d-inline-flex">
                                        <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                            <i className="ri-more-fill"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-sm">
                                            <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-favorite-id="102">Favorite</a></li>
                                            <li><a className="dropdown-item" href="audio/ringtone-3.mp3" download="">Download</a></li>
                                            <li><a className="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                            <li className="dropdown-divider"></li>
                                            <li><a className="dropdown-item" href="album-details.html">View details</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
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
                                <ul className="list__option">    
                                    <li>
                                        <span className="badge rounded-pill bg-info">
                                            <i className="ri-vip-crown-fill"></i>
                                        </span>
                                    </li>                                        
                                    <li>
                                        <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="103">
                                            <i className="ri-heart-line heart-empty"></i>
                                            <i className="ri-heart-fill heart-fill"></i>
                                        </a>
                                    </li>
                                    <li className="dropstart d-inline-flex">
                                        <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                            <i className="ri-more-fill"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-sm">
                                            <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-favorite-id="103">Favorite</a></li>
                                            <li><a className="dropdown-item" href="audio/ringtone-4.mp3" download="">Download</a></li>
                                            <li><a className="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                            <li className="dropdown-divider"></li>
                                            <li><a className="dropdown-item" href="album-details.html">View details</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="list__item">
                                <a href="album-details.html" className="list__cover">
                                    <img src="images/cover/small/5.jpg" alt="Letter" />
                                </a>
                                <div className="list__content">
                                    <a href="album-details.html" className="list__title text-truncate">Letter</a>
                                    <p className="list__subtitle text-truncate">
                                        <a href="artist-details.html">Jina Moore &amp; Lenisa Gory</a>
                                    </p>
                                </div>
                                <ul className="list__option">  
                                    <li>
                                        <span className="badge rounded-pill bg-info">
                                            <i className="ri-vip-crown-fill"></i>
                                        </span>
                                    </li>                                          
                                    <li>
                                        <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="104">
                                            <i className="ri-heart-line heart-empty"></i>
                                            <i className="ri-heart-fill heart-fill"></i>
                                        </a>
                                    </li>
                                    <li className="dropstart d-inline-flex">
                                        <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                            <i className="ri-more-fill"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-sm">
                                            <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-favorite-id="104">Favorite</a></li>
                                            <li><a className="dropdown-item" href="audio/ringtone-5.mp3" download="">Download</a></li>
                                            <li><a className="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                            <li className="dropdown-divider"></li>
                                            <li><a className="dropdown-item" href="album-details.html">View details</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="list__item">
                                <a href="album-details.html" className="list__cover">
                                    <img src="images/cover/small/6.jpg" alt="Find soul" />
                                </a>
                                <div className="list__content">
                                    <a href="album-details.html" className="list__title text-truncate">Find soul</a>
                                    <p className="list__subtitle text-truncate">
                                        <a href="artist-details.html">Rasomi Pelina</a>
                                    </p>
                                </div>
                                <ul className="list__option">    
                                    <li>
                                        <span className="badge rounded-pill bg-info">
                                            <i className="ri-vip-crown-fill"></i>
                                        </span>
                                    </li>                                        
                                    <li>
                                        <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="105">
                                            <i className="ri-heart-line heart-empty"></i>
                                            <i className="ri-heart-fill heart-fill"></i>
                                        </a>
                                    </li>
                                    <li className="dropstart d-inline-flex">
                                        <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                            <i className="ri-more-fill"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-sm">
                                            <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-favorite-id="105">Favorite</a></li>
                                            <li><a className="dropdown-item" href="audio/ringtone-6.mp3" download="">Download</a></li>
                                            <li><a className="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                            <li className="dropdown-divider"></li>
                                            <li><a className="dropdown-item" href="album-details.html">View details</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="list__item">
                                <a href="album-details.html" className="list__cover">
                                    <img src="images/cover/small/7.jpg" alt="Deep inside" />
                                </a>
                                <div className="list__content">
                                    <a href="album-details.html" className="list__title text-truncate">Deep inside</a>
                                    <p className="list__subtitle text-truncate">
                                        <a href="artist-details.html">Pimila Holliwy</a>
                                    </p>
                                </div>
                                <ul className="list__option">    
                                    <li>
                                        <span className="badge rounded-pill bg-info">
                                            <i className="ri-vip-crown-fill"></i>
                                        </span>
                                    </li>                                        
                                    <li>
                                        <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="106">
                                            <i className="ri-heart-line heart-empty"></i>
                                            <i className="ri-heart-fill heart-fill"></i>
                                        </a>
                                    </li>
                                    <li className="dropstart d-inline-flex">
                                        <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                            <i className="ri-more-fill"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-sm">
                                            <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-favorite-id="106">Favorite</a></li>
                                            <li><a className="dropdown-item" href="audio/ringtone-7.mp3" download="">Download</a></li>
                                            <li><a className="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                            <li className="dropdown-divider"></li>
                                            <li><a className="dropdown-item" href="album-details.html">View details</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="list__item">
                                <a href="album-details.html" className="list__cover">
                                    <img src="images/cover/small/8.jpg" alt="Sadness" />
                                </a>
                                <div className="list__content">
                                    <a href="album-details.html" className="list__title text-truncate">Sadness</a>
                                    <p className="list__subtitle text-truncate">
                                        <a href="artist-details.html">Karen Jennings</a>
                                    </p>
                                </div>
                                <ul className="list__option">    
                                    <li>
                                        <span className="badge rounded-pill bg-info">
                                            <i className="ri-vip-crown-fill"></i>
                                        </span>
                                    </li>                                        
                                    <li>
                                        <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="107">
                                            <i className="ri-heart-line heart-empty"></i>
                                            <i className="ri-heart-fill heart-fill"></i>
                                        </a>
                                    </li>
                                    <li className="dropstart d-inline-flex">
                                        <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                            <i className="ri-more-fill"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-sm">
                                            <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-favorite-id="107">Favorite</a></li>
                                            <li><a className="dropdown-item" href="audio/ringtone-8.mp3" download="">Download</a></li>
                                            <li><a className="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                            <li className="dropdown-divider"></li>
                                            <li><a className="dropdown-item" href="album-details.html">View details</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="list__item">
                                <a href="album-details.html" className="list__cover">
                                    <img src="images/cover/small/9.jpg" alt="Electric wave" />
                                </a>
                                <div className="list__content">
                                    <a href="album-details.html" className="list__title text-truncate">Electric wave</a>
                                    <p className="list__subtitle text-truncate">
                                        <a href="artist-details.html">Lenisa Gory</a>
                                    </p>
                                </div>
                                <ul className="list__option">    
                                    <li>
                                        <span className="badge rounded-pill bg-info">
                                            <i className="ri-vip-crown-fill"></i>
                                        </span>
                                    </li>                                        
                                    <li>
                                        <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="108">
                                            <i className="ri-heart-line heart-empty"></i>
                                            <i className="ri-heart-fill heart-fill"></i>
                                        </a>
                                    </li>
                                    <li className="dropstart d-inline-flex">
                                        <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                            <i className="ri-more-fill"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-sm">
                                            <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-favorite-id="108">Favorite</a></li>
                                            <li><a className="dropdown-item" href="audio/ringtone-1.mp3" download="">Download</a></li>
                                            <li><a className="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                            <li className="dropdown-divider"></li>
                                            <li><a className="dropdown-item" href="album-details.html">View details</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="list__item">
                                <a href="album-details.html" className="list__cover">
                                    <img src="images/cover/small/10.jpg" alt="Lover soul" />
                                </a>
                                <div className="list__content">
                                    <a href="album-details.html" className="list__title text-truncate">Lover soul</a>
                                    <p className="list__subtitle text-truncate">
                                        <a href="artist-details.html">Nutty Nina</a>
                                    </p>
                                </div>
                                <ul className="list__option">    
                                    <li>
                                        <span className="badge rounded-pill bg-info">
                                            <i className="ri-vip-crown-fill"></i>
                                        </span>
                                    </li>                                        
                                    <li>
                                        <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="109">
                                            <i className="ri-heart-line heart-empty"></i>
                                            <i className="ri-heart-fill heart-fill"></i>
                                        </a>
                                    </li>
                                    <li className="dropstart d-inline-flex">
                                        <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                            <i className="ri-more-fill"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-sm">
                                            <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-favorite-id="109">Favorite</a></li>
                                            <li><a className="dropdown-item" href="audio/ringtone-2.mp3" download="">Download</a></li>
                                            <li><a className="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                            <li className="dropdown-divider"></li>
                                            <li><a className="dropdown-item" href="album-details.html">View details</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>                        
                </div>
            </div>
        </>
    )
}

export default Albums