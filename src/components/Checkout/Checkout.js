import React from "react";
import { useParams } from "react-router";

const Checkout = () => {
  const { orderid } = useParams();
  console.log(orderid);
  return (
    <div>
      <h1 className="font-bold text-2xl mt-10"> Checkout</h1>{" "}
      <form className="text-white p-10 rounded-3xl mx-auto lg:w-1/2 w-3/4 grid grid-cols-1 gap-5 border-2 bg-gray-700 mb-20 mt-10">
        <h1 className="font-bold text-2xl">Please Pay ${orderid}</h1>

        <input type="text" placeholder="Full Name" />

        <input type="text" placeholder="Mobile Number" />

        <a className="bg-orange-600 w-24 mx-auto" href="#">
          Submit
        </a>
      </form>
    </div>
  );
};

export default Checkout;
