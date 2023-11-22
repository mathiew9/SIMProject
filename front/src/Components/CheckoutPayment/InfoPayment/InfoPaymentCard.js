import "./InfoPaymentCard.css";

function InfoPaymentCard() {
  return (
    <>
      <div class="container px-1 px-md-2 px-lg-4 mx-auto">
        <div class="row d-flex justify-content-center">
          <div class="col-xl-7 col-lg-8 col-md-9 col-sm-11">
            <div class="card border-0">
              <div class="row form-group">
                <div class="col border-line pb-3">
                  <div class="form-group pb-3">
                    <p class="text-sm mb-0">Titulaire de la carte</p>
                    <div class="row px-2">
                      <input
                        class="form-control"
                        type="text"
                        name="name"
                        placeholder="Nom"
                        size="50"
                      />
                    </div>
                  </div>
                  <div class="form-group pb-3">
                    <p class="text-sm mb-0">Numéro de la carte</p>
                    <div class="row px-2">
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
                      <div class="row px-2">
                        <input
                          class="form-control"
                          type="text"
                          name="exp"
                          placeholder="MM/AA"
                          size="15"
                          id="exp"
                          minlength="5"
                          maxlength="5"
                        />
                      </div>
                    </div>
                    <div class="col-sm" id="cvv">
                      <p class="text-sm mb-0">CVV/CVC</p>
                      <div class="row px-2">
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
                  </div>
                  <div class="form-group mb-0 pt-4">
                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input
                        id="chk1"
                        type="checkbox"
                        name="chk"
                        class="custom-control-input"
                        // checked
                      />
                      <label
                        for="chk1"
                        class="custom-control-label text-muted text-sm ps-2"
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
        <div className="button-submit d-flex justify-content-center">
          <button type="submit" class="btn btn-primary m-5">
            Paiement
          </button>
        </div>
      </div>
    </>
  );
}

export default InfoPaymentCard;
