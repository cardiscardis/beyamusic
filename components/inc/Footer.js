import React from "react";

const Footer = () => {
    return (
        <>
            <footer id="main_footer">
                <div class="container">
                    <div class="last-footer py-4">
                        <span>&copy; 2022 Listen app. All rights reserved.</span>
                        <ul class="social">
                            <li>
                                <a href="#">
                                    <i class="ri-facebook-fill fs-6"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="ri-twitter-fill fs-6"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="ri-instagram-fill fs-6"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="ri-pinterest-fill fs-6"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="ri-youtube-fill fs-6"></i>
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