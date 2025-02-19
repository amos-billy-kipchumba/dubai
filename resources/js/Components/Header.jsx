import React from 'react';
import { Link } from '@inertiajs/react';
import "../../css/index.scss";

function Header() {

  return (
    <div className='home-layout-wrapper'>
        <div className="banner-agileits" id="home">
        {/* Navbar */}
        <nav className="navbar navbar-default w3layouts agileits hover-effect">
            <div className="container">
            <div
                id="navbar"
                className="navbar-collapse w3layouts agileits navbar-right collapse"
            >
                <ul className="nav w3layouts agileits navbar-nav">
                <li>
                    <a href="#about" className="scroll">
                    About
                    </a>
                </li>
                <li>
                    <a href="#team" className="scroll">
                    Our Team
                    </a>
                </li>
                <li>
                    <a href="#services" className="scroll">
                    Services
                    </a>
                </li>
                <li>
                    <a href="#clients" className="scroll">
                    Clients
                    </a>
                </li>
                <li>
                    <a href="#gallery" className="scroll">
                    Gallery
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        {/* //Navbar */}
        <div className="banner-top-w3-agile">
            <ul>
            <li>
                <p>Dubai</p>
                <span>Work</span>
            </li>
            <li>
                <p>USA</p>
                <span>Study/Work</span>
            </li>
            <li>
                <p>UK</p>
                <span>Study/Work</span>
            </li>
            <li>
                <p>Canada</p>
                <span>Study/Work</span>
            </li>
            <li>
                <p>Finland</p>
                <span>Work</span>
            </li>
            <li>
                <p>Qatar</p>
                <span>General</span>
            </li>
            </ul>
        </div>
        {/* Slider */}
        <div className="slider w3layouts agileits">
            <ul className="rslides w3layouts agileits" id="slider">
            <li>
                <div className="slide-1">
                <div className="layer w3layouts agileits">
                    <div className="logo-agileits">
                    <a className="navbar-brand" href="index-2.html">
                        {/*<img src="images/logo.jpg" width="162" height="182">*/}
                    </a>
                    </div>
                    <div className="banner-info-w3layouts">
                    <h3>MANPOWER PROVISION</h3>
                    <p>Career Advising</p>
                    <div className="bnr-butn-w3ls">
                        <h6>
                        <a href="#about" className="scroll">
                            <i className="fa fa-angle-right" aria-hidden="true" />
                            About Us
                        </a>
                        </h6>
                        <h6>
                        <a href="#contact" className="scroll">
                            <i className="fa fa-angle-right" aria-hidden="true" />
                            Contact Us
                        </a>

                        <Link
                            href={route('login')}
                            className="scroll ml-2 bg-blue-600 text-white px-4 py-2"
                        >
                            Login
                        </Link>
                        </h6>
                    </div>
                    </div>
                </div>
                </div>
            </li>
            <li>
                <div className="slide-2">
                <div className="layer w3layouts agileits">
                    <div className="logo-agileits">
                    <a className="navbar-brand" href="index-2.html">
                        {/*<img src="images/logo.jpg" width="162" height="182">*/}
                    </a>
                    </div>
                    <div className="banner-info-w3layouts">
                    <h3>RECRUITMENT PROCESS</h3>
                    <p>Right People and Place</p>
                    <div className="bnr-butn-w3ls">
                        <h6>
                        <a href="#about" className="scroll">
                            <i className="fa fa-angle-right" aria-hidden="true" />
                            About Us
                        </a>
                        </h6>
                        <h6>
                        <a href="#contact" className="scroll">
                            <i className="fa fa-angle-right" aria-hidden="true" />
                            Contact Us
                        </a>
                        </h6>
                    </div>
                    </div>
                </div>
                </div>
            </li>
            <li>
                <div className="slide-3">
                <div className="layer w3layouts agileits">
                    <div className="logo-agileits">
                    <a className="navbar-brand" href="index-2.html">
                        {/*<img src="images/logo.jpg" width="162" height="182">*/}
                    </a>
                    </div>
                    <div className="banner-info-w3layouts">
                    <h3>GLOBAL OUTSOURCING</h3>
                    <p>For Job Seekers &amp; Employers</p>
                    <div className="bnr-butn-w3ls">
                        <h6>
                        <a href="#about" className="scroll">
                            <i className="fa fa-angle-right" aria-hidden="true" />
                            About Us
                        </a>
                        </h6>
                        <h6>
                        <a href="#contact" className="scroll">
                            <i className="fa fa-angle-right" aria-hidden="true" />
                            Contact Us
                        </a>
                        </h6>
                    </div>
                    </div>
                </div>
                </div>
            </li>
            <li>
                <div className="slide-4">
                <div className="layer w3layouts agileits">
                    <div className="logo-agileits">
                    <a className="navbar-brand" href="index-2.html">
                        {/*<img src="images/logo.jpg" width="162" height="182">*/}
                    </a>
                    </div>
                    <div className="banner-info-w3layouts">
                    <h3>Partnerships &amp; Mergers</h3>
                    <p>Building Business Relationships</p>
                    <div className="bnr-butn-w3ls">
                        <h6>
                        <a href="#about" className="scroll">
                            <i className="fa fa-angle-right" aria-hidden="true" />
                            About Us
                        </a>
                        </h6>
                        <h6>
                        <a href="#contact" className="scroll">
                            <i className="fa fa-angle-right" aria-hidden="true" />
                            Contact Us
                        </a>
                        </h6>
                    </div>
                    </div>
                </div>
                </div>
            </li>
            </ul>
        </div>
        {/* //Slider */}
        </div>

    </div>
  )
}

export default Header;
