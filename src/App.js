import './static/scss/style.scss'

import homebanner from './static/img/_home-banner.png'

import About from './components/About'
import Services from './components/Services'
import DayNightMood from './layout/DayNightMood'
import Header from './layout/Header'


export default function Home() {
  return (
   <>
   <Header />
<main className="main-left pp-main-section">
   <section id="home" data-nav-tooltip="Home" className="pp-section pp-scrollable">
      <div className="home-banner">
         <div className="particles" id="particles-box">
            <canvas style={{width: '100%', height: '100%', pointerEvents: 'none' }} data-generated="false" aria-hidden="true" width="1401" height="1384"></canvas>
         </div>
         <div className="container">
            <div className="row full-screen align-items-center">
               <div className="col-lg-6">
                  <div className="type-box">
                     <h6>Hello, I am</h6>
                     <h1 className="font-alt">Sergio Gadot</h1>
                     <p className="lead">I Am Passionate <span id="type-it"></span></p>
                     <p className="desc">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
                     <div className="btn-bar"><a className="px-btn px-btn-theme" href="#">Donwload CV</a></div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="hb-img"><img src={homebanner} title="" alt="" /></div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <About />
   <Services />
   {/* <section id="work" data-nav-tooltip="Work" className="pp-section pp-scrollable section dark-bg">
      <div className="container">
         <div className="title">
            <h3>My Portfolio.</h3>
         </div>
         <div className="portfolio-filter-01">
            <ul className="filter nav">
               <li className="c-pointer active" data-filter="*">All</li>
               <li className="c-pointer " data-filter=".branding">Branding</li>
               <li className="c-pointer " data-filter=".photoshop">Photoshop</li>
               <li className="c-pointer " data-filter=".fashion">Fashion</li>
               <li className="c-pointer " data-filter=".product">Product</li>
            </ul>
         </div>
         <div className="portfolio-content grid-gutter-lg grid-col-3 lightbox-gallery" style={{position: 'relative', height: '1270.94px'}}>
            <div className="grid-item product branding fashion" style={{position: 'absolute', left: '0%', top: '0px'}}>
               <div className="portfolio-box-01">
                  <div className="portfolio-info">
                     <h5 className="white-color font-weight-bold">Momb ios App</h5>
                     <span>Broadcasting ios App</span>
                  </div>
                  <div className="portfolio-img">
                     <img src="static/img/m-portfolio-1.jpg" title="" alt="" />
                     <div className="portfolio-icon"><a href="static/img/m-portfolio-1.jpg" className="gallery-link"><span className="ti-plus"></span></a></div>
                  </div>
               </div>
            </div>
            <div className="grid-item photoshop" style={{position: 'absolute', left: '33.3322%', top: '0px'}}>
               <div className="portfolio-box-01">
                  <div className="portfolio-info">
                     <h5 className="white-color font-weight-bold">Momb ios App</h5>
                     <span>Broadcasting ios App</span>
                  </div>
                  <div className="portfolio-img">
                     <img src="static/img/m-portfolio-2.jpg" title="" alt="" />
                     <div className="portfolio-icon"><a href="static/img/m-portfolio-2.jpg" className="gallery-link"><span className="ti-plus"></span></a></div>
                  </div>
               </div>
            </div>
            <div className="grid-item product branding" style={{position: 'absolute', left: '66.6644%', top: '0px'}}>
               <div className="portfolio-box-01">
                  <div className="portfolio-info">
                     <h5 className="white-color font-weight-bold">Momb ios App</h5>
                     <span>Broadcasting ios App</span>
                  </div>
                  <div className="portfolio-img">
                     <img src="static/img/m-portfolio-3.jpg" title="" alt="" />
                     <div className="portfolio-icon"><a href="static/img/m-portfolio-3.jpg" className="gallery-link"><span className="ti-plus"></span></a></div>
                  </div>
               </div>
            </div>
            <div className="grid-item product photoshop" style={{position: 'absolute', left: '33.3322%', top: '314.656px'}}>
               <div className="portfolio-box-01">
                  <div className="portfolio-info">
                     <h5 className="white-color font-weight-bold">Momb ios App</h5>
                     <span>Broadcasting ios App</span>
                  </div>
                  <div className="portfolio-img">
                     <img src="static/img/m-portfolio-5.jpg" title="" alt="" />
                     <div className="portfolio-icon"><a href="static/img/m-portfolio-5.jpg" className="gallery-link"><span className="ti-plus"></span></a></div>
                  </div>
               </div>
            </div>
            <div className="grid-item branding" style={{position: 'absolute', left: '0%', top: '423.641px'}}>
               <div className="portfolio-box-01">
                  <div className="portfolio-info">
                     <h5 className="white-color font-weight-bold">Momb ios App</h5>
                     <span>Broadcasting ios App</span>
                  </div>
                  <div className="portfolio-img">
                     <img src="static/img/m-portfolio-4.jpg" title="" alt="" />
                     <div className="portfolio-icon"><a href="static/img/m-portfolio-4.jpg" className="gallery-link"><span className="ti-plus"></span></a></div>
                  </div>
               </div>
            </div>
            <div className="grid-item product photoshop" style={{position: 'absolute', left: '66.6644%', top: '532.641px'}}>
               <div className="portfolio-box-01">
                  <div className="portfolio-info">
                     <h5 className="white-color font-weight-bold">Momb ios App</h5>
                     <span>Broadcasting ios App</span>
                  </div>
                  <div className="portfolio-img">
                     <img src="static/img/m-portfolio-6.jpg" title="" alt="" />
                     <div className="portfolio-icon"><a href="static/img/m-portfolio-6.jpg" className="gallery-link"><span className="ti-plus"></span></a></div>
                  </div>
               </div>
            </div>
            <div className="grid-item fashion" style={{position: 'absolute', left: '0%', top: '738.297px'}}>
               <div className="portfolio-box-01">
                  <div className="portfolio-info">
                     <h5 className="white-color font-weight-bold">Momb ios App</h5>
                     <span>Broadcasting ios App</span>
                  </div>
                  <div className="portfolio-img">
                     <img src="static/img/m-portfolio-7.jpg" title="" alt="" />
                     <div className="portfolio-icon"><a href="static/img/m-portfolio-7.jpg" className="gallery-link"><span className="ti-plus"></span></a></div>
                  </div>
               </div>
            </div>
            <div className="grid-item product branding" style={{position: 'absolute', left: '33.3322%', top: '847.297px'}}>
               <div className="portfolio-box-01">
                  <div className="portfolio-info">
                     <h5 className="white-color font-weight-bold">Momb ios App</h5>
                     <span>Broadcasting ios App</span>
                  </div>
                  <div className="portfolio-img">
                     <img src="static/img/m-portfolio-8.jpg" title="" alt="" />
                     <div className="portfolio-icon"><a href="static/img/m-portfolio-8.jpg" className="gallery-link"><span className="ti-plus"></span></a></div>
                  </div>
               </div>
            </div>
            <div className="grid-item fashion" style={{position: 'absolute', left: '66.6644%', top: '956.282px'}}>
               <div className="portfolio-box-01">
                  <div className="portfolio-info">
                     <h5 className="white-color font-weight-bold">Momb ios App</h5>
                     <span>Broadcasting ios App</span>
                  </div>
                  <div className="portfolio-img">
                     <img src="static/img/m-portfolio-9.jpg" title="" alt="" />
                     <div className="portfolio-icon"><a href="static/img/m-portfolio-9.jpg" className="gallery-link"><span className="ti-plus"></span></a></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section id="blog" data-nav-tooltip="Blog" className="pp-section pp-scrollable section">
      <div className="container">
         <div className="title">
            <h3>Latest Blog.</h3>
         </div>
         <div className="row">
            <div className="col-md-6 m-15px-tb">
               <div className="blog-grid">
                  <div className="blog-img"><a href="/single-blog"><img src="static/img/blog-1.jpg" title="" alt="" /></a></div>
                  <div className="blog-info">
                     <div className="meta">29/FEB/2022 - WEBSITE - 1 COMMENT</div>
                     <h6><a href="/single-blog">Five Solid Evidences Attending Design Is Good For Your Career Development.</a></h6>
                  </div>
               </div>
            </div>
            <div className="col-md-6 m-15px-tb">
               <div className="blog-grid">
                  <div className="blog-img"><a href="/single-blog"><img src="static/img/blog-2.jpg" title="" alt="" /></a></div>
                  <div className="blog-info">
                     <div className="meta">29/FEB/2022 - WEBSITE - 1 COMMENT</div>
                     <h6><a href="/single-blog">Ten Mind-Blowing Reasons Why Design Is Using This Technique For Exposure.</a></h6>
                  </div>
               </div>
            </div>
            <div className="col-md-6 m-15px-tb">
               <div className="blog-grid">
                  <div className="blog-img"><a href="/single-blog"><img src="static/img/blog-3.jpg" title="" alt="" /></a></div>
                  <div className="blog-info">
                     <div className="meta">29/FEB/2022 - WEBSITE - 1 COMMENT</div>
                     <h6><a href="/single-blog">I Will Tell You The Truth About Design In The Next 60 Seconds.</a></h6>
                  </div>
               </div>
            </div>
            <div className="col-md-6 m-15px-tb">
               <div className="blog-grid">
                  <div className="blog-img"><a href="/single-blog"><img src="static/img/blog-4.jpg" title="" alt="" /></a></div>
                  <div className="blog-info">
                     <div className="meta">29/FEB/2022 - WEBSITE - 1 COMMENT</div>
                     <h6>
                        <a href="/single-blog">
                           What You Know About Design And What You Don't Know About Design.
                        </a>
                     </h6>
                  </div>
               </div>
            </div>
            <div className="col-12 read-more-blog text-center"><a className="px-btn px-btn-theme" href="/blog">More Blogs</a></div>
         </div>
      </div>
   </section> */}
   <section id="contactus" data-nav-tooltip="Contact Me" className="pp-section pp-scrollable section dark-bg">
      <div className="container">
         <div className="title">
            <h3>Get in touch.</h3>
         </div>
         <div className="row">
            <div className="col-lg-5 col-xl-4 m-15px-tb">
               <div className="contact-info">
                  <h4>What’s your story? Get in touch</h4>
                  <p>Always available for freelancing if the right project comes along, Feel free to contact me.</p>
                  <ul>
                     <li className="media"><i className="ti-map"></i><span className="media-body">123 Stree New York City , United States Of America 750065.</span></li>
                     <li className="media"><i className="ti-email"></i><span className="media-body">support@domain.com</span></li>
                     <li className="media"><i className="ti-mobile"></i><span className="media-body">+044 9696 9696 3636</span></li>
                  </ul>
               </div>
            </div>
            <div className="col-lg-7 col-xl-8 m-15px-tb">
               <div className="contact-form">
                  <h4>Say Something</h4>
                  <form id="contact-form">
                     <div className="row">
                        <div className="col-md-6">
                           <div className="form-group"><input name="name" id="name" placeholder="Name *" className="form-control " type="text" defaultValue="" /></div>
                        </div>
                        <div className="col-md-6">
                           <div className="form-group"><input name="email" id="email" placeholder="Email *" className="form-control " type="email" defaultValue="" /></div>
                        </div>
                        <div className="col-12">
                           <div className="form-group"><input name="subject" id="subject" placeholder="Subject *" className="form-control " type="text" defaultValue="" /></div>
                        </div>
                        <div className="col-md-12">
                           <div className="form-group"><textarea name="message" id="message" placeholder="Your message *" rows="5" className="form-control "></textarea></div>
                        </div>
                        <div className="col-md-12">
                           <div className="send"><input className="px-btn px-btn-theme" type="submit" defaultValue="send message" /></div>
                           <span id="suce_message" className="text-success" style={{ display: 'none' }}>Message Sent Successfully</span><span id="err_message" className="text-danger" style={{ display: 'none' }}>Message Sending Failed</span>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </section>
</main>
   <DayNightMood />
</>
  )
}
