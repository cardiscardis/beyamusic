import React from "react";

const Footer = () => {
    return (
        <>
            <footer id="main_footer">
                <div className="container">
                    <div className="last-footer py-4">
                        <span>&copy; 2022 Listen app. All rights reserved.</span>
                        <ul className="social">
                            <li>
                                <a href="#">
                                    <i className="ri-facebook-fill fs-6"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="ri-twitter-fill fs-6"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="ri-instagram-fill fs-6"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="ri-pinterest-fill fs-6"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="ri-youtube-fill fs-6"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer