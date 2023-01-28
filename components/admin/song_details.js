//import { Inter } from '@next/font/google'
import {useRouter} from 'next/router';

//const inter = Inter({ subsets: ['latin'] })

export default function AdminSongDetails() {

  return (
    <>
        <div className="section">
            <div className="row align-items-center">
                <div className="col-xl-3 col-md-4">
                    <div className="cover cover--round">
                        <div className="cover__image">
                            <img src="images/cover/large/5.jpg" alt="Treasure face" />
                        </div>
                    </div>
                </div>
                <div className="col-1 d-none d-xl-block"></div>
                <div className="col-md-8 mt-5 mt-md-0">
                    <div className="d-flex flex-wrap mb-2">
                        <span className="text-dark fs-4 fw-semi-bold pe-2">Treasure face</span>
                        <div className="dropstart d-inline-flex ms-auto">
                            <a className="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                <i className="ri-more-fill"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-sm">
                                <li><a className="dropdown-item" href="javascript:void(0);" role="button">Delete</a></li>
                                <li><a className="dropdown-item" href="javascript:void(0);" role="button">Hide</a></li>
                                <li className="dropdown-divider"></li>
                                <li><a className="dropdown-item" href="javascript:void(0);" role="button" data-collection-play-id="1">Play</a></li>
                            </ul>
                        </div>
                    </div>
                    <ul className="info-list info-list--dotted mb-3">
                        <li>Album</li>
                        <li>10 Songs</li>
                        <li>01:21:41</li>
                        <li>Apr 14, 2019</li>
                        <li>Travers Music Company</li>
                    </ul>
                    <p className="mb-5">By: <a href="artist-details.html" className="text-dark fw-medium">Jina Moore</a>, <a href="artist-details.html" className="text-dark fw-medium">Lenisa Gory</a></p>
                    <ul className="info-list">
                        <li>
                            <div className="d-flex align-items-center">
                                <button type="button" id="play_all" className="btn btn-icon btn-primary rounded-pill" data-collection-play-id="1">
                                    <i className="ri-play-fill icon-play"></i>
                                    <i className="ri-pause-fill icon-pause"></i>
                                </button>
                                <label htmlFor="play_all" className="ps-2 fw-semi-bold text-primary mb-0" style={{cursor: "pointer"}}>Play all</label>
                            </div>
                        </li>
                        <li>
                            <a href="javascript:void(0);" role="button" className="text-dark d-flex align-items-center" aria-label="Favorite" data-favorite-id="1">
                                <i className="ri-heart-line heart-empty"></i>
                                <i className="ri-heart-fill heart-fill"></i>
                                <span className="ps-2 fw-medium">121</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" role="button" className="text-dark d-flex align-items-center" aria-label="Download">
                                <i className="ri-download-2-line"></i>
                                <span className="ps-2 fw-medium">24</span>
                            </a>
                        </li>
                        <li>
                            <span className="text-dark d-flex align-items-center">
                                <i className="ri-star-fill text-warning"></i>
                                <span className="ps-2 fw-medium">4.5</span>
                            </span>
                        </li>
                    </ul>
                    <div style={{clear: "both", textAlign: 'right'}}>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editmusicModal">
                            Edit Music
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="section">
            <div className="list">
                <div className="row" data-collection-song-id="1">
                    <div className="col-xl-12">
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
                                {/* <li>
                                    <a href="javascript:void(0);" role="button" className="d-inline-flex" aria-label="Favorite" data-favorite-id="1">
                                        <i className="ri-heart-line heart-empty"></i>
                                        <i className="ri-heart-fill heart-fill"></i>
                                    </a>
                                </li> */}
                                <li>01:14</li>
                                <li>
                                    <div style={{clear: "both", textAlign: 'right'}}>
                                        <button type="button" className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#editmusicModal">
                                            Edit Music
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>                        
            </div>
        </div>
        {/* Edit Music Modal */}
        <div className="modal fade" id="editmusicModal" tabIndex="-1" aria-labelledby="editmusicModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="editmusicModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="row">
                    <div className="col-xl-12 col-md-10 mx-auto">
                        <div className="cardw">
                            <div className="card-body">
                                <div className="tab-content" id="add_music_content">
                                    <div className="tab-pane fade show active" id="music_pane" role="tabpanel" aria-labelledby="music" tabIndex="0">
                                        <form action="#" className="row">
                                            <div className="col-12 mb-4">
                                                <div className="dropzone text-center dz-clickable">
                                                    <div className="dz-message">
                                                        <i className="ri-upload-cloud-2-line fs-2 text-dark"></i>
                                                        <span className=" d-block fs-6 mt-2">Drag &amp; Drop or click to Upload</span>
                                                        <span className=" d-block form-text mb-4">320x320 (Max: 120KB)</span>
                                                        <button type="button" className="btn btn-light-primary">Change cover image</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 mb-4">
                                                <input type="text" className="form-control" placeholder="Song name" />
                                            </div>
                                            <div className="col-12 mb-4">
                                                <label htmlFor="song_file_1" className="form-label">Song file</label>
                                                <input type="file" id="song_file_1" className="form-control" />
                                            </div>
                                            <div className="col-sm-6 mb-4">
                                                <input type="text" className="form-control" placeholder="Artist" />
                                            </div>
                                            <div className="col-sm-6 mb-4">
                                                <input type="text" className="form-control" placeholder="Composer" />
                                            </div>
                                            <div className="col-sm-6 mb-4">
                                                <input type="text" className="form-control" placeholder="Lyricist" />
                                            </div>
                                            <div className="col-sm-6 mb-4">
                                                <input type="text" className="form-control" placeholder="Music director" />
                                            </div>
                                            <div className="col-12 mb-4">
                                                <select className="form-select" aria-label="Select category">
                                                    <option selected="" disabled="" hidden="">Select category</option>
                                                    <option value="Remix">Remix</option>
                                                    <option value="Pop">Pop</option>
                                                    <option value="DJ">DJ</option>
                                                </select>
                                            </div>
                                            <div className="col-12 mb-4">
                                                <textarea name="lyrics" id="lyrics" cols="30" rows="4" className="form-control" placeholder="Lyrics"></textarea>
                                            </div>
                                            <div className="col-12 d-flex align-items-center mb-4">
                                                <div className="form-check me-4">
                                                    <input className="form-check-input" type="radio" name="price" id="free" checked="" />
                                                    <label className="form-check-label" htmlFor="free">Free</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="price" id="paid" />
                                                    <label className="form-check-label" htmlFor="paid">Paid</label>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="tab-pane fade" id="album_pane" role="tabpanel" aria-labelledby="album" tabIndex="0">
                                        <form action="#" className="row">
                                            <div className="col-12 mb-4">
                                                <div className="dropzone text-center">
                                                    <div className="dz-message">
                                                        <i className="ri-upload-cloud-2-line fs-2 text-dark"></i>
                                                        <span className=" d-block fs-6 mt-2">Drag &amp; Drop or click to Upload</span>
                                                        <span className=" d-block form-text mb-4">320x320 (Max: 120KB)</span>
                                                        <button type="button" className="btn btn-light-primary">Upload cover image</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 mb-4">
                                                <input type="text" className="form-control" placeholder="Album name" />
                                            </div>
                                            <div className="col-12 mb-4">
                                                <input type="text" className="form-control" placeholder="Song name" />
                                            </div>
                                            <div className="col-12 mb-4">
                                                <label htmlFor="song_file_2" className="form-label">Song file</label>
                                                <input type="file" id="song_file_2" className="form-control" />
                                            </div>
                                            <div className="col-sm-6 mb-4">
                                                <input type="text" className="form-control" placeholder="Artist" />
                                            </div>
                                            <div className="col-sm-6 mb-4">
                                                <input type="text" className="form-control" placeholder="Composer" />
                                            </div>
                                            <div className="col-sm-6 mb-4">
                                                <input type="text" className="form-control" placeholder="Lyricist" />
                                            </div>
                                            <div className="col-sm-6 mb-4">
                                                <input type="text" className="form-control" placeholder="Music director" />
                                            </div>
                                            <div className="col-12 mb-4">
                                                <select className="form-select" aria-label="Select category">
                                                    <option selected="" disabled="" hidden="">Select category</option>
                                                    <option value="Remix">Remix</option>
                                                    <option value="Pop">Pop</option>
                                                    <option value="DJ">DJ</option>
                                                </select>
                                            </div>
                                            <div className="col-12 mb-4">
                                                <textarea name="lyrics" id="album_lyrics" cols="30" rows="4" className="form-control" placeholder="Lyrics"></textarea>
                                            </div>
                                            <div className="col-12 d-flex align-items-center mb-4">
                                                <div className="form-check me-4">
                                                    <input className="form-check-input" type="radio" name="album_price" id="album_free" checked="" />
                                                    <label className="form-check-label" htmlFor="album_free">Free</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="album_price" id="album_paid" />
                                                    <label className="form-check-label" htmlFor="album_paid">Paid</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <a href="javascript:void(0);" className="btn btn-sm btn-light-primary">
                                                    <div className="btn__wrap">
                                                        <i className="ri-add-line"></i>
                                                        <span>Add New</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <button className="btn btn-primary" style={{minWidth: "140px"}}>Add Music</button>
                                <button className="btn btn-outline-secondary">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}
