import "./HeaderLogo.css";
import logo from "../../../Assets/images/SG_logo-nobg.png";

function HeaderLogo() {
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
    </>
  );
}

export default HeaderLogo;
