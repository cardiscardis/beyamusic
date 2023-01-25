import { Inter } from '@next/font/google'
import {useRouter} from 'next/router';
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function AdminSongs() {

  return (
    <>
        <div class="row mb-5">
            <div class="col-2">
                <select class="form-select">
                    <option>All</option>
                    <option>Recent</option>
                    <option>Old</option>
                </select>
            </div>
            <div class="col-2">
                <select class="form-select">
                    <option>All</option>
                    <option>Album</option>
                    <option>Songs</option>
                </select>
            </div>
        </div>
        <div class="list">
            <div class="list__item" data-song-id="2" data-song-name="Shack your butty" data-song-artist="Gerrina Linda" data-song-album="Hot shot" data-song-url="audio/ringtone-2.mp3" data-song-cover="images/cover/small/2.jpg">
                <div class="list__cover">
                    <img src="images/cover/small/2.jpg" alt="Shack your butty" />
                    {/* <a href="javascript:void(0);" class="btn btn-play btn-sm btn-default btn-icon rounded-pill" data-play-id="2" aria-label="Play pause">
                        <i class="ri-play-fill icon-play"></i>
                        <i class="ri-pause-fill icon-pause"></i>
                    </a> */}
                </div>
                <div class="list__content">
                    <Link href="/admin?name=song_details" class="list__title text-truncate">Shack your butty</Link>
                    <p class="list__subtitle text-truncate">
                        <a href="artist-details.html">Gerrina Linda</a>
                    </p>
                </div>
                <ul class="list__option">
                    <li>
                        <span class="badge rounded-pill bg-info">

                        </span>
                    </li>
                    <li>
                        <span class="badge rounded-pill bg-info p-2" style={{fontSize: '14px'}}>
                            Album / 11 songs
                        </span>
                    </li>
                    <li>30:24 min</li>
                </ul>
            </div>
            <div class="list__item" data-song-id="2" data-song-name="Shack your butty" data-song-artist="Gerrina Linda" data-song-album="Hot shot" data-song-url="audio/ringtone-2.mp3" data-song-cover="images/cover/small/2.jpg">
                <div class="list__cover">
                    <img src="images/cover/small/2.jpg" alt="Shack your butty" />
                    {/* <a href="javascript:void(0);" class="btn btn-play btn-sm btn-default btn-icon rounded-pill" data-play-id="2" aria-label="Play pause">
                        <i class="ri-play-fill icon-play"></i>
                        <i class="ri-pause-fill icon-pause"></i>
                    </a> */}
                </div>
                <div class="list__content">
                    <Link href="/admin?name=song_details" class="list__title text-truncate">Shack your butty</Link>
                    <p class="list__subtitle text-truncate">
                        <a href="artist-details.html">Gerrina Linda</a>
                    </p>
                </div>
                <ul class="list__option">
                    <li>
                        <span class="badge rounded-pill bg-info p-2" style={{fontSize: '14px'}}>
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
