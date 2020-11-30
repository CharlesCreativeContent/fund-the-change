import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51Ha6EUEsCFPlCMG13YMA2jlqYopE1NnrRpMeZWJYOQM6JuU5KWWq5NqtoDSwtJQ8lKi1Xq5nnB9SYOAR5Jb9pqDp00kPG7meQM";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = (props) => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm user={props.user}/>
    </Elements>
  );
};

export default Stripe;
