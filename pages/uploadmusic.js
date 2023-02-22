import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
//import { Inter } from '@next/font/google'

//const inter = Inter({ subsets: ['latin'] })

export default function Uploadmusic() {

    const [ active, setActive ] = useState('music')

    const onChange = (e) => {
        //console.log(e.target)
        if (e.target.name === 'music') setActive('music')
        else setActive('album')
    }

  return (
    <>
        <div className="row">
          <div className="col-xl-7 col-md-10 mx-auto">
              <div className="card">
                  <div className="card-header pb-0">
                      <div className="mat-tabs">
                          <ul className="nav nav-tabs" id="add_music" role="tablist">
                              <li className="nav-item" role="presentation">
                                  <button className={`nav-link ${active === 'music' ? 'active' : ''}`} id="music" data-bs-toggle="tab" data-bs-target="#music_pane" type="button" role="tab" aria-controls="music_pane" aria-selected="true" tabIndex="-1" name='music' value={"music"} onClick={e => onChange(e)}>Add Music</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                  <button className={`nav-link ${active === 'album' ? 'active' : ''}`} id="album" data-bs-toggle="tab" data-bs-target="#album_pane" type="button" role="tab" aria-controls="album_pane" aria-selected="false" name='album' value={'album'} onClick={e => onChange(e)}>Add Album</button>
                              </li>
                          </ul>
                      <span className="mat-tabs__line" style={{width: "84.7656px"}}></span></div>
                  </div>
                  <div className="card-body">
                      <div className="tab-content" id="add_music_content">
                      {active === 'music' && <div className="tab-pane fade show active" id="music_pane" role="tabpanel" aria-labelledby="music" tabIndex="0">
                              <form action="#" className="row">
                                  <div className="col-12 mb-4">
                                      <div className="dropzone text-center dz-clickable">
                                          <div className="dz-message">
                                              <i className="ri-upload-cloud-2-line fs-2 text-dark"></i>
                                              <span className=" d-block fs-6 mt-2">Drag &amp; Drop or click to Upload</span>
                                              <span className=" d-block form-text mb-4">320x320 (Max: 120KB)</span>
                                              <button type="button" className="btn btn-light-primary">Upload cover image</button>
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
                          </div>}
                          {active === 'album' && <div className="tab-pane fade show active" id="album_pane" role="tabpanel" aria-labelledby="album" tabIndex="0">
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
                          </div>}
                      </div>
                  </div>
                  <div className="card-footer text-center">
                      <button className="btn btn-primary" style={{minWidth: "140px"}}>Add Music</button>
                      <button className="btn btn-outline-secondary">Cancel</button>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}
