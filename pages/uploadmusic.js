import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import { FileUploader } from "react-drag-drop-files";
import {useSession} from "next-auth/react";
import cogoToast from 'cogo-toast';

import { fetcher } from '@/lib/fetch';


//import { Inter } from '@next/font/google'

//const inter = Inter({ subsets: ['latin'] })


const ImgFileTypes = ["JPEG", "PNG", "GIF"];
const songFileTypes = ["MP3", "OGG", "AMR"];

export default function Uploadmusic() {

    const { data:session, status } = useSession()

    const [ active, setActive ] = useState('music')
    const [file, setFile] = useState(null);
    const genreInput = useRef();

  
    const handleChange = (file) => {
        setFile(file);
    }

    const onChange = (e) => {
        //console.log(e.target)
        if (e.target.name === 'music') setActive('music')
        else setActive('album')
    }


    const handleSubmit = async (event)=> {
        event.preventDefault();
        event.stopPropagation()

        if (active === 'music') {
            const formData = new FormData(event.target);
            formData.append('uploaderPhone', session?.user?.phone);
            const formProps = Object.fromEntries(formData);
            if (formProps?.genre === 'Select category') {
                cogoToast.error('You have not selected the song genre')
                genreInput.current.focus()
                return;
            }
            if (!formProps?.file?.name) {
                cogoToast.error('You have not selected a cover image')
                return;
            }
            if (!formProps?.songFile?.name) {
                cogoToast.error('You have not selected a song file')
                return
            }
            console.log(formProps)
            cogoToast.loading(
                'Uploading...Please wait for the response...', {
                hideAfter: 10
            })
            try {
                const response = await fetcher('/api/user/upload', {
                    method: 'PATCH',
                    body: formData,
                });
    
                if (response && response.imageURL) {                
                    cogoToast.success('Your song has been uploaded');
                } else cogoToast.error('Error uploading your song!')                
            } catch(err) {
                console.log(err)
            }
        } else {
            const formData = new FormData(event.target);
            formData.append('user', session?.user);
            const formProps = Object.fromEntries(formData);
            console.log(formProps)
            return
        }
    }

 /*
    const handleSubmit = (event)=> {
         
    
        const formData = new FormData(event.target);
        formObj = {};
        
        for (const [fieldName] of formData) {
            const fieldValue = formData.getAll(fieldName);
            formObj[fieldName] = fieldValue.length == 1 ? fieldValue.toString() : fieldValue
        }
        console.log('formObj',formObj)
    } 
    
    
        const check = (e) => {
        const form = new FormData(e.target);
        const formula = form.get("formula");
        console.log(formula);
        return false

        
    };

    */

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
                      {active === 'music' ? 
                        <div className="tab-pane fade show active" id="music_pane" role="tabpanel" aria-labelledby="music" tabIndex="0">
                              <form onSubmit={handleSubmit} className="row" enctype="multipart/form-data" name="musicForm">
                                  <div className="col-12 mb-4">
                                      
                                    <FileUploader
                                        multiple={false}
                                        handleChange={handleChange}
                                        name="file"
                                        types={ImgFileTypes}
                                        onTypeError={(err) => console.log(err)}
                                        onSizeError={(err) => console.log(err)}
                                        children={
                                            <div className="dropzone text-center dz-clickable">
                                                <div className="dz-message">
                                                    <i className="ri-upload-cloud-2-line fs-2 text-dark"></i>
                                                    <span className=" d-block fs-6 mt-2">Drag &amp; Drop or click to Upload</span>
                                                    <span className=" d-block form-text mb-4">320x320 (Max: 120KB)</span>
                                                    <button type="button" className="btn btn-light-primary">Upload cover image</button>
                                                </div>
                                            </div>
                                        }
                                    />
                                    <p>{file?.length ? Object.keys(file).map((f, i) => <p>{`${i+1}.)   ${file[f].name}`}</p>) :
                                    file ? file.name : 'no files uploaded yet'}</p>
                                      
                                  </div>

                                  <div className="col-12 mb-4">
                                      <input type="text" className="form-control" name='songName' placeholder="Song name" required />
                                  </div>
                                  <div className="col-12 mb-4">
                                      <label htmlFor="song_file_1" className="form-label">Song file</label>
                                      <input type="file" id="song_file_1" className="form-control" name='songFile' required />
                                  </div>
                                  <div className="col-sm-6 mb-4">
                                      <input type="text" className="form-control" placeholder="Artist" name='artist' required />
                                  </div>
                                  <div className="col-sm-6 mb-4">
                                      <input type="text" className="form-control" placeholder="Composer" name='composer' required />
                                  </div>
                                  <div className="col-sm-6 mb-4">
                                      <input type="text" className="form-control" placeholder="Lyricist" name='lyricist' />
                                  </div>
                                  <div className="col-sm-6 mb-4">
                                      <input type="text" className="form-control" placeholder="Music director" name='musicDirector' />
                                  </div>
                                  <div className="col-12 mb-4">
                                      <select className="form-select" aria-label="Select category" name='genre' ref={genreInput} required>
                                          <option hidden="">Select category</option>
                                          <option value="Remix">Remix</option>
                                          <option value="Pop" selected>Pop</option>
                                          <option value="DJ">DJ</option>
                                      </select>
                                  </div>
                                  <div className="col-12 mb-4">
                                      <textarea name="lyrics" id="lyrics" cols="30" rows="4" className="form-control" placeholder="Lyrics"></textarea>
                                  </div>
                                  <div className="col-12 d-flex align-items-center mb-4">
                                      <div className="form-check me-4">
                                          <input className="form-check-input" type="radio" name="price" id="free" required />
                                          <label className="form-check-label" htmlFor="free">Free</label>
                                      </div>
                                      <div className="form-check">
                                          <input className="form-check-input" type="radio" name="price" id="paid" />
                                          <label className="form-check-label" htmlFor="paid">Paid</label>
                                      </div>
                                  </div>
                                   <div className="card-footer text-center">
                                    <input className="btn btn-primary" style={{minWidth: "140px"}} type="submit" value={"Add Music"} />
                                    <button className="btn btn-outline-secondary">Cancel</button>
                                </div>
                              </form>
                         </div>: null}
                        {active === 'album' && <div className="tab-pane fade show active" id="album_pane" role="tabpanel" aria-labelledby="album" tabIndex="0">
                              <form onSubmit={handleSubmit} className="row" enctype="multipart/form-data" name="albumForm">
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
                                      <input type="text" className="form-control" name='album' placeholder="Album name" required />
                                  </div>
                                  <div className="col-12 mb-4">
                                      <input type="text" className="form-control" placeholder="Song name" name='songName2' required />
                                  </div>
                                  <div className="col-12 mb-4">
                                      <label htmlFor="song_file_2" className="form-label">Song file</label>
                                      <input type="file" id="song_file_2" className="form-control" name='file2' required />
                                  </div>
                                  <div className="col-sm-6 mb-4">
                                      <input type="text" className="form-control" placeholder="Artist" name='artist2' required />
                                  </div>
                                  <div className="col-sm-6 mb-4">
                                      <input type="text" className="form-control" placeholder="Composer" name='composer2' required />
                                  </div>
                                  <div className="col-sm-6 mb-4">
                                      <input type="text" className="form-control" placeholder="Lyricist" name='lyricist2' />
                                  </div>
                                  <div className="col-sm-6 mb-4">
                                      <input type="text" className="form-control" placeholder="Music director" name='musicDirector2' />
                                  </div>
                                  <div className="col-12 mb-4">
                                      <select className="form-select" aria-label="Select category" name='genre' required>
                                          <option selected="" disabled="" hidden="">Select category</option>
                                          <option value="Remix">Remix</option>
                                          <option value="Pop">Pop</option>
                                          <option value="DJ">DJ</option>
                                      </select>
                                  </div>
                                  <div className="col-12 mb-4">
                                      <textarea name="lyrics2" id="album_lyrics" cols="30" rows="4" className="form-control" placeholder="Lyrics"></textarea>
                                  </div>
                                  <div className="col-12 d-flex align-items-center mb-4">
                                      <div className="form-check me-4">
                                          <input className="form-check-input" type="radio" name="album_price" id="album_free" required />
                                          <label className="form-check-label" htmlFor="album_free">Free</label>
                                      </div>
                                      <div className="form-check">
                                          <input className="form-check-input" type="radio" name="album_price" id="album_paid" />
                                          <label className="form-check-label" htmlFor="album_paid">Paid</label>
                                      </div>
                                  </div>
                                  <div className="col-12">
                                      <a href='#' className="btn btn-sm btn-light-primary">
                                          <div className="btn__wrap">
                                              <i className="ri-add-line"></i>
                                              <span>Add New</span>
                                          </div>
                                      </a>
                                  </div>
                                  <div className="card-footer text-center">
                                    <input className="btn btn-primary" style={{minWidth: "140px"}} type="submit" value={"Add Music"} />
                                    <button className="btn btn-outline-secondary">Cancel</button>
                                </div>
                              </form>
                         </div>}
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}
