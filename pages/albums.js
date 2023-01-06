import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Albums() {
  return (
    <>
        <div class="section">
            <div class="section__head">
                <h3 class="mb-0">Trending <span class="text-primary">Albums</span></h3>
            </div>
            <div class="swiper-carousel swiper-carousel-button">
                <div class="swiper" data-swiper-slides="5" data-swiper-autoplay="true">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="cover cover--round">
                                <div class="cover__head">
                                    <ul class="cover__label d-flex">
                                        <li>
                                            <span class="badge rounded-pill bg-danger">
                                                <i class="ri-heart-fill"></i>
                                            </span>
                                        </li>
                                    </ul>
                                    <div class="cover__options dropstart d-inline-flex ms-auto">
                                        <a class="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                            <i class="ri-more-2-fill"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-sm">
                                            <li><a class="dropdown-item" href="javascript:void(0);" role="button" data-favorite-id="100">Favorite</a></li>
                                            <li><a class="dropdown-item" href="audio/ringtone-1.mp3" download>Download</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                            <li class="dropdown-divider"></li>
                                            <li><a class="dropdown-item" href="album-details.html">View details</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <a href="album-details.html" class="cover__image">
                                    <img src="images/cover/large/1.jpg" alt="Mummy" />
                                </a>
                                <div class="cover__foot">
                                    <a href="album-details.html" class="cover__title text-truncate">Mummy</a>
                                    <p class="cover__subtitle text-truncate">
                                        <a href="artist-details.html">Arebica Luna</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="cover cover--round">
                                <div class="cover__head">
                                    <ul class="cover__label d-flex">
                                        <li>
                                            <span class="badge rounded-pill bg-info">
                                                <i class="ri-vip-crown-fill"></i>
                                            </span>
                                        </li>
                                    </ul>
                                    <div class="cover__options dropstart d-inline-flex ms-auto">
                                        <a class="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                            <i class="ri-more-2-fill"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-sm">
                                            <li><a class="dropdown-item" href="javascript:void(0);" role="button" data-favorite-id="101">Favorite</a></li>
                                            <li><a class="dropdown-item" href="audio/ringtone-2.mp3" download>Download</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                            <li class="dropdown-divider"></li>
                                            <li><a class="dropdown-item" href="album-details.html">View details</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <a href="album-details.html" class="cover__image">
                                    <img src="images/cover/large/2.jpg" alt="Hot shot" />
                                </a>
                                <div class="cover__foot">
                                    <a href="album-details.html" class="cover__title text-truncate">Hot shot</a>
                                    <p class="cover__subtitle text-truncate">
                                        <a href="artist-details.html">Gerrina Linda</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="cover cover--round">
                                <div class="cover__head">
                                    <div class="cover__options dropstart d-inline-flex ms-auto">
                                        <a class="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                            <i class="ri-more-2-fill"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-sm">
                                            <li><a class="dropdown-item" href="javascript:void(0);" role="button" data-favorite-id="102">Favorite</a></li>
                                            <li><a class="dropdown-item" href="audio/ringtone-3.mp3" download>Download</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                            <li class="dropdown-divider"></li>
                                            <li><a class="dropdown-item" href="album-details.html">View details</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <a href="album-details.html" class="cover__image">
                                    <img src="images/cover/large/3.jpg" alt="Own way" />
                                </a>
                                <div class="cover__foot">
                                    <a href="album-details.html" class="cover__title text-truncate">Own way</a>
                                    <p class="cover__subtitle text-truncate">
                                        <a href="artist-details.html">Zunira Willy</a>,
                                        <a href="artist-details.html">Nutty Nina</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="cover cover--round">
                                <div class="cover__head">
                                    <ul class="cover__label d-flex">
                                        <li>
                                            <span class="badge rounded-pill bg-danger">
                                                <i class="ri-heart-fill"></i>
                                            </span>
                                        </li>
                                        <li>
                                            <span class="badge rounded-pill bg-info">
                                                <i class="ri-vip-crown-fill"></i>
                                            </span>
                                        </li>
                                    </ul>
                                    <div class="cover__options dropstart d-inline-flex ms-auto">
                                        <a class="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                            <i class="ri-more-2-fill"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-sm">
                                            <li><a class="dropdown-item" href="javascript:void(0);" role="button" data-favorite-id="103">Favorite</a></li>
                                            <li><a class="dropdown-item" href="audio/ringtone-4.mp3" download>Download</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                            <li class="dropdown-divider"></li>
                                            <li><a class="dropdown-item" href="album-details.html">View details</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <a href="album-details.html" class="cover__image">
                                    <img src="images/cover/large/4.jpg" alt="Say yes" />
                                </a>
                                <div class="cover__foot">
                                    <a href="album-details.html" class="cover__title text-truncate">Say yes</a>
                                    <p class="cover__subtitle text-truncate">
                                        <a href="artist-details.html">Johnny Marro</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="cover cover--round">
                                <div class="cover__head">
                                    <ul class="cover__label d-flex">
                                        <li>
                                            <span class="badge rounded-pill bg-info">
                                                <i class="ri-vip-crown-fill"></i>
                                            </span>
                                        </li>
                                    </ul>
                                    <div class="cover__options dropstart d-inline-flex ms-auto">
                                        <a class="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                            <i class="ri-more-2-fill"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-sm">
                                            <li><a class="dropdown-item" href="javascript:void(0);" role="button" data-favorite-id="104">Favorite</a></li>
                                            <li><a class="dropdown-item" href="audio/ringtone-5.mp3" download>Download</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                            <li class="dropdown-divider"></li>
                                            <li><a class="dropdown-item" href="album-details.html">View details</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <a href="album-details.html" class="cover__image">
                                    <img src="images/cover/large/5.jpg" alt="Letter" />
                                </a>
                                <div class="cover__foot">
                                    <a href="album-details.html" class="cover__title text-truncate">Letter</a>
                                    <p class="cover__subtitle text-truncate">
                                        <a href="artist-details.html">Jina Moore</a>,
                                        <a href="artist-details.html">Lenisa Gory</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="cover cover--round">
                                <div class="cover__head">
                                    <ul class="cover__label d-flex">
                                        <li>
                                            <span class="badge rounded-pill bg-info">
                                                <i class="ri-vip-crown-fill"></i>
                                            </span>
                                        </li>
                                    </ul>
                                    <div class="cover__options dropstart d-inline-flex ms-auto">
                                        <a class="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                            <i class="ri-more-2-fill"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-sm">
                                            <li><a class="dropdown-item" href="javascript:void(0);" role="button" data-favorite-id="105">Favorite</a></li>
                                            <li><a class="dropdown-item" href="audio/ringtone-6.mp3" download>Download</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                            <li class="dropdown-divider"></li>
                                            <li><a class="dropdown-item" href="album-details.html">View details</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <a href="album-details.html" class="cover__image">
                                    <img src="images/cover/large/6.jpg" alt="Find soul" />
                                </a>
                                <div class="cover__foot">
                                    <a href="album-details.html" class="cover__title text-truncate">Find soul</a>
                                    <p class="cover__subtitle text-truncate">
                                        <a href="artist-details.html">Rasomi Pelina</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="swiper-button-prev btn-default rounded-pill"></div>
                <div class="swiper-button-next btn-default rounded-pill"></div>
            </div>

        </div>
        <div class="section">
            <div class="section__head align-items-center">
                <span class="d-block pe-3 fs-6 fw-semi-bold">10245 Albums in the list</span>
                <div>
                    <select class="form-select" aria-label="Filter album">
                        <option value="Popular">Popular</option>
                        <option value="Most loved">Most loved</option>
                        <option value="A to Z">A to Z</option>
                        <option value="Z to A">Z to A</option>
                    </select>
                </div>
            </div>
            <div class="list list--lg">
                <div class="row">
                    <div class="col-xl-6">
                        <div class="list__item">
                            <a href="album-details.html" class="list__cover">
                                <img src="images/cover/small/1.jpg" alt="Mummy" />
                            </a>
                            <div class="list__content">
                                <a href="album-details.html" class="list__title text-truncate">Mummy</a>
                                <p class="list__subtitle text-truncate">
                                    <a href="artist-details.html">Arebica Luna</a>
                                </p>
                            </div>
                            <ul class="list__option">
                                <li>
                                    <a href="javascript:void(0);" role="button" class="d-inline-flex" aria-label="Favorite" data-favorite-id="100">
                                        <i class="ri-heart-line heart-empty"></i>
                                        <i class="ri-heart-fill heart-fill"></i>
                                    </a>
                                </li>
                                <li class="dropstart d-inline-flex">
                                    <a class="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                        <i class="ri-more-fill"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-sm">
                                        <li><a class="dropdown-item" href="javascript:void(0);" role="button" data-favorite-id="100">Favorite</a></li>
                                        <li><a class="dropdown-item" href="audio/ringtone-1.mp3" download>Download</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                        <li class="dropdown-divider"></li>
                                        <li><a class="dropdown-item" href="album-details.html">View details</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="list__item">
                            <a href="album-details.html" class="list__cover">
                                <img src="images/cover/small/2.jpg" alt="Hot shot" />
                            </a>
                            <div class="list__content">
                                <a href="album-details.html" class="list__title text-truncate">Hot shot</a>
                                <p class="list__subtitle text-truncate">
                                    <a href="artist-details.html">Gerrina Linda</a>
                                </p>
                            </div>
                            <ul class="list__option">
                                <li>
                                    <span class="badge rounded-pill bg-info">
                                        <i class="ri-vip-crown-fill"></i>
                                    </span>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" role="button" class="d-inline-flex" aria-label="Favorite" data-favorite-id="101">
                                        <i class="ri-heart-line heart-empty"></i>
                                        <i class="ri-heart-fill heart-fill"></i>
                                    </a>
                                </li>
                                <li class="dropstart d-inline-flex">
                                    <a class="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                        <i class="ri-more-fill"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-sm">
                                        <li><a class="dropdown-item" href="javascript:void(0);" role="button" data-favorite-id="101">Favorite</a></li>
                                        <li><a class="dropdown-item" href="audio/ringtone-2.mp3" download>Download</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                        <li class="dropdown-divider"></li>
                                        <li><a class="dropdown-item" href="album-details.html">View details</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="list__item">
                            <a href="album-details.html" class="list__cover">
                                <img src="images/cover/small/3.jpg" alt="Own way" />
                            </a>
                            <div class="list__content">
                                <a href="album-details.html" class="list__title text-truncate">Own way</a>
                                <p class="list__subtitle text-truncate">
                                    <a href="artist-details.html">Zunira Willy & Nutty Nina</a>
                                </p>
                            </div>
                            <ul class="list__option">
                                <li>
                                    <a href="javascript:void(0);" role="button" class="d-inline-flex" aria-label="Favorite" data-favorite-id="102">
                                        <i class="ri-heart-line heart-empty"></i>
                                        <i class="ri-heart-fill heart-fill"></i>
                                    </a>
                                </li>
                                <li class="dropstart d-inline-flex">
                                    <a class="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                        <i class="ri-more-fill"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-sm">
                                        <li><a class="dropdown-item" href="javascript:void(0);" role="button" data-favorite-id="102">Favorite</a></li>
                                        <li><a class="dropdown-item" href="audio/ringtone-3.mp3" download>Download</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                        <li class="dropdown-divider"></li>
                                        <li><a class="dropdown-item" href="album-details.html">View details</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="list__item">
                            <a href="album-details.html" class="list__cover">
                                <img src="images/cover/small/4.jpg" alt="Say yes" />
                            </a>
                            <div class="list__content">
                                <a href="album-details.html" class="list__title text-truncate">Say yes</a>
                                <p class="list__subtitle text-truncate">
                                    <a href="artist-details.html">Johnny Marro</a>
                                </p>
                            </div>
                            <ul class="list__option">                                     
                                <li>
                                    <a href="javascript:void(0);" role="button" class="d-inline-flex" aria-label="Favorite" data-favorite-id="103">
                                        <i class="ri-heart-line heart-empty"></i>
                                        <i class="ri-heart-fill heart-fill"></i>
                                    </a>
                                </li>
                                <li class="dropstart d-inline-flex">
                                    <a class="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                        <i class="ri-more-fill"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-sm">
                                        <li><a class="dropdown-item" href="javascript:void(0);" role="button" data-favorite-id="103">Favorite</a></li>
                                        <li><a class="dropdown-item" href="audio/ringtone-4.mp3" download>Download</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                        <li class="dropdown-divider"></li>
                                        <li><a class="dropdown-item" href="album-details.html">View details</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="list__item">
                            <a href="album-details.html" class="list__cover">
                                <img src="images/cover/small/5.jpg" alt="Letter" />
                            </a>
                            <div class="list__content">
                                <a href="album-details.html" class="list__title text-truncate">Letter</a>
                                <p class="list__subtitle text-truncate">
                                    <a href="artist-details.html">Jina Moore & Lenisa Gory</a>
                                </p>
                            </div>
                            <ul class="list__option">  
                                <li>
                                    <span class="badge rounded-pill bg-info">
                                        <i class="ri-vip-crown-fill"></i>
                                    </span>
                                </li>                                          
                                <li>
                                    <a href="javascript:void(0);" role="button" class="d-inline-flex" aria-label="Favorite" data-favorite-id="104">
                                        <i class="ri-heart-line heart-empty"></i>
                                        <i class="ri-heart-fill heart-fill"></i>
                                    </a>
                                </li>
                                <li class="dropstart d-inline-flex">
                                    <a class="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                        <i class="ri-more-fill"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-sm">
                                        <li><a class="dropdown-item" href="javascript:void(0);" role="button" data-favorite-id="104">Favorite</a></li>
                                        <li><a class="dropdown-item" href="audio/ringtone-5.mp3" download>Download</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                        <li class="dropdown-divider"></li>
                                        <li><a class="dropdown-item" href="album-details.html">View details</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="list__item">
                            <a href="album-details.html" class="list__cover">
                                <img src="images/cover/small/6.jpg" alt="Find soul" />
                            </a>
                            <div class="list__content">
                                <a href="album-details.html" class="list__title text-truncate">Find soul</a>
                                <p class="list__subtitle text-truncate">
                                    <a href="artist-details.html">Rasomi Pelina</a>
                                </p>
                            </div>
                            <ul class="list__option">    
                                <li>
                                    <span class="badge rounded-pill bg-info">
                                        <i class="ri-vip-crown-fill"></i>
                                    </span>
                                </li>                                        
                                <li>
                                    <a href="javascript:void(0);" role="button" class="d-inline-flex" aria-label="Favorite" data-favorite-id="105">
                                        <i class="ri-heart-line heart-empty"></i>
                                        <i class="ri-heart-fill heart-fill"></i>
                                    </a>
                                </li>
                                <li class="dropstart d-inline-flex">
                                    <a class="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                        <i class="ri-more-fill"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-sm">
                                        <li><a class="dropdown-item" href="javascript:void(0);" role="button" data-favorite-id="105">Favorite</a></li>
                                        <li><a class="dropdown-item" href="audio/ringtone-6.mp3" download>Download</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                        <li class="dropdown-divider"></li>
                                        <li><a class="dropdown-item" href="album-details.html">View details</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="list__item">
                            <a href="album-details.html" class="list__cover">
                                <img src="images/cover/small/7.jpg" alt="Deep inside" />
                            </a>
                            <div class="list__content">
                                <a href="album-details.html" class="list__title text-truncate">Deep inside</a>
                                <p class="list__subtitle text-truncate">
                                    <a href="artist-details.html">Pimila Holliwy</a>
                                </p>
                            </div>
                            <ul class="list__option">    
                                <li>
                                    <span class="badge rounded-pill bg-info">
                                        <i class="ri-vip-crown-fill"></i>
                                    </span>
                                </li>                                        
                                <li>
                                    <a href="javascript:void(0);" role="button" class="d-inline-flex" aria-label="Favorite" data-favorite-id="106">
                                        <i class="ri-heart-line heart-empty"></i>
                                        <i class="ri-heart-fill heart-fill"></i>
                                    </a>
                                </li>
                                <li class="dropstart d-inline-flex">
                                    <a class="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                        <i class="ri-more-fill"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-sm">
                                        <li><a class="dropdown-item" href="javascript:void(0);" role="button" data-favorite-id="106">Favorite</a></li>
                                        <li><a class="dropdown-item" href="audio/ringtone-7.mp3" download>Download</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                        <li class="dropdown-divider"></li>
                                        <li><a class="dropdown-item" href="album-details.html">View details</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="list__item">
                            <a href="album-details.html" class="list__cover">
                                <img src="images/cover/small/8.jpg" alt="Sadness" />
                            </a>
                            <div class="list__content">
                                <a href="album-details.html" class="list__title text-truncate">Sadness</a>
                                <p class="list__subtitle text-truncate">
                                    <a href="artist-details.html">Karen Jennings</a>
                                </p>
                            </div>
                            <ul class="list__option">
                                <li>
                                    <a href="javascript:void(0);" role="button" class="d-inline-flex" aria-label="Favorite" data-favorite-id="107">
                                        <i class="ri-heart-line heart-empty"></i>
                                        <i class="ri-heart-fill heart-fill"></i>
                                    </a>
                                </li>
                                <li class="dropstart d-inline-flex">
                                    <a class="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                        <i class="ri-more-fill"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-sm">
                                        <li><a class="dropdown-item" href="javascript:void(0);" role="button" data-favorite-id="107">Favorite</a></li>
                                        <li><a class="dropdown-item" href="audio/ringtone-8.mp3" download>Download</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                        <li class="dropdown-divider"></li>
                                        <li><a class="dropdown-item" href="album-details.html">View details</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="list__item">
                            <a href="album-details.html" class="list__cover">
                                <img src="images/cover/small/9.jpg" alt="Electric wave" />
                            </a>
                            <div class="list__content">
                                <a href="album-details.html" class="list__title text-truncate">Electric wave</a>
                                <p class="list__subtitle text-truncate">
                                    <a href="artist-details.html">Lenisa Gory</a>
                                </p>
                            </div>
                            <ul class="list__option">    
                                <li>
                                    <span class="badge rounded-pill bg-info">
                                        <i class="ri-vip-crown-fill"></i>
                                    </span>
                                </li>                                        
                                <li>
                                    <a href="javascript:void(0);" role="button" class="d-inline-flex" aria-label="Favorite" data-favorite-id="108">
                                        <i class="ri-heart-line heart-empty"></i>
                                        <i class="ri-heart-fill heart-fill"></i>
                                    </a>
                                </li>
                                <li class="dropstart d-inline-flex">
                                    <a class="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                        <i class="ri-more-fill"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-sm">
                                        <li><a class="dropdown-item" href="javascript:void(0);" role="button" data-favorite-id="108">Favorite</a></li>
                                        <li><a class="dropdown-item" href="audio/ringtone-1.mp3" download>Download</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                        <li class="dropdown-divider"></li>
                                        <li><a class="dropdown-item" href="album-details.html">View details</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="list__item">
                            <a href="album-details.html" class="list__cover">
                                <img src="images/cover/small/10.jpg" alt="Lover soul" />
                            </a>
                            <div class="list__content">
                                <a href="album-details.html" class="list__title text-truncate">Lover soul</a>
                                <p class="list__subtitle text-truncate">
                                    <a href="artist-details.html">Nutty Nina</a>
                                </p>
                            </div>
                            <ul class="list__option">    
                                <li>
                                    <span class="badge rounded-pill bg-info">
                                        <i class="ri-vip-crown-fill"></i>
                                    </span>
                                </li>                                        
                                <li>
                                    <a href="javascript:void(0);" role="button" class="d-inline-flex" aria-label="Favorite" data-favorite-id="109">
                                        <i class="ri-heart-line heart-empty"></i>
                                        <i class="ri-heart-fill heart-fill"></i>
                                    </a>
                                </li>
                                <li class="dropstart d-inline-flex">
                                    <a class="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                        <i class="ri-more-fill"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-sm">
                                        <li><a class="dropdown-item" href="javascript:void(0);" role="button" data-favorite-id="109">Favorite</a></li>
                                        <li><a class="dropdown-item" href="audio/ringtone-2.mp3" download>Download</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                        <li class="dropdown-divider"></li>
                                        <li><a class="dropdown-item" href="album-details.html">View details</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>                        
            </div>

            <div class="mt-5 text-center">
                <a href="javascript:void(0);" class="btn btn-primary">
                    <div class="btn__wrap">
                        <i class="ri-loader-3-fill"></i>
                        <span>Load more</span>
                    </div>
                </a>
            </div>
        </div>
    </>
  )
}
