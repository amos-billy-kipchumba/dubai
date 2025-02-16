import React from 'react'
import { useForm, Link } from '@inertiajs/react';
import "../../css/index.scss";
function Footer() {

    const { data, setData, post, errors } = useForm({
      name: '',
      email: '',
      comment: ''
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      post(route('profile.sendComment'));
    };
    
  return (
    <div className='home-layout-wrapper'>
      <>
        <div className="contact-map-w3l">
          {/*<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.9831744780035!2d-122.42307938460873!3d37.79043407975659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858094d19836bf%3A0x154e077aaa8cef6a!2sComplete+Business+Services!5e0!3m2!1sen!2sin!4v1497343604791"></iframe>*/}
        </div>
        <div className="contact-w3ls">
          <div className="container">
            <div className="get-top-agileits-w3layouts">
              <h2>
                <a href="index-3.html">LinkPath Services</a>
              </h2>
              <ul>
                <li>
                  <a href="#about" className="scroll">
                    About
                  </a>
                </li>
                <li>
                  <a href="#team" className="scroll">
                    Team
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
              <div className="clearfix" />
            </div>
            <div className="w3layouts-heading pb-8" id="contact">
              <h3 className="white-w3layouts">
                Get in touch <span>with us</span>
              </h3>
              <p>
                You can also use a quick contact form below or visit our office
                personally.
              </p>
            </div>
          </div>
          <div className="contact-agile">
            <div className="contact-middle">
              <h4>Say Hello</h4>
              <form onSubmit={handleSubmit}>
                <div className="form-agileinfo">
                  <div className="input-w3ls">
                    <p>Name</p>
                    <input
                      type="text"
                      value={data.name}
                      onChange={(e) => setData('name', e.target.value)}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="input-w3ls">
                    <p>Email</p>
                    <input
                      type="email"
                      value={data.email}
                      onChange={(e) => setData('email', e.target.value)}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="form-agileits-w3layouts">
                  <p>Your Comments</p>
                  <textarea
                    name="your message"
                    value={data.comment}  // Controlled by state
                    onChange={(e) => setData('comment', e.target.value)}
                    placeholder=" "
                    required
                  />
                  <input type="submit" defaultValue="Send message" />
                </div>
                <div className="clearfix" />
              </form>
            </div>
            <div className="contact-left">
              <h6>Contact Info</h6>
              <div className="address-w3-agile">
                <i className="fa fa-location-arrow" aria-hidden="true" />
                <p>
                  Lyric House - 4959 Islington Ave ,Toronto City
                  <br /> P.O Box 14212 - 00400
                </p>
                <div className="clearfix" />
              </div>
              <div className="address-w3-agile">
                <i className="fa fa-mobile" aria-hidden="true" />
                <p>
                  +254208022022
                  <br />
                  +17787177439
                </p>
                <div className="clearfix" />
              </div>
              <div className="address-w3-agile">
                <i className="fa fa-envelope-o" aria-hidden="true" />
                <a href="mailto:info@linkpathtravel.agency">info@linkpathtravel.agency</a>
                <div className="clearfix" />
              </div>
              <ul className="social-icons">
                <li>
                  <a
                    href="https://www.facebook.com/LinkPath-International-Services-Limited-573923095988521/"
                    className="fb"
                    target="_blank"
                  >
                    <i className="fa fa-facebook-square" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#" className="twt">
                    <i className="fa fa-twitter-square" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#" className="lin">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ul>
              <div className="clearfix" />
            </div>
          </div>
        </div>
        {/*footer*/}
        <div className="footer w3layouts">
          <div className="container">
            <div className="footer-row w3layouts-agile">
              <div className="col-md-4 footer-grids w3l-agileits">
                <h3>About Us</h3>
                <p className="footer-one-w3ls">
                  LinkPath Services has shown remarkable progress, as
                  evidenced by its short but impressive history, and has proven itself
                  a worthy competitor to even the long-standing giants of the
                  business. The agency’s staggering growth is largely attributable to
                  the thorough, painstaking effort of its consultants to familiarize
                  themselves with the nature and scope of their clients’ jobs, which
                  thus enables them to sift out and tailor the multitude of talented
                  jobseekers according to the preferences and requirements as
                  specified by their clients.
                </p>
              </div>
              <div className="col-md-5 footer-grids w3l-agileits">
                <h3>Latest News: Year 2023</h3>
                <ul className="footer-news-agileits">
                  <li>
                    <a
                      href="#"
                      className="find-about"
                      data-toggle="modal"
                      data-target="#saudiArabia"
                    >
                      Agricultural Students:{" "}
                    </a>
                    <span>
                      {" "}
                      LinkPath Services is looking for graduates who
                      studied agricultural related programs to work in Denmark,
                      Germany and in the UK
                    </span>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="find-about"
                      data-toggle="modal"
                      data-target="#securityGuards"
                    >
                      Study and work abroad
                    </a>
                    <span>
                      Boost your career prospects with our opportunities to study,
                      work and train abroad. BWIS has partnered and works closely with
                      top Universities in USA, Canada, Australia &amp; UK.
                    </span>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="find-about"
                      data-toggle="modal"
                      data-target="#poland"
                    >
                      URGENT: General Workers needed in Abu Dhabi, Poland, Finland
                      &amp; Germany
                    </a>
                    <span>On-going Process</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 footer-grids w3l-agileits">
                <img src="/image/logo/logo.png" className='h-36' />
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom wtrhee-agileinfo">
          <div className="container">
            <p className="copy">
              Copyright 2025 LinkPath Services Ltd. All Rights Reserved{" "}
            </p>
          </div>
        </div>
        {/*//footer*/}
        {/* aboutUs */}
        <div className="modal fade" id="aboutUs" tabIndex={-1} role="dialog">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
                <h4>About LinkPath Services</h4>
                <img src="images/aboutus.jpg" alt=" " className="img-responsive" />
                <h5>Staffing the Globe</h5>
                <p>
                  Since our inception in 2010, we have aspired towards providing
                  excellent service with consistency and unfaltering dedication,
                  conscientiously sieving out from our database of talent the best
                  candidates for the job. Those who possess the qualities and criteria
                  as desired and specified by the agency’s clients are put through a
                  series of tests and interviews that ultimately determine the depth
                  and relevance of their expertise. By this rigorous method of
                  screening, LinkPath Services is thus able to ensure
                  that it brings about an ideal, effective, and mutually beneficial
                  partnership, a lucrative alliance that satisfies both employer and
                  employee. <br />
                  As the very bridge that brings together both parties, LinkPath
                  International Services not only contributes to alleviating the
                  stress of manpower scarcity facing a great number of recruitment
                  companies today but, at the same time, it provides the jobless
                  talents of society with the opportunity to secure for themselves a
                  stable, lifelong career. The firm possesses a committed, reliable
                  staff of knowledgeable advisors who are ever prepared to render
                  their services with a swiftness and efficacy that not many can
                  match.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* //Modal1 */}
        {/* saudiArabia */}
        <div className="modal fade" id="saudiArabia" tabIndex={-1} role="dialog">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
                <h4>Agricultural Graduates</h4>
                <img src="images/partner.jpg" alt=" " className="img-responsive" />
                <h5>
                  At LinkPath Services we know the best way to increase
                  name recognition and overall success for our business is to join
                  business organizations and networking groups.
                </h5>
                <p>
                  We have exciting news for you! DID YOU STUDY ANY OF THE FOLLOWING: -
                  Animal Science, General Livestock, Animal Husbandry, Veterinary, Zoo
                  technology, OR any agricultural-related (Diploma &amp; Degree)
                  program IN THE LAST 4 YEARS? BWIS has joined British Chamber of
                  Commerce of Kenya, Business Ireland Kenya as well as Kenya National
                  Chamber of Commerce and Industry (KNCCI) as industry-specific
                  business organizations and this is great way to contribute to the
                  growth of our human resources industry and keep up with advances in
                  this field, as well as an excellent opportunity to learn from others
                  who may have more experience or new ideas.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* //Modal1 */}
        {/* securityGuards */}
        <div className="modal fade" id="securityGuards" tabIndex={-1} role="dialog">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
                <h4>ABN Staffing; Study &amp; Work Abroad </h4>
                <img src="images/staffing.jpg" alt=" " className="img-responsive" />
                <h5>
                  Boost your career prospects with our opportunities to study, work
                  and train abroad. BWIS has partnered and works closely with top
                  Universities in USA, Canada, Australia &amp; UK.
                </h5>
                <p>
                  They offer a wide range of Degrees, Diploma, and Certificates in
                  Business Administration, Information Technology, Engineering,
                  Tourism &amp; Hospitality, Nursing, Sciences, Sales &amp; Marketing,
                  Human Resource, Finance or a leading MBA. Working whilst studying
                  may sound difficult to manage but the benefits of doing so
                  dramatically outweigh the efforts of organizing it. Your part-time
                  employment options will vary depending on your chosen study abroad
                  country, your previous work experience and skill set and the subject
                  area you are looking to study. The reasons why you should consider
                  part-time work during your studies: • Earn extra income to help with
                  living costs &amp; School fees. • Gain relevant work experience. •
                  Improve your language &amp; cultural skills. • Arranged permanent
                  host country residence.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* //Modal1 */}
        {/* poland */}
        <div className="modal fade" id="poland" tabIndex={-1} role="dialog">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
                <h4>Opportunities in Poland, Finland &amp; Germany</h4>
                <img src="images/europe.jpg" alt=" " className="img-responsive" />
                <h5>
                  Career prospects in Poland, Finland and Germany are looking good.
                </h5>
                <p>
                  Poland, Finland and Germany are some of the largest economies in
                  Europe, with strong economic position within Europe, low costs of
                  living and graduate jobs available in a range of fields, These
                  countries have the career opportunities that you're looking for.
                  They have a business-friendly reputation and working in any of the
                  three countries is becoming more and more popular in Kenya. BWIS has
                  partnered with Human Resources companies in Poland, Finland and
                  Germany to provide high quality paid international
                  internships/traineeships to university students/graduates and young
                  professionals in tourism and hotel management, business
                  administration, finance, sales &amp; marketing and in so many other
                  fields. Call us or visit our offices for more details
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default Footer
