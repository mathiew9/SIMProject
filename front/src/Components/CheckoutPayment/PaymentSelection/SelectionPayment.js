import React, { useState } from "react";
import "./SelectionPayment.css";
import mastercard from "../../../Assets/images/mastercard.png";
import paypal from "../../../Assets/images/paypal.png";
import google_pay from "../../../Assets/images/google_pay.png";
import InfoPaymentPaypal from "../InfoPayment/InfoPaymentPaypal";
import InfoPaymentCard from "../InfoPayment/InfoPaymentCard";
import InfoPaymentGoogle from "../InfoPayment/InfoPaymentGoogle";

function SelectionPayment() {
  const [selectedPayment, setSelectedPayment] = useState("");

  const handlePaymentSelection = (payment) => {
    setSelectedPayment(payment);
  };

  return (
    <>
      <div className="container-fluid card-body">
        <div className="card m-2 shadow-lg p-2 mb-5 bg-white rounded">
          <div className="card">
            <div className="container moyens_paiement px-md-2 px-lg-4 py-5 mx-auto">
              <div className="select_payment row justify-content-center">
                <h3 className="m-4 pb-5">Sélectionner un moyen de Paiement</h3>
              </div>
              <div className="card_moyens_paiement">
                <div className="cmp row mb-3">
                  <div className="col-2">
                    <img
                      src={mastercard}
                      width="40"
                      height="40"
                      alt="paiement par carte"
                    />
                  </div>
                  <div className="col">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked={selectedPayment === "mastercard"}
                        onChange={() => handlePaymentSelection("mastercard")}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Carte de crédit
                      </label>
                    </div>
                  </div>
                </div>
                <div className="cmp row mb-3">
                  <div className="col-2">
                    <img
                      src={paypal}
                      width="40"
                      height="40"
                      alt="paiement via paypal"
                    />
                  </div>
                  <div className="col">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        checked={selectedPayment === "paypal"}
                        onChange={() => handlePaymentSelection("paypal")}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault"
                      >
                        Paypal
                      </label>
                    </div>
                  </div>
                </div>
                <div className="cmp row mb-3">
                  <div className="col-2">
                    <img
                      src={google_pay}
                      width="40"
                      height="40"
                      alt="paiement via google pay"
                    />
                  </div>
                  <div className="col">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        checked={selectedPayment === "google_pay"}
                        onChange={() => handlePaymentSelection("google_pay")}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Google Pay
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {selectedPayment === "mastercard" && <InfoPaymentCard />}
              {selectedPayment === "paypal" && <InfoPaymentPaypal />}
              {selectedPayment === "google_pay" && <InfoPaymentGoogle />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectionPayment;
