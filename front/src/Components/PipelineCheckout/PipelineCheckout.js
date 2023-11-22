import "./PipelineCheckout.css";

function PipelineCheckout() {
  return (
    <>
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
    </>
  );
}

export default PipelineCheckout;
