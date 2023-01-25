import { Inter } from '@next/font/google'
import {useRouter} from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export default function AdminSongDetails() {

  return (
    <>
        <div class="section">
            <div class="row align-items-center">
                <div class="col-xl-3 col-md-4">
                    <div class="cover cover--round">
                        <div class="cover__image">
                            <img src="images/cover/large/5.jpg" alt="Treasure face" />
                        </div>
                    </div>
                </div>
                <div class="col-1 d-none d-xl-block"></div>
                <div class="col-md-8 mt-5 mt-md-0">
                    <div class="d-flex flex-wrap mb-2">
                        <span class="text-dark fs-4 fw-semi-bold pe-2">Treasure face</span>
                        <div class="dropstart d-inline-flex ms-auto">
                            <a class="dropdown-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-label="Cover options" aria-expanded="false">
                                <i class="ri-more-fill"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-sm">
                                <li><a class="dropdown-item" href="javascript:void(0);" role="button">Delete</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);" role="button">Hide</a></li>
                                <li class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="javascript:void(0);" role="button" data-collection-play-id="1">Play</a></li>
                            </ul>
                        </div>
                    </div>
                    <ul class="info-list info-list--dotted mb-3">
                        <li>Album</li>
                        <li>10 Songs</li>
                        <li>01:21:41</li>
                        <li>Apr 14, 2019</li>
                        <li>Travers Music Company</li>
                    </ul>
                    <p class="mb-5">By: <a href="artist-details.html" class="text-dark fw-medium">Jina Moore</a>, <a href="artist-details.html" class="text-dark fw-medium">Lenisa Gory</a></p>
                    <ul class="info-list">
                        <li>
                            <div class="d-flex align-items-center">
                                <button type="button" id="play_all" class="btn btn-icon btn-primary rounded-pill" data-collection-play-id="1">
                                    <i class="ri-play-fill icon-play"></i>
                                    <i class="ri-pause-fill icon-pause"></i>
                                </button>
                                <label for="play_all" class="ps-2 fw-semi-bold text-primary mb-0" style={{cursor: "pointer"}}>Play all</label>
                            </div>
                        </li>
                        <li>
                            <a href="javascript:void(0);" role="button" class="text-dark d-flex align-items-center" aria-label="Favorite" data-favorite-id="1">
                                <i class="ri-heart-line heart-empty"></i>
                                <i class="ri-heart-fill heart-fill"></i>
                                <span class="ps-2 fw-medium">121</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" role="button" class="text-dark d-flex align-items-center" aria-label="Download">
                                <i class="ri-download-2-line"></i>
                                <span class="ps-2 fw-medium">24</span>
                            </a>
                        </li>
                        <li>
                            <span class="text-dark d-flex align-items-center">
                                <i class="ri-star-fill text-warning"></i>
                                <span class="ps-2 fw-medium">4.5</span>
                            </span>
                        </li>
                    </ul>
                    <div style={{clear: "both", textAlign: 'right'}}>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editmusicModal">
                            Edit Music
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="list">
                <div class="row" data-collection-song-id="1">
                    <div class="col-xl-12">
                        <div class="list__item" 
                        data-song-id="1"
                        data-song-name="I love you mummy"
                        data-song-artist="Arebica Luna"
                        data-song-album="Mummy"
                        data-song-url="audio/ringtone-1.mp3"
                        data-song-cover="images/cover/small/1.jpg">
                            <div class="list__cover">
                                <img src="images/cover/small/1.jpg" alt="I love you mummy" />
                                <a href="javascript:void(0);" class="btn btn-play btn-sm btn-default btn-icon rounded-pill" data-play-id="1" aria-label="Play pause">
                                    <i class="ri-play-fill icon-play"></i>
                                    <i class="ri-pause-fill icon-pause"></i>
                                </a>
                            </div>
                            <div class="list__content">
                                <a href="song-details.html" class="list__title text-truncate">I love you mummy</a>
                                <p class="list__subtitle text-truncate">
                                    <a href="artist-details.html">Arebica Luna</a>
                                </p>
                            </div>
                            <ul class="list__option">
                                {/* <li>
                                    <a href="javascript:void(0);" role="button" class="d-inline-flex" aria-label="Favorite" data-favorite-id="1">
                                        <i class="ri-heart-line heart-empty"></i>
                                        <i class="ri-heart-fill heart-fill"></i>
                                    </a>
                                </li> */}
                                <li>01:14</li>
                                <li>
                                    <div style={{clear: "both", textAlign: 'right'}}>
                                        <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#editmusicModal">
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
        <div class="modal fade" id="editmusicModal" tabindex="-1" aria-labelledby="editmusicModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="editmusicModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-xl-12 col-md-10 mx-auto">
                        <div class="cardw">
                            <div class="card-body">
                                <div class="tab-content" id="add_music_content">
                                    <div class="tab-pane fade show active" id="music_pane" role="tabpanel" aria-labelledby="music" tabindex="0">
                                        <form action="#" class="row">
                                            <div class="col-12 mb-4">
                                                <div class="dropzone text-center dz-clickable">
                                                    <div class="dz-message">
                                                        <i class="ri-upload-cloud-2-line fs-2 text-dark"></i>
                                                        <span class=" d-block fs-6 mt-2">Drag &amp; Drop or click to Upload</span>
                                                        <span class=" d-block form-text mb-4">320x320 (Max: 120KB)</span>
                                                        <button type="button" class="btn btn-light-primary">Change cover image</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 mb-4">
                                                <input type="text" class="form-control" placeholder="Song name" />
                                            </div>
                                            <div class="col-12 mb-4">
                                                <label for="song_file_1" class="form-label">Song file</label>
                                                <input type="file" id="song_file_1" class="form-control" />
                                            </div>
                                            <div class="col-sm-6 mb-4">
                                                <input type="text" class="form-control" placeholder="Artist" />
                                            </div>
                                            <div class="col-sm-6 mb-4">
                                                <input type="text" class="form-control" placeholder="Composer" />
                                            </div>
                                            <div class="col-sm-6 mb-4">
                                                <input type="text" class="form-control" placeholder="Lyricist" />
                                            </div>
                                            <div class="col-sm-6 mb-4">
                                                <input type="text" class="form-control" placeholder="Music director" />
                                            </div>
                                            <div class="col-12 mb-4">
                                                <select class="form-select" aria-label="Select category">
                                                    <option selected="" disabled="" hidden="">Select category</option>
                                                    <option value="Remix">Remix</option>
                                                    <option value="Pop">Pop</option>
                                                    <option value="DJ">DJ</option>
                                                </select>
                                            </div>
                                            <div class="col-12 mb-4">
                                                <textarea name="lyrics" id="lyrics" cols="30" rows="4" class="form-control" placeholder="Lyrics"></textarea>
                                            </div>
                                            <div class="col-12 d-flex align-items-center mb-4">
                                                <div class="form-check me-4">
                                                    <input class="form-check-input" type="radio" name="price" id="free" checked="" />
                                                    <label class="form-check-label" for="free">Free</label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="price" id="paid" />
                                                    <label class="form-check-label" for="paid">Paid</label>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="tab-pane fade" id="album_pane" role="tabpanel" aria-labelledby="album" tabindex="0">
                                        <form action="#" class="row">
                                            <div class="col-12 mb-4">
                                                <div class="dropzone text-center">
                                                    <div class="dz-message">
                                                        <i class="ri-upload-cloud-2-line fs-2 text-dark"></i>
                                                        <span class=" d-block fs-6 mt-2">Drag &amp; Drop or click to Upload</span>
                                                        <span class=" d-block form-text mb-4">320x320 (Max: 120KB)</span>
                                                        <button type="button" class="btn btn-light-primary">Upload cover image</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 mb-4">
                                                <input type="text" class="form-control" placeholder="Album name" />
                                            </div>
                                            <div class="col-12 mb-4">
                                                <input type="text" class="form-control" placeholder="Song name" />
                                            </div>
                                            <div class="col-12 mb-4">
                                                <label for="song_file_2" class="form-label">Song file</label>
                                                <input type="file" id="song_file_2" class="form-control" />
                                            </div>
                                            <div class="col-sm-6 mb-4">
                                                <input type="text" class="form-control" placeholder="Artist" />
                                            </div>
                                            <div class="col-sm-6 mb-4">
                                                <input type="text" class="form-control" placeholder="Composer" />
                                            </div>
                                            <div class="col-sm-6 mb-4">
                                                <input type="text" class="form-control" placeholder="Lyricist" />
                                            </div>
                                            <div class="col-sm-6 mb-4">
                                                <input type="text" class="form-control" placeholder="Music director" />
                                            </div>
                                            <div class="col-12 mb-4">
                                                <select class="form-select" aria-label="Select category">
                                                    <option selected="" disabled="" hidden="">Select category</option>
                                                    <option value="Remix">Remix</option>
                                                    <option value="Pop">Pop</option>
                                                    <option value="DJ">DJ</option>
                                                </select>
                                            </div>
                                            <div class="col-12 mb-4">
                                                <textarea name="lyrics" id="album_lyrics" cols="30" rows="4" class="form-control" placeholder="Lyrics"></textarea>
                                            </div>
                                            <div class="col-12 d-flex align-items-center mb-4">
                                                <div class="form-check me-4">
                                                    <input class="form-check-input" type="radio" name="album_price" id="album_free" checked="" />
                                                    <label class="form-check-label" for="album_free">Free</label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="album_price" id="album_paid" />
                                                    <label class="form-check-label" for="album_paid">Paid</label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <a href="javascript:void(0);" class="btn btn-sm btn-light-primary">
                                                    <div class="btn__wrap">
                                                        <i class="ri-add-line"></i>
                                                        <span>Add New</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer text-center">
                                <button class="btn btn-primary" style={{minWidth: "140px"}}>Add Music</button>
                                <button class="btn btn-outline-secondary">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}
