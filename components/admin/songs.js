//import { Inter } from '@next/font/google'
import {useRouter} from 'next/router';
import Link from 'next/link'

//const inter = Inter({ subsets: ['latin'] })

export default function AdminSongs() {

  return (
    <>
        <div className="row mb-5">
            <div className="col-2">
                <select className="form-select">
                    <option>All</option>
                    <option>Recent</option>
                    <option>Old</option>
                </select>
            </div>
            <div className="col-2">
                <select className="form-select">
                    <option>All</option>
                    <option>Album</option>
                    <option>Songs</option>
                </select>
            </div>
        </div>
        <div className="list">
            <div className="list__item" data-song-id="2" data-song-name="Shack your butty" data-song-artist="Gerrina Linda" data-song-album="Hot shot" data-song-url="audio/ringtone-2.mp3" data-song-cover="images/cover/small/2.jpg">
                <div className="list__cover">
                    <img src="images/cover/small/2.jpg" alt="Shack your butty" />
                    {/* <a href="javascript:void(0);" className="btn btn-play btn-sm btn-default btn-icon rounded-pill" data-play-id="2" aria-label="Play pause">
                        <i className="ri-play-fill icon-play"></i>
                        <i className="ri-pause-fill icon-pause"></i>
                    </a> */}
                </div>
                <div className="list__content">
                    <Link href="/admin?name=song_details" className="list__title text-truncate">Shack your butty</Link>
                    <p className="list__subtitle text-truncate">
                        <a href="artist-details.html">Gerrina Linda</a>
                    </p>
                </div>
                <ul className="list__option">
                    <li>
                        <span className="badge rounded-pill bg-info">

                        </span>
                    </li>
                    <li>
                        <span className="badge rounded-pill bg-info p-2" style={{fontSize: '14px'}}>
                            Album / 11 songs
                        </span>
                    </li>
                    <li>30:24 min</li>
                </ul>
            </div>
            <div className="list__item" data-song-id="2" data-song-name="Shack your butty" data-song-artist="Gerrina Linda" data-song-album="Hot shot" data-song-url="audio/ringtone-2.mp3" data-song-cover="images/cover/small/2.jpg">
                <div className="list__cover">
                    <img src="images/cover/small/2.jpg" alt="Shack your butty" />
                    {/* <a href="javascript:void(0);" className="btn btn-play btn-sm btn-default btn-icon rounded-pill" data-play-id="2" aria-label="Play pause">
                        <i className="ri-play-fill icon-play"></i>
                        <i className="ri-pause-fill icon-pause"></i>
                    </a> */}
                </div>
                <div className="list__content">
                    <Link href="/admin?name=song_details" className="list__title text-truncate">Shack your butty</Link>
                    <p className="list__subtitle text-truncate">
                        <a href="artist-details.html">Gerrina Linda</a>
                    </p>
                </div>
                <ul className="list__option">
                    <li>
                        <span className="badge rounded-pill bg-info p-2" style={{fontSize: '14px'}}>
                            Song
                        </span>
                    </li>
                    <li>03:24 min</li>
                </ul>
            </div>
        </div>
    </>
  )
}
