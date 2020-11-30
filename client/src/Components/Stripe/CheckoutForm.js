import React, {useState} from "react";
import './Stripe.css'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

export const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount ] = useState(0);
  const [customer, setcustomer ] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const index = window.location.pathname.lastIndexOf("/")
    const organizations= window.location.pathname.slice(index+1)
    console.log("hello I am organizations id",organizations);



    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "http://localhost:8000/stripe/charge",
          {
            amount: amount,
            customer:customer,
            organizationId:organizations,
            id: id,
            userId: props.user
          }
        );

        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!")
          window.location ="/profile"
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
    <section className="payment">
    <div>
    <p>Enter Amount </p>
    <input className="field" placeholder="Amount" onChange={ (e) => setAmount(e.target.value)}/>
    </div>
    <div>
    <p> Enter email </p>
    <input className="field" placeholder="Email" onChange={ (e) => setcustomer(e.target.value)}/>
    </div>
      <CardElement />
      <button className="Pay">Pay</button>
      </section>
    </form>
  );
};
