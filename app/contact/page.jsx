
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
export default function Contact() {
    return (
        <>
 <Header/>

 <div id="sidebar-area" className="sidebar-area">
  <button className="sidebar-trigger close">
    <svg
      className="sidebar-close"
      width="16px"
      height="12.7px"
      viewBox="0 0 16 12.7"
      style={{ enableBackground: "new 0 0 16 12.7" }}
    >
      <g>
        <rect
          x="0"
          y="5.4"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.1569 7.5208)"
          width="16"
          height="2"
        />
        <rect
          x="0"
          y="5.4"
          transform="matrix(0.7071 0.7071 -0.7071 0.7071 6.8431 -3.7929)"
          width="16"
          height="2"
        />
      </g>
    </svg>
  </button>
            <div class="side-menu-content">
                <div class="side-menu-logo">
                    <a class="dark-img" href="index.html"><img src="assets/img/logo/logo-2.png" alt="logo"/></a>
                    <a class="light-img" href="index.html"><img src="assets/img/logo/logo-3.png" alt="logo"/></a>
                </div>
                <div class="side-menu-wrap"></div>
                <div class="side-menu-about">
                    <div class="side-menu-header">
                        <h3>About Us</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud nisi ut aliquip ex ea commodo consequat.</p>
                    <a href="contact.html" class="rr-primary-btn">Contact Us</a>
                </div>
                <div class="side-menu-contact">
                    <div class="side-menu-header">
                        <h3>Contact Us</h3>
                    </div>
                    <ul class="side-menu-list">
                        <li>
                            <i class="fas fa-map-marker-alt"></i>
                            <p>Valentin, Street Road 24, New York, </p>
                        </li>
                        <li>
                            <i class="fas fa-phone"></i>
                            <a href="tel:+000123456789">+000 123 (456) 789</a>
                        </li>
                        <li>
                            <i class="fas fa-envelope-open-text"></i>
                            <a href="mailto:runokcontact@gmail.com">runokcontact@gmail.com</a>
                        </li>
                    </ul>
                </div>
                <ul class="side-menu-social">
                    <li class="facebook"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li class="instagram"><a href="#"><i class="fab fa-instagram"></i></a></li>
                    <li class="twitter"><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li class="g-plus"><a href="#"><i class="fab fa-fab fa-google-plus"></i></a></li>
                </ul>
            </div>
        </div>


        <div id="preloader">
            <div class="loading" data-loading-text="Runok"></div>
        </div>
 

    <div id="smooth-wrapper">
        <div id="smooth-content">

        <section class="page-header" data-background="assets/img/bg-img/page-header-bg.jpg">
            <div class="overlay"></div>
            <div class="shapes">
                <div class="shape shape-1"><img src="assets/img/shapes/page-header-shape-1.png" alt="shape"/></div>
                <div class="shape shape-2"><img src="assets/img/shapes/page-header-shape-2.png" alt="shape"/></div>
                <div class="shape shape-3"><img src="assets/img/shapes/page-header-shape-3.png" alt="shape"/></div>
            </div>
            <div class="container">
                <div class="page-header-content text-center">
                    <h1 class="title">Contact Us</h1>
                    <h4 class="sub-title"><a class="home" href="index.html">Home </a><span></span><a class="inner-page" href="contact.html"> Contact Us</a></h4>
                </div>
            </div>
        </section>


        <section class="contact-section pt-130 pb-130">
            <div class="container">
                <div class="row gy-lg-0 gy-5">
                    <div class="col-lg-5 col-md-12">
                        <div class="contact-content">
                            <div class="section-heading">
                                <h4 class="sub-heading after-none" data-text-animation="fade-in" data-duration="1.5">Contact Us</h4>
                                <h2 class="section-title" data-text-animation data-split="word" data-duration="1">Let’s working together</h2>
                                <p>Thank you for your interest in Attach Web Agency. We're excited to hear from you and discuss...</p>
                            </div>
                            <div class="contact-list">
                                <div class="list-item">
                                    <div class="icon">
                                        <i class="fa-light fa-location-dot"></i>
                                    </div>
                                    <div class="content">
                                        <h4 class="title">Our Address</h4>
                                        <p>2690 Hilton Street Victoria Road, <br/>New York, Canada</p>
                                    </div>
                                </div>
                                <div class="list-item">
                                    <div class="icon">
                                        <i class="fa-light fa-phone"></i>
                                    </div>
                                    <div class="content">
                                        <h4 class="title">Phone Number</h4>
                                        <span><a href="tel:+65485965789">(+65) - 48596 - 5789</a></span>
                                        <span><a href="mailto:hello@acadu.com">hello@acadu.com</a></span>
                                    </div>
                                </div>
                                <div class="list-item">
                                    <div class="icon">
                                        <i class="fa-light fa-clock"></i>
                                    </div>
                                    <div class="content">
                                        <h4 class="title">Hours of Operation</h4>
                                        <span>Monday - Friday: 09:00 - 20:00</span>
                                        <span>Sunday & Saturday: 10:30 - 22:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="blog-contact-form form-2">
                            <div class="request-form">
                                <form action="mail.php" method="post" id="ajax_contact" class="form-horizontal">
                                    <div class="form-group row">
                                        <div class="col-md-6">
                                            <div class="form-item">
                                                <input type="text" id="fullname" name="fullname" class="form-control" placeholder="Your Name"/>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-item">
                                                <input type="text" id="lastname" name="lastname" class="form-control" placeholder="Last Name"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6">
                                            <div class="form-item">
                                                <input type="text" id="email" name="email" class="form-control" placeholder="Email address*"/>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-item">
                                                <input type="text" id="phone" name="phone" class="form-control" placeholder="Phone number*"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-12">
                                            <div class="form-item">
                                                <div class="nice-select select-control form-control country" tabindex="0"><span class="current">Select Queary Topic</span><ul class="list"><li data-value="" class="option selected focus">Select Queary Topic</li><li data-value="vdt" class="option">Plan One</li><li data-value="can" class="option">Plan Two</li><li data-value="uk" class="option">Plan Three</li></ul></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-12">
                                            <div class="form-item message-item">
                                                <textarea id="message" name="message" cols="30" rows="5" class="form-control address" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="submit-btn">
                                        <button id="submit" class="rr-primary-btn" type="submit">Submit Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="map-wrapper pb-130">
            <div class="container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8826.923787362664!2d-118.27754354757262!3d34.03471770929568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20California%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1566525118697!5m2!1svi!2s" width="100%" height="600" frameborder="0" style={{ border:'0'}} allowfullscreen=""></iframe>
            </div>
        </div>

        </div>
    </div>

 <Footer />
 </>
    );
}