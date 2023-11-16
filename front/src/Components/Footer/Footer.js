import "./Footer.css";

function Footer() {
  return (
    <footer class="row mt-3" id="footer_row">
      <span>
        Copyright <i class="bi bi-c-circle"></i> 2023 SportGlobes, Tous droits
        réservés.
      </span>
      <div>
        <span class="liens_footer"> Mentions Légales</span>|
        <span class="liens_footer">CGV</span>|
        <span class="liens_footer">Protection des données personnelles</span>|
        <span class="liens_footer">Réglage cookies</span>
      </div>
      <span>
        <i class="bi bi-facebook"></i> - <i class="bi bi-instagram"></i> -
        <i class="bi bi-twitter-x"></i> - <i class="bi bi-linkedin"></i>
      </span>
    </footer>
  );
}

export default Footer;
