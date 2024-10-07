import React from 'react'
import our1 from '../../assets/images/our_1.svg'
import our2 from '../../assets/images/our_2.svg'
import our3 from '../../assets/images/our_3.svg'
import our4 from '../../assets/images/our_4.svg'

const Features = () => {
  return (
    <>
    <section className="sec-we-serve overflow-hidden" id="features">
    <div className="bodypx we-serve blackbg py-80 pb-200">
      <div className="container text-white text-center">
        <h2 className="font-48 text-white mb-0" data-aos="fade-up" data-aos-delay="50">
          Features that makes app different!
        </h2>
        <p className="font-18 poppins-regular my-2" data-aos="fade-up" data-aos-delay="150">
          Our Awesome Features.
        </p>
      </div>
      <div className="container-fluid custom-ind-slider">
        <div className="row">
          <div className="col-md-6 mt-4" data-aos="fade-up" data-aos-delay="200">
            <div className="d-flex ourfeaturesitem rounded-16">
              <div className="me-3 boxicon">
                <img src={our1} alt="Low competition icon" />
              </div>
              <div>
                <div className="fn-24 text-white mb-1 fw-500">Low competition</div>
                <p className="font-18 text-white mb-0">
                  Due to less competition on the app, your chances to win huge rewards are higher.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4" data-aos="fade-up" data-aos-delay="300">
            <div className="d-flex ourfeaturesitem rounded-16">
              <div className="me-3 boxicon">
                <img src={our2} alt="Instant Withdrawals icon" />
              </div>
              <div>
                <div className="fn-24 text-white mb-1 fw-500">Instant Withdrawals</div>
                <p className="font-18 text-white mb-0">
                  Enjoy instant cash withdrawals just after one-time account verification.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="d-flex ourfeaturesitem rounded-16" data-aos="fade-up" data-aos-delay="400">
              <div className="me-3 boxicon">
                <img src={our3} alt="Budget-friendly Leagues icon" />
              </div>
              <div>
                <div className="fn-24 text-white mb-1 fw-500">Budget-friendly Leagues</div>
                <p className="font-18 text-white mb-0">
                  Participate in various fantasy sports leagues starting at just Rs 1.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="d-flex ourfeaturesitem rounded-16" data-aos="fade-up" data-aos-delay="500">
              <div className="me-3 boxicon">
                <img src={our4} alt="24x7 Support icon" />
              </div>
              <div>
                <div className="fn-24 text-white mb-1 fw-500">24x7 Support</div>
                <p className="font-18 text-white mb-0">
                  Get end-to-end, 24x7 customer support service to resolve any issues or queries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    <section className="w-100">
    <div className="bodypx bg-white py-80 pb-200">
      <div className="container text-center">
        <h2 className="font-48 mb-0 fw-600" data-aos="fade-up" data-aos-delay="100">
          What Are Fantasy Sports?
        </h2>
        <p className="font-18 poppins-regular my-2" data-aos="fade-up" data-aos-delay="200">
          "Fantasy sports is a type of virtual game that involves creating a team of real-life players for a sport. These fantasy virtual teams compete with other teams. The team with the best performance among other teams in the same league or contest is declared the winner. Basically, users create their teams within a pre-defined budget, and they are awarded points based on their performance in the league."
        </p>
        <p className="font-18 poppins-regular my-2" data-aos="fade-up" data-aos-delay="300">
          The basic concept of fantasy sports is that participants become team managers, and they make strategic decisions, which include creating their own team of players, setting lineups, and making substitutions. The performance of the curated team is based on the real-life performance of the players in the league. Some of the most popular fantasy sports include fantasy cricket, football, kabaddi, and more.
        </p>
      </div>
    </div>
  </section>
  </>
  
  )
}

export default Features