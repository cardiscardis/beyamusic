import React from "react";

const Tracks = () => {
    return (
        <>
                <div className="section col-12">
                    
                    <div className="mat-tabs">
                        <ul className="nav nav-tabs" id="songs_list" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="recent" data-bs-toggle="tab" data-bs-target="#recent_pane" type="button" role="tab" aria-controls="recent_pane" aria-selected="true">Recent Played</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="trending" data-bs-toggle="tab" data-bs-target="#trending_pane" type="button" role="tab" aria-controls="trending_pane" aria-selected="false" tabIndex="-1">Trending</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="international" data-bs-toggle="tab" data-bs-target="#international_pane" type="button" role="tab" aria-controls="international_pane" aria-selected="false" tabIndex="-1">International</button>
                            </li>
                        </ul>
                    <span className="mat-tabs__line" style={{width: "61.5625px"}}></span></div>
                    
                    <div className="tab-content mt-4" id="songs_list_content">
                        <div className="tab-pane fade show active" id="recent_pane" role="tabpanel" aria-labelledby="recent" tabIndex="0">
                            
                            <div className="list">
                                <div className="list__item" data-song-id="2" data-song-name="Shack your butty" data-song-artist="Gerrina Linda" data-song-album="Hot shot" data-song-url="audio/ringtone-2.mp3" data-song-cover="images/cover/small/2.jpg">
                                    <div className="list__cover">
                                        <img src="images/cover/small/2.jpg" alt="Shack your butty" />
                                        <a href="javascript:void(0);" className="btn btn-play btn-sm btn-default btn-icon rounded-pill" data-play-id="2" aria-label="Play pause">
                                            <i className="ri-play-fill icon-play"></i>
                                            <i className="ri-pause-fill icon-pause"></i>
                                        </a>
                                    </div>
                                    <div className="list__content">
                                        <a href="song-details.html" className="list__title text-truncate">Shack your butty</a>
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
                                            <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="2">
                                                <i className="ri-heart-line heart-empty"></i>
                                                <i className="ri-heart-fill heart-fill"></i>
                                            </a>
                                        </li>
                                        <li>03:24</li>
                                        <li className="dropstart d-inline-flex">
                                            <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                                <i className="ri-more-fill"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-sm">
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-playlist-id="2">Add to playlist</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-queue-id="2">Add to queue</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-next-id="2">Next to play</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                                <li className="dropdown-divider"></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-play-id="2">Play</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="list__item" data-song-id="4" data-song-name="Say yes" data-song-artist="Johnny Marro" data-song-album="Say yes" data-song-url="audio/ringtone-4.mp3" data-song-cover="images/cover/small/4.jpg">
                                    <div className="list__cover">
                                        <img src="images/cover/small/4.jpg" alt="Say yes" />
                                        <a href="javascript:void(0);" className="btn btn-play btn-sm btn-default btn-icon rounded-pill" data-play-id="4" aria-label="Play pause">
                                            <i className="ri-play-fill icon-play"></i>
                                            <i className="ri-pause-fill icon-pause"></i>
                                        </a>
                                    </div>
                                    <div className="list__content">
                                        <a href="song-details.html" className="list__title text-truncate">Say yes</a>
                                        <p className="list__subtitle text-truncate">
                                            <a href="artist-details.html">Johnny Marro</a>
                                        </p>
                                    </div>
                                    <ul className="list__option">                                            
                                        <li>
                                            <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="4">
                                                <i className="ri-heart-line heart-empty"></i>
                                                <i className="ri-heart-fill heart-fill"></i>
                                            </a>
                                        </li>
                                        <li>04:20</li>
                                        <li className="dropstart d-inline-flex">
                                            <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                                <i className="ri-more-fill"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-sm">
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-playlist-id="4">Add to playlist</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-queue-id="4">Add to queue</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-next-id="4">Next to play</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                                <li className="dropdown-divider"></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-play-id="4">Play</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="list__item" data-song-id="6" data-song-name="Hey not me" data-song-artist="Rasomi Pelina" data-song-album="Find soul" data-song-url="audio/ringtone-6.mp3" data-song-cover="images/cover/small/6.jpg">
                                    <div className="list__cover">
                                        <img src="images/cover/small/6.jpg" alt="Hey not me" />
                                        <a href="javascript:void(0);" className="btn btn-play btn-sm btn-default btn-icon rounded-pill" data-play-id="6" aria-label="Play pause">
                                            <i className="ri-play-fill icon-play"></i>
                                            <i className="ri-pause-fill icon-pause"></i>
                                        </a>
                                    </div>
                                    <div className="list__content">
                                        <a href="song-details.html" className="list__title text-truncate">Hey not me</a>
                                        <p className="list__subtitle text-truncate">
                                            <a href="artist-details.html">Rasomi Pelina</a>
                                        </p>
                                    </div>
                                    <ul className="list__option">                                            
                                        <li>
                                            <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="6">
                                                <i className="ri-heart-line heart-empty"></i>
                                                <i className="ri-heart-fill heart-fill"></i>
                                            </a>
                                        </li>
                                        <li>01:12</li>
                                        <li className="dropstart d-inline-flex">
                                            <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                                <i className="ri-more-fill"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-sm">
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-playlist-id="6">Add to playlist</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-queue-id="6">Add to queue</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-next-id="6">Next to play</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                                <li className="dropdown-divider"></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-play-id="6">Play</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="list__item" data-song-id="8" data-song-name="Sadness inside" data-song-artist="Karen Jennings" data-song-album="Sadness" data-song-url="audio/ringtone-8.mp3" data-song-cover="images/cover/small/8.jpg">
                                    <div className="list__cover">
                                        <img src="images/cover/small/8.jpg" alt="Hey not me" />
                                        <a href="javascript:void(0);" className="btn btn-play btn-sm btn-default btn-icon rounded-pill" data-play-id="8" aria-label="Play pause">
                                            <i className="ri-play-fill icon-play"></i>
                                            <i className="ri-pause-fill icon-pause"></i>
                                        </a>
                                    </div>
                                    <div className="list__content">
                                        <a href="song-details.html" className="list__title text-truncate">Sadness inside</a>
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
                                            <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="8">
                                                <i className="ri-heart-line heart-empty"></i>
                                                <i className="ri-heart-fill heart-fill"></i>
                                            </a>
                                        </li>
                                        <li>02:37</li>
                                        <li className="dropstart d-inline-flex">
                                            <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                                <i className="ri-more-fill"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-sm">
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-playlist-id="8">Add to playlist</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-queue-id="8">Add to queue</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-next-id="8">Next to play</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                                <li className="dropdown-divider"></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-play-id="8">Play</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="list__item" data-song-id="10" data-song-name="Nothing like your eyes" data-song-artist="Nutty Nina" data-song-album="Lover soul" data-song-url="audio/ringtone-2.mp3" data-song-cover="images/cover/small/10.jpg">
                                    <div className="list__cover">
                                        <img src="images/cover/small/10.jpg" alt="Nothing like your eyes" />
                                        <a href="javascript:void(0);" className="btn btn-play btn-sm btn-default btn-icon rounded-pill" data-play-id="10" aria-label="Play pause">
                                            <i className="ri-play-fill icon-play"></i>
                                            <i className="ri-pause-fill icon-pause"></i>
                                        </a>
                                    </div>
                                    <div className="list__content">
                                        <a href="song-details.html" className="list__title text-truncate">Nothing like your eyes</a>
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
                                            <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="10">
                                                <i className="ri-heart-line heart-empty"></i>
                                                <i className="ri-heart-fill heart-fill"></i>
                                            </a>
                                        </li>
                                        <li>03:54</li>
                                        <li className="dropstart d-inline-flex">
                                            <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                                <i className="ri-more-fill"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-sm">
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-playlist-id="10">Add to playlist</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-queue-id="10">Add to queue</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-next-id="10">Next to play</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                                <li className="dropdown-divider"></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-play-id="10">Play</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                           
                        </div>
                        <div className="tab-pane fade" id="trending_pane" role="tabpanel" aria-labelledby="trending" tabIndex="0">
                            
                            <div className="list">
                                <div className="list__item" data-song-id="2" data-song-name="Shack your butty" data-song-artist="Gerrina Linda" data-song-album="Hot shot" data-song-url="audio/ringtone-2.mp3" data-song-cover="images/cover/small/2.jpg">
                                    <div className="list__cover">
                                        <img src="images/cover/small/2.jpg" alt="Shack your butty" />
                                        <a href="javascript:void(0);" className="btn btn-play btn-sm btn-default btn-icon rounded-pill" data-play-id="2" aria-label="Play pause">
                                            <i className="ri-play-fill icon-play"></i>
                                            <i className="ri-pause-fill icon-pause"></i>
                                        </a>
                                    </div>
                                    <div className="list__content">
                                        <a href="song-details.html" className="list__title text-truncate">Shack your butty</a>
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
                                            <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="2">
                                                <i className="ri-heart-line heart-empty"></i>
                                                <i className="ri-heart-fill heart-fill"></i>
                                            </a>
                                        </li>
                                        <li>03:24</li>
                                        <li className="dropstart d-inline-flex">
                                            <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                                <i className="ri-more-fill"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-sm">
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-playlist-id="2">Add to playlist</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-queue-id="2">Add to queue</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-next-id="2">Next to play</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                                <li className="dropdown-divider"></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-play-id="2">Play</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="list__item" data-song-id="4" data-song-name="Say yes" data-song-artist="Johnny Marro" data-song-album="Say yes" data-song-url="audio/ringtone-4.mp3" data-song-cover="images/cover/small/4.jpg">
                                    <div className="list__cover">
                                        <img src="images/cover/small/4.jpg" alt="Say yes" />
                                        <a href="javascript:void(0);" className="btn btn-play btn-sm btn-default btn-icon rounded-pill" data-play-id="4" aria-label="Play pause">
                                            <i className="ri-play-fill icon-play"></i>
                                            <i className="ri-pause-fill icon-pause"></i>
                                        </a>
                                    </div>
                                    <div className="list__content">
                                        <a href="song-details.html" className="list__title text-truncate">Say yes</a>
                                        <p className="list__subtitle text-truncate">
                                            <a href="artist-details.html">Johnny Marro</a>
                                        </p>
                                    </div>
                                    <ul className="list__option">                                            
                                        <li>
                                            <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="4">
                                                <i className="ri-heart-line heart-empty"></i>
                                                <i className="ri-heart-fill heart-fill"></i>
                                            </a>
                                        </li>
                                        <li>04:20</li>
                                        <li className="dropstart d-inline-flex">
                                            <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                                <i className="ri-more-fill"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-sm">
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-playlist-id="4">Add to playlist</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-queue-id="4">Add to queue</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-next-id="4">Next to play</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                                <li className="dropdown-divider"></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-play-id="4">Play</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="list__item" data-song-id="6" data-song-name="Hey not me" data-song-artist="Rasomi Pelina" data-song-album="Find soul" data-song-url="audio/ringtone-6.mp3" data-song-cover="images/cover/small/6.jpg">
                                    <div className="list__cover">
                                        <img src="images/cover/small/6.jpg" alt="Hey not me" />
                                        <a href="javascript:void(0);" className="btn btn-play btn-sm btn-default btn-icon rounded-pill" data-play-id="6" aria-label="Play pause">
                                            <i className="ri-play-fill icon-play"></i>
                                            <i className="ri-pause-fill icon-pause"></i>
                                        </a>
                                    </div>
                                    <div className="list__content">
                                        <a href="song-details.html" className="list__title text-truncate">Hey not me</a>
                                        <p className="list__subtitle text-truncate">
                                            <a href="artist-details.html">Rasomi Pelina</a>
                                        </p>
                                    </div>
                                    <ul className="list__option">                                            
                                        <li>
                                            <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="6">
                                                <i className="ri-heart-line heart-empty"></i>
                                                <i className="ri-heart-fill heart-fill"></i>
                                            </a>
                                        </li>
                                        <li>01:12</li>
                                        <li className="dropstart d-inline-flex">
                                            <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                                <i className="ri-more-fill"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-sm">
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-playlist-id="6">Add to playlist</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-queue-id="6">Add to queue</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-next-id="6">Next to play</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                                <li className="dropdown-divider"></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-play-id="6">Play</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="list__item" data-song-id="8" data-song-name="Sadness inside" data-song-artist="Karen Jennings" data-song-album="Sadness" data-song-url="audio/ringtone-8.mp3" data-song-cover="images/cover/small/8.jpg">
                                    <div className="list__cover">
                                        <img src="images/cover/small/8.jpg" alt="Hey not me" />
                                        <a href="javascript:void(0);" className="btn btn-play btn-sm btn-default btn-icon rounded-pill" data-play-id="8" aria-label="Play pause">
                                            <i className="ri-play-fill icon-play"></i>
                                            <i className="ri-pause-fill icon-pause"></i>
                                        </a>
                                    </div>
                                    <div className="list__content">
                                        <a href="song-details.html" className="list__title text-truncate">Sadness inside</a>
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
                                            <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="8">
                                                <i className="ri-heart-line heart-empty"></i>
                                                <i className="ri-heart-fill heart-fill"></i>
                                            </a>
                                        </li>
                                        <li>02:37</li>
                                        <li className="dropstart d-inline-flex">
                                            <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                                <i className="ri-more-fill"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-sm">
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-playlist-id="8">Add to playlist</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-queue-id="8">Add to queue</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-next-id="8">Next to play</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                                <li className="dropdown-divider"></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-play-id="8">Play</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="list__item" data-song-id="10" data-song-name="Nothing like your eyes" data-song-artist="Nutty Nina" data-song-album="Lover soul" data-song-url="audio/ringtone-2.mp3" data-song-cover="images/cover/small/10.jpg">
                                    <div className="list__cover">
                                        <img src="images/cover/small/10.jpg" alt="Nothing like your eyes" />
                                        <a href="javascript:void(0);" className="btn btn-play btn-sm btn-default btn-icon rounded-pill" data-play-id="10" aria-label="Play pause">
                                            <i className="ri-play-fill icon-play"></i>
                                            <i className="ri-pause-fill icon-pause"></i>
                                        </a>
                                    </div>
                                    <div className="list__content">
                                        <a href="song-details.html" className="list__title text-truncate">Nothing like your eyes</a>
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
                                            <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="10">
                                                <i className="ri-heart-line heart-empty"></i>
                                                <i className="ri-heart-fill heart-fill"></i>
                                            </a>
                                        </li>
                                        <li>03:54</li>
                                        <li className="dropstart d-inline-flex">
                                            <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                                <i className="ri-more-fill"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-sm">
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-playlist-id="10">Add to playlist</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-queue-id="10">Add to queue</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-next-id="10">Next to play</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                                <li className="dropdown-divider"></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-play-id="10">Play</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                        <div className="tab-pane fade" id="international_pane" role="tabpanel" aria-labelledby="international" tabIndex="0">
                            
                            <div className="list">
                                <div className="list__item" data-song-id="2" data-song-name="Shack your butty" data-song-artist="Gerrina Linda" data-song-album="Hot shot" data-song-url="audio/ringtone-2.mp3" data-song-cover="images/cover/small/2.jpg">
                                    <div className="list__cover">
                                        <img src="images/cover/small/2.jpg" alt="Shack your butty" />
                                        <a href="javascript:void(0);" className="btn btn-play btn-sm btn-default btn-icon rounded-pill" data-play-id="2" aria-label="Play pause">
                                            <i className="ri-play-fill icon-play"></i>
                                            <i className="ri-pause-fill icon-pause"></i>
                                        </a>
                                    </div>
                                    <div className="list__content">
                                        <a href="song-details.html" className="list__title text-truncate">Shack your butty</a>
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
                                            <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="2">
                                                <i className="ri-heart-line heart-empty"></i>
                                                <i className="ri-heart-fill heart-fill"></i>
                                            </a>
                                        </li>
                                        <li>03:24</li>
                                        <li className="dropstart d-inline-flex">
                                            <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                                <i className="ri-more-fill"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-sm">
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-playlist-id="2">Add to playlist</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-queue-id="2">Add to queue</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-next-id="2">Next to play</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                                <li className="dropdown-divider"></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-play-id="2">Play</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="list__item" data-song-id="4" data-song-name="Say yes" data-song-artist="Johnny Marro" data-song-album="Say yes" data-song-url="audio/ringtone-4.mp3" data-song-cover="images/cover/small/4.jpg">
                                    <div className="list__cover">
                                        <img src="images/cover/small/4.jpg" alt="Say yes" />
                                        <a href="javascript:void(0);" className="btn btn-play btn-sm btn-default btn-icon rounded-pill" data-play-id="4" aria-label="Play pause">
                                            <i className="ri-play-fill icon-play"></i>
                                            <i className="ri-pause-fill icon-pause"></i>
                                        </a>
                                    </div>
                                    <div className="list__content">
                                        <a href="song-details.html" className="list__title text-truncate">Say yes</a>
                                        <p className="list__subtitle text-truncate">
                                            <a href="artist-details.html">Johnny Marro</a>
                                        </p>
                                    </div>
                                    <ul className="list__option">                                            
                                        <li>
                                            <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="4">
                                                <i className="ri-heart-line heart-empty"></i>
                                                <i className="ri-heart-fill heart-fill"></i>
                                            </a>
                                        </li>
                                        <li>04:20</li>
                                        <li className="dropstart d-inline-flex">
                                            <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                                <i className="ri-more-fill"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-sm">
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-playlist-id="4">Add to playlist</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-queue-id="4">Add to queue</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-next-id="4">Next to play</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                                <li className="dropdown-divider"></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-play-id="4">Play</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="list__item" data-song-id="6" data-song-name="Hey not me" data-song-artist="Rasomi Pelina" data-song-album="Find soul" data-song-url="audio/ringtone-6.mp3" data-song-cover="images/cover/small/6.jpg">
                                    <div className="list__cover">
                                        <img src="images/cover/small/6.jpg" alt="Hey not me" />
                                        <a href="javascript:void(0);" className="btn btn-play btn-sm btn-default btn-icon rounded-pill" data-play-id="6" aria-label="Play pause">
                                            <i className="ri-play-fill icon-play"></i>
                                            <i className="ri-pause-fill icon-pause"></i>
                                        </a>
                                    </div>
                                    <div className="list__content">
                                        <a href="song-details.html" className="list__title text-truncate">Hey not me</a>
                                        <p className="list__subtitle text-truncate">
                                            <a href="artist-details.html">Rasomi Pelina</a>
                                        </p>
                                    </div>
                                    <ul className="list__option">                                            
                                        <li>
                                            <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="6">
                                                <i className="ri-heart-line heart-empty"></i>
                                                <i className="ri-heart-fill heart-fill"></i>
                                            </a>
                                        </li>
                                        <li>01:12</li>
                                        <li className="dropstart d-inline-flex">
                                            <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                                <i className="ri-more-fill"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-sm">
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-playlist-id="6">Add to playlist</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-queue-id="6">Add to queue</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-next-id="6">Next to play</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                                <li className="dropdown-divider"></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-play-id="6">Play</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="list__item" data-song-id="8" data-song-name="Sadness inside" data-song-artist="Karen Jennings" data-song-album="Sadness" data-song-url="audio/ringtone-8.mp3" data-song-cover="images/cover/small/8.jpg">
                                    <div className="list__cover">
                                        <img src="images/cover/small/8.jpg" alt="Hey not me" />
                                        <a href="javascript:void(0);" className="btn btn-play btn-sm btn-default btn-icon rounded-pill" data-play-id="8" aria-label="Play pause">
                                            <i className="ri-play-fill icon-play"></i>
                                            <i className="ri-pause-fill icon-pause"></i>
                                        </a>
                                    </div>
                                    <div className="list__content">
                                        <a href="song-details.html" className="list__title text-truncate">Sadness inside</a>
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
                                            <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="8">
                                                <i className="ri-heart-line heart-empty"></i>
                                                <i className="ri-heart-fill heart-fill"></i>
                                            </a>
                                        </li>
                                        <li>02:37</li>
                                        <li className="dropstart d-inline-flex">
                                            <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                                <i className="ri-more-fill"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-sm">
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-playlist-id="8">Add to playlist</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-queue-id="8">Add to queue</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-next-id="8">Next to play</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                                <li className="dropdown-divider"></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-play-id="8">Play</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="list__item" data-song-id="10" data-song-name="Nothing like your eyes" data-song-artist="Nutty Nina" data-song-album="Lover soul" data-song-url="audio/ringtone-2.mp3" data-song-cover="images/cover/small/10.jpg">
                                    <div className="list__cover">
                                        <img src="images/cover/small/10.jpg" alt="Nothing like your eyes" />
                                        <a href="javascript:void(0);" className="btn btn-play btn-sm btn-default btn-icon rounded-pill" data-play-id="10" aria-label="Play pause">
                                            <i className="ri-play-fill icon-play"></i>
                                            <i className="ri-pause-fill icon-pause"></i>
                                        </a>
                                    </div>
                                    <div className="list__content">
                                        <a href="song-details.html" className="list__title text-truncate">Nothing like your eyes</a>
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
                                            <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="10">
                                                <i className="ri-heart-line heart-empty"></i>
                                                <i className="ri-heart-fill heart-fill"></i>
                                            </a>
                                        </li>
                                        <li>03:54</li>
                                        <li className="dropstart d-inline-flex">
                                            <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                                <i className="ri-more-fill"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-sm">
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-playlist-id="10">Add to playlist</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-queue-id="10">Add to queue</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-next-id="10">Next to play</a></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                                <li className="dropdown-divider"></li>
                                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-play-id="10">Play</a></li>
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

export default Tracks