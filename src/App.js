import './static/scss/style.scss'

import homebanner from './static/img/profile-banner.png'

import About from './components/About'
import Services from './components/Services'
import DayNightMood from './layout/DayNightMood'
import Header from './layout/Header'
import ParticlesBackground from './components/ParticlesBackground'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'


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
                        <a className="px-btn px-btn-theme" href="https://engdevbrs-cv.s3.amazonaws.com/Boris_Rioseco_CV+GLOBAL.pdf" target='_blank' rel='noreferrer'>Download CV</a></div>
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
   <Contact />
</main>
   <DayNightMood />
</>
  )
}
