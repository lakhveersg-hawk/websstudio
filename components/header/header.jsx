import Image from 'next/image';

export default function Header() {
    return (
        <>
            {/* <div id="preloader">
                <div className="loading" data-loading-text="Runok"></div>
            </div> */}

            <header className="header sticky-active">
                <div className="primary-header">
                    <div className="primary-header-inner">
                        <div className="header-logo d-lg-block">
                            <a href="index.html">
                                <Image className="logo-dark" src="assets/Image/logo/logo-2.png" alt="Logo" />
                                <Image className="logo-light" src="assets/Image/logo/logo-3.png" alt="Logo" />
                            </a>
                        </div>
                        <div className="header-right-wrap">
                            <div className="header-menu-wrap">
                                <div className="mobile-menu-items">
                                    <ul>
                                        <li className="menu-item-has-children active">
                                            <a href="index.html">Home</a>
                                            <ul>
                                                <li><a href="index.html">Web Design</a></li>
                                                <li><a href="index-2.html">Creative Studio</a></li>
                                                <li><a href="index-3.html">Web Development</a></li>
                                                <li><a href="index-4.html">Modern Agency</a></li>
                                                <li><a href="index-5.html">It Solution</a></li>
                                                <li><a href="index-6.html">Digital Agency</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="#">Pages</a>
                                            <ul>
                                                <li><a href="/about">About</a></li>
                                                <li><a href="team.html">Team</a></li>
                                                <li><a href="team-details.html">Team Details</a></li>
                                                <li><a href="project.html">Portfolio</a></li>
                                                <li><a href="project-details.html">Portfolio Details</a></li>
                                                <li><a href="pricing.html">Pricing Plans</a></li>
                                                <li><a href="faq.html">Faq</a></li>
                                                <li><a href="error.html">404 Error</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="service.html">Services</a>
                                            <ul>
                                                <li><a href="service.html">Service</a></li>
                                                <li><a href="service-details.html">Service Details</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="shop.html">Shop</a>
                                            <ul>
                                                <li><a href="shop.html">Shop</a></li>
                                                <li><a href="shop-details.html">Shop Details</a></li>
                                                <li><a href="cart.html">Cart</a></li>
                                                <li><a href="wishlist.html">Wishlist</a></li>
                                                <li><a href="checkout.html">Checkout</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="blog-grid.html">Blog</a>
                                            <ul>
                                                <li><a href="blog-grid.html">Blog Grid</a></li>
                                                <li><a href="blog-grid-2.html">Blog list</a></li>
                                                <li><a href="blog-details.html">Blog Details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/contact">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="header-right">
                                <div className="sidebar-icon">
                                    <button className="sidebar-trigger open">
                                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.300781 0H5.30078V5H0.300781V0Z" fill="currentColor"/>
                                            <path d="M0.300781 9H5.30078V14H0.300781V9Z" fill="currentColor"/>
                                            <path d="M0.300781 18H5.30078V23H0.300781V18Z" fill="currentColor"/>
                                            <path d="M9.30078 0H14.3008V5H9.30078V0Z" fill="currentColor"/>
                                            <path d="M9.30078 9H14.3008V14H9.30078V9Z" fill="currentColor"/>
                                            <path d="M9.30078 18H14.3008V23H9.30078V18Z" fill="currentColor"/>
                                            <path d="M18.3008 0H23.3008V5H18.3008V0Z" fill="currentColor"/>
                                            <path d="M18.3008 9H23.3008V14H18.3008V9Z" fill="currentColor"/>
                                            <path d="M18.3008 18H23.3008V23H18.3008V18Z" fill="currentColor"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
