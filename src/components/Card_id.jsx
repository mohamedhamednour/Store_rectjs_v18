import React from "react";
import { useParams } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";


const Update = () => {
  const { id } = useParams();
  const [detils, setdetils] = React.useState([])  

  const Get_card = async () => {
    const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}` 
    );

    setdetils(data);

  };





  React.useEffect(() => {
    Get_card();  //call function 

  }, [detils]);
  return (
    <>

      <div className="container-fluid text-blue-500">
        <div className="row bg-white">
          <div align='center' className="col-12 "><br />
            <span className="mt-[20px] text-black ">{detils.title}</span>
<br /> <br />
          </div><br /><br />
          <div className="col-12 col-md-4 ">
            <img className="w-[200px] m-auto h-[200px]" src={detils.image} alt="" />
          </div>
          <div className="col-12   col-md-4"><span className="m-auto ">{detils.description}</span></div>
          <div className="col-12   col-md-4"><span className="m-auto">price :{detils.price}</span></div>





          <div className="col-12">


            <center className="mt-[20px] mb-3 text-[30px] text-green-500">payment
            </center>
         
<div className="m-auto">
<center>
<PayPalScriptProvider options={{ "client-id": "ARey6Qq_Qyw2-WUmM8eiHEQutpkqZqFo6_54Q8ya85YDQH5WahFQoCmnVGmLkZr9DqfxZlHjyRjDtOr-" }}>
              <PayPalButtons
            
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: "1.99",
                            },
                        },
                    ],
                });
            }}
            onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                    const name = details.payer.name.given_name;
                  
                });
            }}
        
              />
            </PayPalScriptProvider>
</center>
</div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Update;