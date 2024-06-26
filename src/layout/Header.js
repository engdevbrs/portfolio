import { Fragment, useEffect, useState } from "react";
import { activeSection } from "../utilits.js";
import { Link } from "react-router-dom";
import profile from '../static/img/about-me.jpg'
import chilepng from '../static/img/chile.png'
import '../styles/globals.css'

const Header = ({ blog }) => {
  const [sideBarToggle, setSideBarToggle] = useState(false);
  useEffect(() => {
    if (!blog) {
      activeSection();
    }
  }, []);
  
  return (
    <Fragment>
      <div className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand">
            <Link href="/">
              <h6 className="logo-text">Boris</h6>
            </Link>
          </div>
          <button
            className={`toggler-menu ${sideBarToggle ? "open" : ""}`}
            onClick={() => setSideBarToggle(!sideBarToggle)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {/* End Header */}
      {/* nav bar */}
      <header
        className={`header-left ${
          sideBarToggle ? "menu-open menu-open-desk" : ""
        }`}
      >
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <div className="img">
                <img src={profile} style={{ maxWidth: '100% !important' }} title="" alt="" />
              </div>
              <h5>engdevbrs<img src={chilepng} style={{ verticalAlign:'bottom' }} width={'16px'} alt="chile.png"/></h5>
            </div>
          </div>
          <ul className="nav nav-menu" id="pp-menu">
            <li data-menuanchor="home" className="active">
              <a className="nav-link" href="#home">
                <i className="ti-home" />
                <span>Home</span>
              </a>
            </li>
            <li data-menuanchor="about">
              <a className="nav-link" href="#about">
                <i className="ti-id-badge" />
                <span>About Me</span>
              </a>
            </li>
            <li data-menuanchor="services">
              <a className="nav-link" href="#services">
                <i className="ti-panel" />
                <span>Services</span>
              </a>
            </li>
            {/* <li data-menuanchor="work">
              <a className="nav-link" href="#work">
                <i className="ti-bookmark-alt" />
                <span>Portfolio</span>
              </a>
            </li>
            <li data-menuanchor="blog" className="blog">
              <a className="nav-link" href="#blog">
                <i className="ti-layout-media-overlay-alt-2" />
                <span>Blogs</span>
              </a>
            </li> */}
            <li data-menuanchor="contactus">
              <a className="nav-link" href="#contactus">
                <i className="ti-map-alt" />
                <span>Contact Me</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="nav justify-content-center social-icons">
        <a href="https://github.com/engdevbrs" target="_blank" rel="noreferrer">
            <i className="fab fa-github" />
          </a>
          <a href="https://www.facebook.com/boris.francisco.1" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="https://www.instagram.com/boris.fre" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://www.linkedin.com/in/borisfre" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;

// const MenuWithOutBlog = () => {
//   return (
//     <ul className="nav nav-menu" id="pp-menu">
//       <li data-menuanchor="home" className="active">
//         <a className="nav-link" href="#home">
//           <i className="ti-home" />
//           <span>Home</span>
//         </a>
//       </li>
//       <li data-menuanchor="about">
//         <a className="nav-link" href="#about">
//           <i className="ti-id-badge" />
//           <span>About Me</span>
//         </a>
//       </li>
//       <li data-menuanchor="services">
//         <a className="nav-link" href="#services">
//           <i className="ti-panel" />
//           <span>Services</span>
//         </a>
//       </li>
//       <li data-menuanchor="work">
//         <a className="nav-link" href="#work">
//           <i className="ti-bookmark-alt" />
//           <span>Portfolio</span>
//         </a>
//       </li>
//       {/* <li data-menuanchor="work">
//         <a className="nav-link" href="#work">
//           <i className="ti-bookmark-alt" />
//           <span>Portfolio</span>
//         </a>
//       </li>
//       <li data-menuanchor="blog" className="blog">
//         <a className="nav-link" href="#blog">
//           <i className="ti-layout-media-overlay-alt-2" />
//           <span>Blogs</span>
//         </a>
//       </li> */}
//       <li data-menuanchor="contactus">
//         <a className="nav-link" href="#contactus">
//           <i className="ti-map-alt" />
//           <span>Contact Me</span>
//         </a>
//       </li>
//     </ul>
//   );
// };

// const MenuWithBlog = () => {
//   useEffect(() => {
//     window.addEventListener("scroll", () =>
//       document.querySelector(".blog").classList.add("active")
//     );
//   });

//   return (
//     <Fragment>
//       <ul className="nav nav-menu" id="pp-menu">
//         <li data-menuanchor="home">
//           <Link href="/#home">
//             <a className="nav-link">
//               <i className="ti-home" />
//               <span>Home</span>
//             </a>
//           </Link>
//         </li>
//         <li data-menuanchor="about">
//           <Link href="/#about">
//             <a className="nav-link">
//               <i className="ti-id-badge" />
//               <span>About Me</span>
//             </a>
//           </Link>
//         </li>
//         <li data-menuanchor="services">
//           <Link href="/#services">
//             <a className="nav-link">
//               <i className="ti-panel" />
//               <span>Services</span>
//             </a>
//           </Link>
//         </li>
//         <li data-menuanchor="work">
//           <Link href="/#work">
//             <a className="nav-link">
//               <i className="ti-bookmark-alt" />
//               <span>Portfolio</span>
//             </a>
//           </Link>
//         </li>
//         <li data-menuanchor="blog" className="blog active">
//           <Link href="/#blog">
//             <a className="nav-link">
//               <i className="ti-layout-media-overlay-alt-2" />
//               <span>Blogs</span>
//             </a>
//           </Link>
//         </li>
//         <li data-menuanchor="contactus">
//           <Link href="/#contactus">
//             <a className="nav-link">
//               <i className="ti-map-alt" />
//               <span>Contact Me</span>
//             </a>
//           </Link>
//         </li>
//       </ul>
//     </Fragment>
//   );
// };
