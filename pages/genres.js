import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Genres() {
  return (
    <>
        <div class="section">
            <div class="section__head">
                <h3 class="mb-0">Music <span class="text-primary">Genres</span></h3>
            </div>
            <div class="row g-4">
                <div class="col-xl-3 col-sm-6">
                    <div class="cover cover--round">
                        <a href="genre-details.html" class="cover__image">
                            <img src="images/background/horizontal/1.jpg" alt="Remix" />
                            <div class="cover__image__content">
                                <span class="cover__title mb-1 fs-6 text-truncate">Remix</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6">
                    <div class="cover cover--round">
                        <a href="genre-details.html" class="cover__image">
                            <img src="images/background/horizontal/2.jpg" alt="Rock" />
                            <div class="cover__image__content">
                                <span class="cover__title mb-1 fs-6 text-truncate">Rock</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6">
                    <div class="cover cover--round">
                        <a href="genre-details.html" class="cover__image">
                            <img src="images/background/horizontal/3.jpg" alt="Sufi" />
                            <div class="cover__image__content">
                                <span class="cover__title mb-1 fs-6 text-truncate">Sufi</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6">
                    <div class="cover cover--round">
                        <a href="genre-details.html" class="cover__image">
                            <img src="images/background/horizontal/4.jpg" alt="Romantic" />
                            <div class="cover__image__content">
                                <span class="cover__title mb-1 fs-6 text-truncate">Romantic</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6">
                    <div class="cover cover--round">
                        <a href="genre-details.html" class="cover__image">
                            <img src="images/background/horizontal/5.jpg" alt="Sports" />
                            <div class="cover__image__content">
                                <span class="cover__title mb-1 fs-6 text-truncate">Sports</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6">
                    <div class="cover cover--round">
                        <a href="genre-details.html" class="cover__image">
                            <img src="images/background/horizontal/6.jpg" alt="Retro" />
                            <div class="cover__image__content">
                                <span class="cover__title mb-1 fs-6 text-truncate">Retro</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
