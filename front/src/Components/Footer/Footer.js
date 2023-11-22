import "./Footer.css";

function Footer() {
  return (
    <footer className="row mt-3" id="footer_row">
      <span>
        Copyright <i className="bi bi-c-circle"></i> 2023 SportGlobes, Tous
        droits réservés.
      </span>
      <div>
        <span className="liens_footer"> Mentions Légales</span>|
        <span className="liens_footer">CGV</span>|
        <span className="liens_footer">
          Protection des données personnelles
        </span>
        |<span className="liens_footer">Réglage cookies</span>
      </div>
      <span>
        <i className="bi bi-facebook"></i> - <i className="bi bi-instagram"></i>{" "}
        -<i className="bi bi-twitter-x"></i> -{" "}
        <i className="bi bi-linkedin"></i>
      </span>
    </footer>
  );
}

export default Footer;
