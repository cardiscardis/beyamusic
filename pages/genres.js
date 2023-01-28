import Head from 'next/head'
import Image from 'next/image'
//import { Inter } from '@next/font/google'


//const inter = Inter({ subsets: ['latin'] })

export default function Genres() {
  return (
    <>
        <div className="section">
            <div className="section__head">
                <h3 className="mb-0">Music <span className="text-primary">Genres</span></h3>
            </div>
            <div className="row g-4">
                <div className="col-xl-3 col-sm-6">
                    <div className="cover cover--round">
                        <a href="genre-details.html" className="cover__image">
                            <img src="images/background/horizontal/1.jpg" alt="Remix" />
                            <div className="cover__image__content">
                                <span className="cover__title mb-1 fs-6 text-truncate">Remix</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="cover cover--round">
                        <a href="genre-details.html" className="cover__image">
                            <img src="images/background/horizontal/2.jpg" alt="Rock" />
                            <div className="cover__image__content">
                                <span className="cover__title mb-1 fs-6 text-truncate">Rock</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="cover cover--round">
                        <a href="genre-details.html" className="cover__image">
                            <img src="images/background/horizontal/3.jpg" alt="Sufi" />
                            <div className="cover__image__content">
                                <span className="cover__title mb-1 fs-6 text-truncate">Sufi</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="cover cover--round">
                        <a href="genre-details.html" className="cover__image">
                            <img src="images/background/horizontal/4.jpg" alt="Romantic" />
                            <div className="cover__image__content">
                                <span className="cover__title mb-1 fs-6 text-truncate">Romantic</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="cover cover--round">
                        <a href="genre-details.html" className="cover__image">
                            <img src="images/background/horizontal/5.jpg" alt="Sports" />
                            <div className="cover__image__content">
                                <span className="cover__title mb-1 fs-6 text-truncate">Sports</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="cover cover--round">
                        <a href="genre-details.html" className="cover__image">
                            <img src="images/background/horizontal/6.jpg" alt="Retro" />
                            <div className="cover__image__content">
                                <span className="cover__title mb-1 fs-6 text-truncate">Retro</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
