import Head from 'next/head'
import Image from 'next/image'
//import { Inter } from '@next/font/google'

//const inter = Inter({ subsets: ['latin'] })

export default function Genredetails() {
  return (
    <>
      <div className="section">
          <div className="section__head">
              <h3 className="mb-0">Rumba</h3>
          </div>
          <div className="list">
              <div className="row">
                  <div className="col-xl-6">
                      <div className="list__item" 
                      data-song-id="1"
                      data-song-name="I love you mummy"
                      data-song-artist="Arebica Luna"
                      data-song-album="Mummy"
                      data-song-url="audio/ringtone-1.mp3"
                      data-song-cover="images/cover/small/1.jpg">
                          <div className="list__cover">
                              <img src="images/cover/small/1.jpg" alt="I love you mummy" />
                              <a href="javascript:void(0);" className="btn btn-play btn-sm btn-default btn-icon rounded-pill" data-play-id="1" aria-label="Play pause">
                                  <i className="ri-play-fill icon-play"></i>
                                  <i className="ri-pause-fill icon-pause"></i>
                              </a>
                          </div>
                          <div className="list__content">
                              <a href="song-details.html" className="list__title text-truncate">I love you mummy</a>
                              <p className="list__subtitle text-truncate">
                                  <a href="artist-details.html">Arebica Luna</a>
                              </p>
                          </div>
                          <ul className="list__option">
                              <li>
                                  <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="1">
                                      <i className="ri-heart-line heart-empty"></i>
                                      <i className="ri-heart-fill heart-fill"></i>
                                  </a>
                              </li>
                              <li>01:14</li>
                              <li className="dropstart d-inline-flex">
                                  <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                      <i className="ri-more-fill"></i>
                                  </a>
                                  <ul className="dropdown-menu dropdown-menu-sm">
                                      <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-playlist-id="1">Add to playlist</a></li>
                                      <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-queue-id="1">Add to queue</a></li>
                                      <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-next-id="1">Next to play</a></li>
                                      <li><a className="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                      <li className="dropdown-divider"></li>
                                      <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-play-id="1">Play</a></li>
                                  </ul>
                              </li>
                          </ul>
                      </div>
                      <div className="list__item"
                      data-song-id="2"
                      data-song-name="Shack your butty"
                      data-song-artist="Gerrina Linda"
                      data-song-album="Hot shot"
                      data-song-url="audio/ringtone-2.mp3"
                      data-song-cover="images/cover/small/2.jpg">
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
                      <div className="list__item"
                      data-song-id="3"
                      data-song-name="Do it your way(Female)"
                      data-song-artist="Zunira Willy & Nutty Nina"
                      data-song-album="Own way"
                      data-song-url="audio/ringtone-3.mp3"
                      data-song-cover="images/cover/small/3.jpg">
                          <div className="list__cover">
                              <img src="images/cover/small/3.jpg" alt="Do it your way(Female)" />
                              <a href="javascript:void(0);" className="btn btn-play btn-sm btn-default btn-icon rounded-pill" data-play-id="3" aria-label="Play pause">
                                  <i className="ri-play-fill icon-play"></i>
                                  <i className="ri-pause-fill icon-pause"></i>
                              </a>
                          </div>
                          <div className="list__content">
                              <a href="song-details.html" className="list__title text-truncate">Do it your way(Female)</a>
                              <p className="list__subtitle text-truncate">
                                  <a href="artist-details.html">Zunira Willy & Nutty Nina</a>
                              </p>
                          </div>
                          <ul className="list__option">
                              <li>
                                  <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="3">
                                      <i className="ri-heart-line heart-empty"></i>
                                      <i className="ri-heart-fill heart-fill"></i>
                                  </a>
                              </li>
                              <li>01:41</li>
                              <li className="dropstart d-inline-flex">
                                  <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                      <i className="ri-more-fill"></i>
                                  </a>
                                  <ul className="dropdown-menu dropdown-menu-sm">
                                      <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-playlist-id="3">Add to playlist</a></li>
                                      <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-queue-id="3">Add to queue</a></li>
                                      <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-next-id="3">Next to play</a></li>
                                      <li><a className="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                      <li className="dropdown-divider"></li>
                                      <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-play-id="3">Play</a></li>
                                  </ul>
                              </li>
                          </ul>
                      </div>
                      <div className="list__item"
                      data-song-id="4"
                      data-song-name="Say yes"
                      data-song-artist="Johnny Marro"
                      data-song-album="Say yes"
                      data-song-url="audio/ringtone-4.mp3"
                      data-song-cover="images/cover/small/4.jpg">
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
                              <li>02:20</li>
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
                      <div className="list__item"
                      data-song-id="5"
                      data-song-name="Where is your letter"
                      data-song-artist="Jina Moore & Lenisa Gory"
                      data-song-album="Letter"
                      data-song-url="audio/ringtone-5.mp3"
                      data-song-cover="images/cover/small/5.jpg">
                          <div className="list__cover">
                              <img src="images/cover/small/5.jpg" alt="Where is your letter" />
                              <a href="javascript:void(0);" className="btn btn-play btn-sm btn-default btn-icon rounded-pill" data-play-id="5" aria-label="Play pause">
                                  <i className="ri-play-fill icon-play"></i>
                                  <i className="ri-pause-fill icon-pause"></i>
                              </a>
                          </div>
                          <div className="list__content">
                              <a href="song-details.html" className="list__title text-truncate">Where is your letter</a>
                              <p className="list__subtitle text-truncate">
                                  <a href="artist-details.html">Jina Moore & Lenisa Gory</a>
                              </p>
                          </div>
                          <ul className="list__option">  
                              <li>
                                  <span className="badge rounded-pill bg-info">
                                      <i className="ri-vip-crown-fill"></i>
                                  </span>
                              </li>                                          
                              <li>
                                  <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="5">
                                      <i className="ri-heart-line heart-empty"></i>
                                      <i className="ri-heart-fill heart-fill"></i>
                                  </a>
                              </li>
                              <li>02:36</li>
                              <li className="dropstart d-inline-flex">
                                  <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                      <i className="ri-more-fill"></i>
                                  </a>
                                  <ul className="dropdown-menu dropdown-menu-sm">
                                      <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-playlist-id="5">Add to playlist</a></li>
                                      <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-queue-id="5">Add to queue</a></li>
                                      <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-next-id="5">Next to play</a></li>
                                      <li><a className="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                      <li className="dropdown-divider"></li>
                                      <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-play-id="5">Play</a></li>
                                  </ul>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-xl-6">
                      <div className="list__item"
                      data-song-id="6"
                      data-song-name="Hey not me"
                      data-song-artist="Rasomi Pelina"
                      data-song-album="Find soul"
                      data-song-url="audio/ringtone-6.mp3"
                      data-song-cover="images/cover/small/6.jpg">
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
                              <li>03:47</li>
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
                      <div className="list__item"
                      data-song-id="7"
                      data-song-name="Deep inside"
                      data-song-artist="Pimila Holliwy"
                      data-song-album="Deep inside"
                      data-song-url="audio/ringtone-7.mp3"
                      data-song-cover="images/cover/small/7.jpg">
                          <div className="list__cover">
                              <img src="images/cover/small/7.jpg" alt="Deep inside" />
                              <a href="javascript:void(0);" className="btn btn-play btn-sm btn-default btn-icon rounded-pill" data-play-id="7" aria-label="Play pause">
                                  <i className="ri-play-fill icon-play"></i>
                                  <i className="ri-pause-fill icon-pause"></i>
                              </a>
                          </div>
                          <div className="list__content">
                              <a href="song-details.html" className="list__title text-truncate">Deep inside</a>
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
                                  <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="7">
                                      <i className="ri-heart-line heart-empty"></i>
                                      <i className="ri-heart-fill heart-fill"></i>
                                  </a>
                              </li>
                              <li>01:04</li>
                              <li className="dropstart d-inline-flex">
                                  <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                      <i className="ri-more-fill"></i>
                                  </a>
                                  <ul className="dropdown-menu dropdown-menu-sm">
                                      <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-playlist-id="7">Add to playlist</a></li>
                                      <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-queue-id="7">Add to queue</a></li>
                                      <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-next-id="7">Next to play</a></li>
                                      <li><a className="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                      <li className="dropdown-divider"></li>
                                      <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-play-id="7">Play</a></li>
                                  </ul>
                              </li>
                          </ul>
                      </div>
                      <div className="list__item"
                      data-song-id="8"
                      data-song-name="Sadness inside"
                      data-song-artist="Karen Jennings"
                      data-song-album="Sadness"
                      data-song-url="audio/ringtone-8.mp3"
                      data-song-cover="images/cover/small/8.jpg">
                          <div className="list__cover">
                              <img src="images/cover/small/8.jpg" alt="Sadness" />
                              <a href="javascript:void(0);" className="btn btn-play btn-sm btn-default btn-icon rounded-pill" data-play-id="8" aria-label="Play pause">
                                  <i className="ri-play-fill icon-play"></i>
                                  <i className="ri-pause-fill icon-pause"></i>
                              </a>
                          </div>
                          <div className="list__content">
                              <a href="song-details.html" className="list__title text-truncate">Sadness</a>
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
                              <li>04:43</li>
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
                      <div className="list__item"
                      data-song-id="9"
                      data-song-name="Electric wave"
                      data-song-artist="Lenisa Gory"
                      data-song-album="Electric wave"
                      data-song-url="audio/ringtone-3.mp3"
                      data-song-cover="images/cover/small/9.jpg">
                          <div className="list__cover">
                              <img src="images/cover/small/9.jpg" alt="Electric wave" />
                              <a href="javascript:void(0);" className="btn btn-play btn-sm btn-default btn-icon rounded-pill" data-play-id="9" aria-label="Play pause">
                                  <i className="ri-play-fill icon-play"></i>
                                  <i className="ri-pause-fill icon-pause"></i>
                              </a>
                          </div>
                          <div className="list__content">
                              <a href="song-details.html" className="list__title text-truncate">Electric wave</a>
                              <p className="list__subtitle text-truncate">
                                  <a href="artist-details.html">Lenisa Gory</a>
                              </p>
                          </div>
                          <ul className="list__option">                                      
                              <li>
                                  <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="9">
                                      <i className="ri-heart-line heart-empty"></i>
                                      <i className="ri-heart-fill heart-fill"></i>
                                  </a>
                              </li>
                              <li>02:48</li>
                              <li className="dropstart d-inline-flex">
                                  <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                      <i className="ri-more-fill"></i>
                                  </a>
                                  <ul className="dropdown-menu dropdown-menu-sm">
                                      <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-playlist-id="9">Add to playlist</a></li>
                                      <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-queue-id="9">Add to queue</a></li>
                                      <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-next-id="9">Next to play</a></li>
                                      <li><a className="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
                                      <li className="dropdown-divider"></li>
                                      <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-play-id="9">Play</a></li>
                                  </ul>
                              </li>
                          </ul>
                      </div>
                      <div className="list__item"
                      data-song-id="10"
                      data-song-name="Nothing like your eyes"
                      data-song-artist="Nutty Nina"
                      data-song-album="Lover soul"
                      data-song-url="audio/ringtone-2.mp3"
                      data-song-cover="images/cover/small/10.jpg">
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
                                  <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="10">
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
          <div className="mt-5 text-center">
              <a href="javascript:void(0);" className="btn btn-primary">
                  <div className="btn__wrap">
                      <i className="ri-loader-3-fill"></i>
                      <span>Load more</span>
                  </div>
              </a>
          </div>
        </div>
    </>
  )
}
