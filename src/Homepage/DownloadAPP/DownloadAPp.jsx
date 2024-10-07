import React from 'react';
import mobileIcon from '../../assets/images/18+.svg'; // Assuming the image path is correct

const DownloadAppSection = () => {
  return (
    <section className="bodypx bg-white signupbg" data-aos="fade-up">
      <div className="container-fluid">
        <div className="py-80">
          <div className="row">
            <div className="col-md-12 text-center px-md-4">
              <h3 className="fn-36 mb-md-0 mb-4 fw-600">Download the official Think 11 App</h3>

              <div className="searchbox-wrap mt-4">
                <div>
                  <div className="country-code d-flex">
                    <div className="country-number w-286">
                      <div className="form-group line">
                        <input
                          type="text"
                          id="mobile_code"
                          className="form-control font-16"
                          placeholder="Enter Mobile Number"
                          name="name"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button className="ms-auto">
                  <span>Get app link</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="plyresponsiblebg mt-4">
          <div className="d-flex">
            <div className="plyresponsible d-flex align-items-center bg-white">
              <img src={mobileIcon} alt="18+" />
              <h3 className="fn-18 mb-0 fw-500 px-2 ms-1">Play Responsible</h3>
            </div>
          </div>
          <div className="text-white">
            <p className="mb-1">
              This game involves an element of financial risk and may be addictive. Please play responsibly at your own risk.
              This game is applicable for people 18+ only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
