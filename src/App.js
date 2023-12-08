import './static/scss/style.scss'

import homebanner from './static/img/profile-banner.png'

import About from './components/About'
import Services from './components/Services'
import DayNightMood from './layout/DayNightMood'
import Header from './layout/Header'
import ParticlesBackground from './components/ParticlesBackground'
import Contact from './components/Contact'


export default function Home() {

  return (
   <>
   <Header />
<main className="main-left pp-main-section">
   <section id="home" data-nav-tooltip="Home" className="pp-section pp-scrollable">
      <div className="home-banner">
         <ParticlesBackground />
         <div className="container">
            <div className="row full-screen align-items-center">
               <div className="col-lg-6">
                  <div className="type-box">
                     <h6>Hello, I am</h6>
                     <h1 className="font-alt">Boris Rioseco</h1>
                     <p className="lead">I Am Passionate <span id="type-it"></span>Software Developer</p>
                     <p className="desc">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites and web services.</p>
                     <div className="btn-bar">
                        <a className="px-btn px-btn-theme" href="https://engdevbrs-cv.s3.amazonaws.com/Boris_Rioseco_CV.pdf" target='_blank' rel='noreferrer'>Download CV</a></div>
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
   <Contact />
</main>
   <DayNightMood />
</>
  )
}
