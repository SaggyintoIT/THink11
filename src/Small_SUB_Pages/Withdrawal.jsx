import React from 'react'
import Navbar2 from '../FantasyCricket/Navbar/Navbar2'
import DownloadAppSection from '../Homepage/DownloadAPP/DownloadAPp'
import Footer from '../Homepage/Footer/Footer'
import checkmark from '../assets/images/checkmark.svg'
const Withdrawal = () => {
  return (
   <>
   <Navbar2/>
   <section className="bodypx banner aboutbanner text-white d-flex">
    <div className="container-fluid pt-77 m-auto w-100">
      <div className="row align-items-center mt-md-0 mt-3">   
     <div className="col-md-12">   
      <div className="text-white text-center tracking-in-expand" >
        <span className="fs-60 fw-300" data-aos="fade-up" data-aos-delay="400">Withdraw Policy </span>      
          </div>
          </div>    
        </div>
    </div>
    </section>


    <section className="bodypx py-80">
      <div className="container-fluid mi-container">
        <div className="row">
          <div className="col-md-12 mb-4">
            <div
              className="bg-white p-3 p-md-5 rounded20 h-100"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span
                className="fn-40 mb-3 d-block fw-300"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Withdraw Policy
              </span>
              <div className="d-flex">
                <div className="me-2 boxiconcheckmark">
                  <img src={checkmark} alt="Checkmark" />
                </div>
                <p className="mb-0">
                  You are required to make a deposit of minimum INR 100 at least once in your THINK11 account to be eligible for withdrawals. This is only a one time process before your first withdrawal.
                </p>
              </div>
              <div className="d-flex mt-3">
                <div className="me-2 boxiconcheckmark">
                  <img src={checkmark} alt="Checkmark" />
                </div>
                <p className="mb-0">The minimum amount for withdrawal is INR 200 in your bank account.</p>
              </div>
              <div className="d-flex mt-3">
                <div className="me-2 boxiconcheckmark">
                  <img src={checkmark} alt="Checkmark" />
                </div>
                <p className="mb-0">The maximum amount you can withdraw in your bank account is INR 3rd time of your total deposit (i.e If your Total Deposit is INR 100 than your maximum withdrawal is INR 300).</p>
              </div>
              <div className="d-flex mt-3">
                <div className="me-2 boxiconcheckmark">
                  <img src={checkmark} alt="Checkmark" />
                </div>
                <p className="mb-0">Providing bank details, personal information and KYC documents are mandatory before you place your first withdrawal request.</p>
              </div>
              <div className="d-flex mt-3">
                <div className="me-2 boxiconcheckmark">
                  <img src={checkmark} alt="Checkmark" />
                </div>
                <p className="mb-0">You can place another request only after the first request is fully processed.</p>
              </div>
              <div className="d-flex mt-3">
                <div className="me-2 boxiconcheckmark">
                  <img src={checkmark} alt="Checkmark" />
                </div>
                <p className="mb-0">Approval on your withdrawal request is done within 24 Hours from our end after which the request goes out for cash disbursement into your Bank Account.</p>
              </div>
              <div className="d-flex mt-3">
                <div className="me-2 boxiconcheckmark">
                  <img src={checkmark} alt="Checkmark" />
                </div>
                <p className="mb-0">You are eligible to withdraw your winning amount only.</p>
              </div>
            </div>
          </div>

          <div className="col-md-12 mb-4">
            <div
              className="bg-white p-3 p-md-5 rounded20 h-100"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span
                className="fn-40 mb-3 d-block fw-300"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                KYC verification includes
              </span>
              <div className="d-flex">
                <div className="me-2 boxiconcheckmark">
                  <img src={checkmark} alt="Checkmark" />
                </div>
                <p className="mb-0">PAN and address proof.</p>
              </div>
              <div className="d-flex mt-3">
                <div className="me-2 boxiconcheckmark">
                  <img src={checkmark} alt="Checkmark" />
                </div>
                <p className="mb-0">Bank account details should match with the KYC uploaded. In case they do not match, we ask for KYC associated with bank account provided or vice versa.</p>
              </div>
              <div className="d-flex mt-3">
                <div className="me-2 boxiconcheckmark">
                  <img src={checkmark} alt="Checkmark" />
                </div>
                <p className="mb-0">Amount withdrawn from your account will be credited to your bank account within 24-48 working hours.</p>
              </div>
            </div>
          </div>

          <div className="col-md-12 mb-4">
            <div
              className="bg-white p-3 p-md-5 rounded20 h-100"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span
                className="fn-40 mb-3 d-block fw-300"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                TDS Rules
              </span>
              <div className="d-flex">
                <div className="me-2 boxiconcheckmark">
                  <img src={checkmark} alt="Checkmark" />
                </div>
                <p className="mb-0">
                  No TDS will be deducted on withdrawals at all regardless of the amount you wish to withdraw. However, TDS of 31.2% will be deducted on any winning amount exceeding INR 10000. Also, a TDS certificate would be duly issued to the user.
                </p>
              </div>
              <div className="d-flex mt-3">
                <div className="me-2 boxiconcheckmark">
                  <img src={checkmark} alt="Checkmark" />
                </div>
                <p className="mb-0">Once the TDS has been debited, we will provide the TDS certificate after the end of the following financial quarter.</p>
              </div>
              <div className="d-flex mt-3">
                <div className="me-2 boxiconcheckmark">
                  <img src={checkmark} alt="Checkmark" />
                </div>
                <p className="mb-0">You can now transfer your winnings directly to your PayTM wallet under the following conditions:</p>
              </div>
            </div>
          </div>

          <div className="col-md-12 mb-4">
            <div
              className="bg-white p-3 p-md-5 rounded20 h-100"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span
                className="fn-40 mb-3 d-block fw-300"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                PayTM Wallet Cash-out Policies
              </span>
              <div className="d-flex">
                <div className="me-2 boxiconcheckmark">
                  <img src={checkmark} alt="Checkmark" />
                </div>
                <p className="mb-0">
                  Your PayTM account must be linked to your registered number with THINK11.
                </p>
              </div>
              <div className="d-flex mt-3">
                <div className="me-2 boxiconcheckmark">
                  <img src={checkmark} alt="Checkmark" />
                </div>
                <p className="mb-0">The minimum amount you can transfer in your PayTM wallet is Rs 300 & maximum is Rs 5,000 provided your KYC is complete.</p>
              </div>
              <div className="d-flex mt-3">
                <div className="me-2 boxiconcheckmark">
                  <img src={checkmark} alt="Checkmark" />
                </div>
                <p className="mb-0">KYC verified THINK11 account and the phone number linked should belong to you.</p>
              </div>
              <div className="d-flex mt-3">
                <div className="me-2 boxiconcheckmark">
                  <img src={checkmark} alt="Checkmark" />
                </div>
                <p className="mb-0">KYC verified THINK11 account and the phone number linked should belong to you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

   <DownloadAppSection/>
   <Footer/>
   </>
  )
}

export default Withdrawal