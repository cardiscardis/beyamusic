import React from "react";

const Playlist = () => {
    return (
        <>
                <div className="section">
                    <div className="section__head">
                        <div className="flex-grow-1">
                            <span className="section__subtitle">Collection to listen</span>
                            <h3 className="mb-0">Your <span className="text-primary">Playlist</span></h3>
                        </div>
                        <a href="albums.html" className="btn btn-link">View All</a>
                    </div>

                    <div className="swiper-carousel">
                        
                        <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events" data-swiper-slides="4" data-swiper-autoplay="true">
                            <div className="swiper-wrapper" id="swiper-wrapper-37d497e67652390a" aria-live="off" style={{transform: "translate3d(0px, 0px, 0px)", transitionDuration: "500ms"}}>
                                <div className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 6" style={{width: "291.75px", marginRight: "24px"}}>
                                    
                                    <div className="cover cover--round">
                                        <div className="cover__image">
                                            <a href="album-details.html">
                                                <img src="images/background/horizontal/1.jpg" alt="DJ Remix" />
                                            </a>
                                            <div className="cover__image__content">
                                                <a href="album-details.html" className="cover__title mb-1 fs-6 text-truncate">DJ Remix</a>
                                                <span className="cover__subtitle">10 Songs | 10 Favorites</span>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                                <div className="swiper-slide swiper-slide-next" role="group" aria-label="2 / 6" style={{width: "291.75px", marginRight: "24px"}}>
                                    
                                    <div className="cover cover--round">
                                        <div className="cover__image">
                                            <a href="album-details.html">
                                                <img src="images/background/horizontal/2.jpg" alt="Rock Band" />
                                            </a>
                                            <div className="cover__image__content">
                                                <a href="album-details.html" className="cover__title mb-1 fs-6 text-truncate">Rock Band</a>
                                                <span className="cover__subtitle">14 Songs | 12 Favorites</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="swiper-slide" role="group" aria-label="3 / 6" style={{width: "291.75px", marginRight: "24px"}}>
                                    
                                    <div className="cover cover--round">
                                        <div className="cover__image">
                                            <a href="album-details.html">
                                                <img src="images/background/horizontal/3.jpg" alt="Solo Special" />
                                            </a>
                                            <div className="cover__image__content">
                                                <a href="album-details.html" className="cover__title mb-1 fs-6 text-truncate">Solo Special</a>
                                                <span className="cover__subtitle">21 Songs | 45 Favorites</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="swiper-slide" role="group" aria-label="4 / 6" style={{width: "291.75px", marginRight: "24px"}}>
                                    
                                    <div className="cover cover--round">
                                        <div className="cover__image">
                                            <a href="album-details.html">
                                                <img src="images/background/horizontal/4.jpg" alt="Romantic" />
                                            </a>
                                            <div className="cover__image__content">
                                                <a href="album-details.html" className="cover__title mb-1 fs-6 text-truncate">Romantic</a>
                                                <span className="cover__subtitle">12 Songs | 75 Favorites</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="swiper-slide" role="group" aria-label="5 / 6" style={{width: "291.75px", marginRight: "24px"}}>
                                    
                                    <div className="cover cover--round">
                                        <div className="cover__image">
                                            <a href="album-details.html">
                                                <img src="images/background/horizontal/5.jpg" alt="GYM" />
                                            </a>
                                            <div className="cover__image__content">
                                                <a href="album-details.html" className="cover__title mb-1 fs-6 text-truncate">GYM</a>
                                                <span className="cover__subtitle">16 Songs | 32 Favorites</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="swiper-slide" role="group" aria-label="6 / 6" style={{width: "291.75px", marginRight: "24px"}}>
                                    <div className="cover cover--round">
                                        <div className="cover__image">
                                            <a href="album-details.html">
                                                <img src="images/background/horizontal/6.jpg" alt="Retro Special" />
                                            </a>
                                            <div className="cover__image__content">
                                                <a href="album-details.html" className="cover__title mb-1 fs-6 text-truncate">Retro Special</a>
                                                <span className="cover__subtitle">34 Songs | 69 Favorites</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>

                        <div className="swiper-button-prev btn-default rounded-pill swiper-button-disabled" tabIndex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-37d497e67652390a" aria-disabled="true"></div>
                        <div className="swiper-button-next btn-default rounded-pill" tabIndex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-37d497e67652390a" aria-disabled="false"></div>
                    </div>
     
                </div>
        </>
    )
}

export default Playlist