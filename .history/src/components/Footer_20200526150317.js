import React from "react";
import { Link } from "gatsby";
import Container from "components/Container";
import logo from "assets/images/logo.png";

const Footer = () => {
  return (
    <footer className>
      <Container>
        <p>&copy; 2020, mtor.io</p>
        <p className="logo">
          <Link to="/">
            <img src={logo} alt="mtor.io" />
          </Link>
        </p>
      </Container>
    </footer>
  );
};

    // <footer>
    //   <div class="footer-wrapper">
    //     <h5>Travelly &copy;</h5>
    //     <ul>
    //       <li>
    //         <a href="#" title="twitter-social-media"
    //           ><img src="./icons/twitter.svg" alt="twitter-social-media"
    //         /></a>
    //       </li>
    //       <li>
    //         <a href="#" title="youtube-social-media"
    //           ><img src="./icons/youtube.svg" alt="youtube-social-media"
    //         /></a>
    //       </li>
    //       <li>
    //         <a href="#" title="instagram-social-media"
    //           ><img src="./icons/instagram.svg" alt="instagram-social-media"
    //         /></a>
    //       </li>
    //     </ul>
    //   </div>

export default Footer;