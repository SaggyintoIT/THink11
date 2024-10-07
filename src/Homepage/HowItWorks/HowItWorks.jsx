import React from 'react'
import indFlg from '../../assets/images/inf.svg'
import vs from '../../assets/images/vs.svg'
import pak from '../../assets/images/pakf.svg'
import right from '../../assets/images/right.svg'
import Virat from '../../assets/images/virat.svg'
import dhoni from '../../assets/images/dhoni.svg'


const HowItWorks = () => {
  return (
    <section className="bodypx py-80" id="how-it-works">
    <div className="container">
      <div className="col-md-12 text-center mb-4">
        <h2 className="fs-48" data-aos="fade-up" data-aos-delay="350">
          It's easy to start playing on Think11
        </h2>
        <p className="font-18 poppins-regular my-3" data-aos="fade-up" data-aos-delay="450">
          Play, win, and earn on Think11!
        </p>
      </div>
    </div>
    <div className="container-fluid mi-container">
      <div className="bg-white paddingtop_b rounded20">
        <div className="col-md-12 mb-4">
          <div className="d-lg-flex align-items-md-center justify-content-between">
            <div className="w-100" data-aos="fade-up" data-aos-delay="350">
              <div className="playingbox text-center">
                <div className="playinginnerbox">
                  <div className="d-flex justify-content-between">
                    <div className="bor_h6 w-35"></div>
                    <div className="bor_h6 w-25"></div>
                  </div>
                  <div className="d-flex justify-content-between py-2">
                    <div className="d-flex">
                      <img src={indFlg} alt="IND flag" />
                      <span className="fn-14 fw-600 ms-2">IND</span>
                    </div>
                    <div>
                      <img src={vs} alt="VS" />
                    </div>
                    <div className="d-flex">
                      <span className="fn-14 fw-600 me-2">PAK</span>
                      <img src={pak} alt="PAK flag" />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="bor_h6 w-25"></div>
                    <div className="bor_h6 w-25"></div>
                  </div>
                </div>
                <p className="fn-18 fw-600 mb-2">Select A Match</p>
                <span className="fn-14 pb-2 d-block">
                  Choose an upcoming match from your
                  <br />
                  favorite Team.
                </span>
              </div>
            </div>
            <div className="btn-wraparrow" data-aos="fade-up" data-aos-delay="450">
              <button className="com-btn mx-3">
                <span>
                  <img src={right} alt="Arrow right" />
                </span>
              </button>
            </div>
            <div className="w-100" data-aos="fade-up" data-aos-delay="550">
              <div className="playingbox text-center">
                <div className="playinginnerbox">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                      <img src={Virat} alt="Virat Kohli" />
                      <span className="fn-14 ms-2">Virat Kohli</span>
                    </div>
                    <div className="bor_h6 w-25"></div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex mt-2">
                      <img src={dhoni} alt="MS Dhoni" />
                      <span className="fn-14 ms-2">MS Dhoni</span>
                    </div>
                    <div className="bor_h6 w-25"></div>
                  </div>
                </div>
                <p className="fn-18 fw-600 mb-2">Create Team</p>
                <span className="fn-14 pb-2 d-block">
                  Create your team with the best players
                  <br />
                  using your skills.
                </span>
              </div>
            </div>
            <div className="btn-wraparrow" data-aos="fade-up" data-aos-delay="600">
              <button className="com-btn mx-3">
                <span>
                  <img src={right} alt="Arrow right" />
                </span>
              </button>
            </div>
            <div className="w-100" data-aos="fade-up" data-aos-delay="700">
              <div className="playingbox text-center mb-0">
                <div className="playinginnerbox">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <span className="fn-16 fw-bold">₹ 10 Crore</span>
                      <div className="bor_h6 px-3 w-25 me-3"></div>
                    </div>
                    <span>
                      <a className="blackbg text-white px-2 py-0 free" href="#">
                        Free
                      </a>
                    </span>
                  </div>
                  <div className="mt-4">
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar" style={{ width: "25%" }}></div>
                    </div>
                  </div>
                </div>
                <p className="fn-18 fw-600 mb-2">Join Contests</p>
                <span className="fn-14 pb-2 d-block">
                  Choose between different contests
                  <br />
                  and compete
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  
  )
}

export default HowItWorks