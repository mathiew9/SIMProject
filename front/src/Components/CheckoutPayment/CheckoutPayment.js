import React from "react";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import PipelineCheckout from "../../Components/PipelineCheckout/PipelineCheckout";
import SelectionPayment from "./PaymentSelection/SelectionPayment";

function CheckoutPayment() {
  return (
    <>
      <HeaderLogo />
      <PipelineCheckout />
      <SelectionPayment />
    </>
  );
}

export default CheckoutPayment;
