import React from "react";
import "./CheckoutPayment.css";
import logo from "../../Assets/images/SG_logo-nobg.png";
import mastercard from "../../Assets/images/mastercard.png";
import paypal from "../../Assets/images/paypal.png";
import google_pay from "../../Assets/images/google_pay.png";

function CheckoutPayment() {
  return (
    <>
      <div class="container-fluid mb-5 bg-light">
        <div class="row">
          <div class="col-3">
            <div id="bouton_retour">
              <i class="bi bi-arrow-left-circle-fill"></i>
            </div>
          </div>
          <div class="col-9">
            <div id="logo">
              <img src={logo} alt="Logo SportGlobes" />
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid container_pipeline d-flex justify-content-center mb-5">
        <div class="row">
          <div class="col icon_step">
            <i class="bi bi-box2-fill"></i>
            <p class="text-pipeline">Expedition</p>
          </div>
          <div class="col col-line">
            <svg
              version="1.1"
              id="line_2"
              // xmlns="http://www.w3.org/2000/svg"
              // xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="180px"
              height="5px"
              // xml:space="preserve"
            >
              <path
                class="path2"
                fill="#090446"
                stroke-width="3"
                stroke="#090446"
                d="M0 0 l1120 0"
              />
            </svg>
          </div>
          <div class="col icon_step">
            <i class="bi bi-credit-card-fill"></i>
            <p class="text-pipeline">Paiement</p>
          </div>
          <div class="col col-line">
            <svg
              version="1.1"
              id="line_2"
              //   xmlns="http://www.w3.org/2000/svg"
              //   xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="180px"
              height="5px"
              //   xml:space="preserve"
            >
              <path
                class="path2"
                fill="#090446"
                stroke-width="3"
                stroke="#090446"
                d="M0 0 l1120 0"
              />
            </svg>
          </div>
          <div class="col icon_step">
            <i class="bi bi-bag-check"></i>
            <p class="text-pipeline">Résumé</p>
          </div>
        </div>
      </div>
      <div class="container-fluid card-body">
        <div class="card m-2 shadow-lg p-2 mb-5 bg-white rounded">
          <div class="card">
            <div class="container moyens_paiement px-md-2 px-lg-4 py-5 mx-auto">
              <div class="row justify-content-center">
                <h3 class="m-4 pb-5">Sélectionner un moyen de Paiement</h3>
              </div>
              <div class="card_moyens_paiement">
                <div class="cmp row mb-3">
                  <div class="col-2">
                    <img
                      src={mastercard}
                      width="40"
                      height="40"
                      alt="paiement par carte"
                    />
                  </div>
                  <div class="col">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Carte de crédit
                      </label>
                    </div>
                  </div>
                </div>
                <div class="cmp row mb-3">
                  <div class="col-2">
                    <img
                      src={paypal}
                      width="40"
                      height="40"
                      alt="paiement via paypal"
                    />
                  </div>
                  <div class="col">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                      />
                      <label class="form-check-label" for="flexRadioDefault">
                        Paypal
                      </label>
                    </div>
                  </div>
                </div>
                <div class="cmp row mb-3">
                  <div class="col-2">
                    <img
                      src={google_pay}
                      width="40"
                      height="40"
                      alt="paiement via google pay"
                    />
                  </div>
                  <div class="col">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Google Pay
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="container px-1 px-md-2 px-lg-4 mx-auto">
                <div class="row d-flex justify-content-center">
                  <div class="col-xl-7 col-lg-8 col-md-9 col-sm-11">
                    <div class="card border-0">
                      <div class="row form-group">
                        <div class="col border-line pb-3">
                          <div class="form-group">
                            <p class="text-sm mb-0">Titulaire de la carte</p>
                            <input
                              class="form-control"
                              type="text"
                              name="name"
                              placeholder="Name"
                              size="50"
                            />
                          </div>
                          <div class="form-group">
                            <p class="text-sm mb-0">Numéro de la carte</p>
                            <div class="row px-3">
                              <input
                                class="form-control"
                                type="text"
                                name="card-num"
                                placeholder="0000 0000 0000 0000"
                                size="50"
                                id="cr_no"
                                minlength="19"
                                maxlength="19"
                              />
                            </div>
                          </div>
                          <div class="row form-group">
                            <div class="col-sm">
                              <p class="text-sm mb-0">Date d'expiration</p>
                              <input
                                class="form-control"
                                type="text"
                                name="exp"
                                placeholder="MM/YY"
                                size="15"
                                id="exp"
                                minlength="5"
                                maxlength="5"
                              />
                            </div>
                            <div class="col-sm" id="cvv">
                              <p class="text-sm mb-0">CVV/CVC</p>
                              <input
                                class="form-control"
                                type="password"
                                name="cvv"
                                placeholder="000"
                                size="5"
                                minlength="3"
                                maxlength="3"
                              />
                            </div>
                          </div>
                          <div class="form-group mb-0">
                            <div class="custom-control custom-checkbox custom-control-inline">
                              <input
                                id="chk1"
                                type="checkbox"
                                name="chk"
                                class="custom-control-input"
                                checked
                              />
                              <label
                                for="chk1"
                                class="custom-control-label text-muted text-sm"
                              >
                                Enregistrer ma carte pour les prochaines
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary mt-5 offset-3">
                  Paiement
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutPayment;
