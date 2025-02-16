import { useState, useEffect } from "react";
import { Link, Head } from "@inertiajs/react";
import {
  LayoutContext,
  LayoutProvider,
} from "@/Layouts/layout/context/layoutcontext.jsx";
import { PrimeReactProvider } from "primereact/api";
import React, { useContext } from "react";
import "../../css/index.scss";
import "../../css/flexslider.css";
import "../../css/bootstrap.css";
import "../../css/font-awesome.css";
import "../../css/simpleLightbox.css";
import "../../jss/jquery.flexisel";
import "../../jss/easing";
import "../../jss/jquery.flexslider";
import "../../jss/move-top";
import "../../jss/simpleLightbox";
import HomeLayout from "@/Layouts/HomeLayout";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
  const { layoutConfig } = useContext(LayoutContext);
  return (
    <>
      <PrimeReactProvider>
        <LayoutProvider>
          <Head title="Welcome" />
          <HomeLayout>
            <div className="home-layout-wrapper">
              <div className="banner-btm-wthree">
                <div className="container">
                  <h1 className="subheading-agileits-w3layouts">
                    Committed to Promoting
                    <span>Fair &amp; Ethical Recruitment</span>To ALL Workers
                  </h1>
                  <p>
                    “a program by the ILO and the International Organization for
                    Migration (IOM)”
                  </p>
                  <div className="button-w3ls">
                    <a href="#contact" className="scroll">
                      Contact Us
                    </a>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>

              <div className="about" id="about">
                <div className="banner_bottom_agile_grids">
                  <div className="container">
                    <div className="w3layouts-heading">
                      <h3>
                        About <span>LinkPath</span>
                      </h3>
                    </div>
                    <div className="wthree_banner_bottom_right_grids">
                      <div className="col-md-4 banner_bottom_right_grid">
                        <div className="view view-tenth">
                          <div className="agile_text_box">
                            <i
                              className="fa fa-area-chart"
                              aria-hidden="true"
                            />
                            <h3>Our Vision</h3>
                            <p>
                              To be your preferred recruitment agency partner.
                              We focus on doing things the right way to assure
                              our continued good reputation within the industry
                            </p>
                          </div>
                          <div className="mask">
                            <img
                              src="images/a1.jpg"
                              className="img-responsive"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 banner_bottom_right_grid">
                        <div className="view view-tenth">
                          <div className="agile_text_box">
                            <i className="fa fa-cubes" aria-hidden="true" />
                            <h3>Customer Centricity</h3>
                            <p>
                              We stick to customer specification to develop
                              solutions, we build and maintain strong
                              relationships because we always use our client’s
                              feedback to improve
                            </p>
                          </div>
                          <div className="mask">
                            <img
                              src="images/a2.jpg"
                              className="img-responsive"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 banner_bottom_right_grid">
                        <div className="view view-tenth">
                          <div className="agile_text_box">
                            <i className="fa fa-send-o" aria-hidden="true" />
                            <h3>LinkPath's Commitment</h3>
                            <p>
                              Our relationships with clients extend far beyond
                              the initial training. We provide continuous
                              coaching, mentorship and job placement to all our
                              clients
                            </p>
                          </div>
                          <div className="mask">
                            <img
                              src="images/a3.jpg"
                              className="img-responsive"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                </div>
                {/* about-bottom*/}
                <div className="services-inner-agileits">
                  <div className="container">
                    <div className="col-md-8">
                      <img
                        className="img-responsive zoom-img"
                        src="images/a5.jpg"
                        alt=" "
                      />
                    </div>
                    <div className="col-md-4 content-pro-head">
                      <h3>Welcome to our company</h3>
                      <p>
                        {" "}
                        LinkPath Services is a fast expanding
                        recruitment agency based in Kenya for the sole purpose
                        of finding the right employee for the right employer. We
                        specialize in being the link between job seekers and
                        employers, matching the profile of the job seeker to the
                        needs of the employer to provide for a perfect
                        integration to the company.
                      </p>
                      <div className="button-w3ls">
                        <a
                          href="#"
                          className="know-more"
                          data-toggle="modal"
                          data-target="#aboutUs"
                        >
                          Know More
                        </a>
                      </div>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                </div>
              </div>

              <div className="team" id="team">
                {/* Right to left*/}
                <div className="col-md-5 team-left-wthree">
                  <div className="w3layouts-heading">
                    <h3>
                      Our <span>Team</span>
                    </h3>
                  </div>
                  <p>
                    The continuing success of LinkPath Services is
                    in the management’s ability to develop innovative product
                    lines and to cost effectively deliver to a large targeted
                    and receptive market. LinkPath Services’
                    founding executives as outlined here are high caliber
                    professionals who create immense synergy for the company.
                  </p>
                </div>
                <div className="col-md-7 team-rght-agileits">
                  <div className="col-sm-4 team-w3-agileits">
                    {/* normal */}
                    <div className="ih-item circle effect3 bottom_to_top">
                      <div className="img">
                        <img src="images/amos11.jpg" alt="img" />
                      </div>
                      <div className="info">
                        <h3>Senior Partner</h3>
                        <ul className="social-icons">
                          <li>
                            <a
                              href="https://www.facebook.com/LinkPath-International-Services-Limited-573923095988521/"
                              className="fb"
                              target="_blank"
                            >
                              <i
                                className="fa fa-facebook-square"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="twt">
                              <i
                                className="fa fa-twitter-square"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* end normal */}
                    <h5>Mr. Linus Ashihundu</h5>
                    <p>Managing Director</p>
                  </div>
                  <div className="col-sm-4 team-w3-agileits">
                    {/* colored */}
                    <div className="ih-item circle colored effect3 bottom_to_top">
                      <div className="img">
                        <img src="images/amos11.jpg" alt="img" />
                      </div>
                      <div className="info">
                        <h3>Senior Partner</h3>
                        <ul className="social-icons">
                          <li>
                            <a
                              href="https://www.facebook.com/LinkPath-International-Services-Limited-573923095988521/"
                              className="fb"
                              target="_blank"
                            >
                              <i
                                className="fa fa-facebook-square"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="twt">
                              <i
                                className="fa fa-twitter-square"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* end colored */}
                    <h5>Mr. Brian Juma</h5>
                    <p>Director / Head of Operations</p>
                  </div>
                  <div className="col-sm-4 team-w3-agileits">
                    {/* colored */}
                    <div className="ih-item circle colored effect3 bottom_to_top">
                      <div className="img">
                        <img src="images/amos11.jpg" alt="img" />
                      </div>
                      <div className="info">
                        <h3>Relations</h3>
                        <ul className="social-icons">
                          <li>
                            <a
                              href="https://www.facebook.com/LinkPath-International-Services-Limited-573923095988521/"
                              className="fb"
                              target="_blank"
                            >
                              <i
                                className="fa fa-facebook-square"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="twt">
                              <i
                                className="fa fa-twitter-square"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* end colored */}
                    <h5>Apply Board</h5>
                    <p>Study Abroad Consultant</p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="clearfix"> </div>
                {/* end Right to left*/}
              </div>
              {/* /Team */}
              {/* services */}
              <div className="sevices-w3layouts" id="services">
                <div className="container">
                  <div className="w3layouts-heading">
                    <h3>
                      Our <span>Services</span>
                    </h3>
                  </div>
                  <div className="services-main">
                    <div
                      className="col-md-3 sevices-w3layouts-grids wow fadeInUp animated"
                      data-wow-delay=".5s"
                    >
                      <h5>Recruitment</h5>
                      <p>
                        LinkPath Services assists all clients with
                        compiling the job specification, interviewing of
                        candidates, background screening and salary
                        negotiations.
                      </p>
                      <div className="sevices-w3layouts-img c1">
                        <i className="fa fa-bar-chart" aria-hidden="true" />
                        <h6>Recruitment</h6>
                        <p>Career Enhancement</p>
                      </div>
                    </div>
                    <div
                      className="col-md-3 sevices-w3layouts-grids sevices-w3layouts-mdl wow fadeInUp animated"
                      data-wow-delay=".5s"
                    >
                      <h5>Assessment Center</h5>
                      <p>
                        An assessment consists of several tests and practical
                        simulations that are intended to show whether a person
                        is the right fit for a particular position or still
                        performs optimally.
                      </p>
                      <div className="sevices-w3layouts-img c2">
                        <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                        <h6>Assessment Center</h6>
                        <p>Selection</p>
                      </div>
                    </div>
                    <div
                      className="col-md-3 sevices-w3layouts-grids sevices-w3layouts-mdl1 wow fadeInUp animated"
                      data-wow-delay=".5s"
                    >
                      <h5>Training</h5>
                      <p>
                        We provide training to fulfill your business objectives
                        and improve your competitive position. All our training
                        is designed to exactly match your particular needs and
                        market conditions.
                      </p>
                      <div className="sevices-w3layouts-img c3">
                        <i className="fa fa-pie-chart" aria-hidden="true" />
                        <h6>Training</h6>
                        <p>Preparing</p>
                      </div>
                    </div>
                    <div
                      className="col-md-3 sevices-w3layouts-grids wow fadeInUp animated"
                      data-wow-delay=".5s"
                    >
                      <h5>VISA Consultation</h5>
                      <p>
                        We provide proper guidance and step-by-step counseling,
                        documentation, submission of visa application and
                        collection of passports to those aspiring to visit,
                        settle, work, study abroad
                      </p>
                      <div className="sevices-w3layouts-img c4">
                        <i className="fa fa-area-chart" aria-hidden="true" />
                        <h6>VISA Consultation</h6>
                        <p>Experts Advice</p>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
              {/*testimonials*/}
              {/*//testimonials*/}
              {/*gallery*/}
              <div className="gallery" id="gallery">
                <div className="container">
                  <div className="w3layouts-heading">
                    <h3>
                      Our <span>Gallery</span>
                    </h3>
                  </div>
                  <div className="w3ls_gallery_grids">
                    <div className="col-md-4 w3_agile_gallery_grid">
                      <div className="agile_gallery_grid">
                        <a
                          title="Skype and video calls to interview candidates is part of our hiring process!"
                          href="images/g1.jpg"
                        >
                          <div className="agile_gallery_grid1">
                            <img
                              src="images/g1.jpg"
                              alt=" "
                              className="img-responsive"
                            />
                            <div className="w3layouts_gallery_grid1_pos">
                              <h3>Online Interviews</h3>
                              <p>Recruitment Interview via Skype</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="agile_gallery_grid">
                        <a
                          title="All types of drivers are wanted in Qatar/ Dubai/ Poland"
                          href="images/g2.jpg"
                        >
                          <div className="agile_gallery_grid1">
                            <img
                              src="images/g2.jpg"
                              alt=" "
                              className="img-responsive"
                            />
                            <div className="w3layouts_gallery_grid1_pos">
                              <h3>Truck / Bus / Valet</h3>
                              <p>
                                Drivers Interviews On-going, Call us for more
                                details!
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="agile_gallery_grid">
                        <a
                          title="We recruit construction workers in Qatar, Dubai and Bahrain, we underline abilities and suitability for the position as requested"
                          href="images/g3.jpg"
                        >
                          <div className="agile_gallery_grid1">
                            <img
                              src="images/g3.jpg"
                              alt=" "
                              className="img-responsive"
                            />
                            <div className="w3layouts_gallery_grid1_pos">
                              <h3>Construction Workers</h3>
                              <p>
                                Contracting / Maintenance / interior Decorations
                                Workers
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 w3_agile_gallery_grid">
                      <div className="agile_gallery_grid">
                        <a
                          title="Your Reliable Immigration Consulting Partner in Kenya"
                          href="images/g4.jpg"
                        >
                          <div className="agile_gallery_grid1">
                            <img
                              src="images/g4.jpg"
                              alt=" "
                              className="img-responsive"
                            />
                            <div className="w3layouts_gallery_grid1_pos">
                              <h3>VISA Consultation</h3>
                              <p>VISA Consultation</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="agile_gallery_grid">
                        <a
                          title="We are NOW Hiring & Training Waitresses / Chefs / Housekeepers..."
                          href="images/g5.jpg"
                        >
                          <div className="agile_gallery_grid1">
                            <img
                              src="images/g5.jpg"
                              alt=" "
                              className="img-responsive"
                            />
                            <div className="w3layouts_gallery_grid1_pos">
                              <h3>Service Industry</h3>
                              <p>WANTED: Housekeepers and Waiters</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="agile_gallery_grid">
                        <a
                          title="We are always hiring professional security guard to work in  Homes & Industries"
                          href="images/g6.jpg"
                        >
                          <div className="agile_gallery_grid1">
                            <img
                              src="images/g6.jpg"
                              alt=" "
                              className="img-responsive"
                            />
                            <div className="w3layouts_gallery_grid1_pos">
                              <h3>Security Industry</h3>
                              <p>Security Guards Interviews On-going</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 w3_agile_gallery_grid">
                      <div className="agile_gallery_grid">
                        <a
                          title="We operate from our offices in Nairobi Kenya!"
                          href="images/g7.jpg"
                        >
                          <div className="agile_gallery_grid1">
                            <img
                              src="images/g7.jpg"
                              alt=" "
                              className="img-responsive"
                            />
                            <div className="w3layouts_gallery_grid1_pos">
                              <h3>LinkPath Offices</h3>
                              <p>4959 Islington Ave, Toronto</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="agile_gallery_grid">
                        <a
                          title="Now recruiting FULL TIME helpers to do the house hold chores, cleaning, cooking and help with kids!"
                          href="images/g8.jpg"
                        >
                          <div className="agile_gallery_grid1">
                            <img
                              src="images/g8.jpg"
                              alt=" "
                              className="img-responsive"
                            />
                            <div className="w3layouts_gallery_grid1_pos">
                              <h3>Domestic Workers</h3>
                              <p>Domestic Workers FREE Training &amp; Travel</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="agile_gallery_grid">
                        <a
                          title="Study Abroad Programs gives you the opportunity to experience the world as your classroom. "
                          href="images/g9.jpg"
                        >
                          <div className="agile_gallery_grid1">
                            <img
                              src="images/g9.jpg"
                              alt=" "
                              className="img-responsive"
                            />
                            <div className="w3layouts_gallery_grid1_pos">
                              <h3>Study &amp; Work Abroad Consultants</h3>
                              <p>
                                Overseas Education Consultants, Call us for more
                                details
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>
              </div>
            </div>
          </HomeLayout>
        </LayoutProvider>
      </PrimeReactProvider>
    </>
  );
}
