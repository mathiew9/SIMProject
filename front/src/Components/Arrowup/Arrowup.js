import "./Arrowup.css";

const Arrowup = () => {
  let dernierePositionScroll = 0;

  function positionZero(scrollPos) {
    const retourHaut = document.getElementById("retour_haut");

    if (scrollPos === 0) {
      retourHaut.classList.add("scroll_down");
    } else {
      retourHaut.classList.remove("scroll_down");
    }
  }

  document.addEventListener("scroll", (event) => {
    dernierePositionScroll = window.scrollY;
    positionZero(dernierePositionScroll);
  });

  return (
    <a href="#header" className="retour_haut scroll_down" id="retour_haut">
      <i className="bi bi-chevron-up"></i>
    </a>
  );
};

export default Arrowup;
