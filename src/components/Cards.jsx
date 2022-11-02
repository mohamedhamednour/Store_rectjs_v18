import React from "react";
import Store_context from "./UseContext";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';

const Cards = () => {
  const { cards, setadd, addcards } = React.useContext(Store_context);
  const addcard = (idx) => {
    setadd([...addcards, idx]);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row gap-1">
          {cards
            ? cards.map((item) => [
                <div className="left-[30px] card max-w-[224px] mb-[10px] ">
                  <p>{item.name}</p>
                  <img
                    className="w-[150px]  h-[150px] mt-2 m-auto"
                    key={item.id}
                    src={item.image}
                  />
                  <br />
                  <h3 align="center"> price : {item.price}</h3>

                  <br />
                  <div align="text-center gap-1 p-1 flex ">
                 <center> <Rating name="size-small" defaultValue={item.rating.rate} size="small" /></center><br />
                    <button
                    
                      class=" ml-[10px] p-1 mb-[6px] m-auto w-[90px] bg-gray-100 hover:bg-red-500 text-red-700 font-semibold hover:text-white border border-red-500 hover:border-transparent rounded"
                    >
                     <Link   to={`/photo/${item.id}`}>
                      Detils
                    </Link>
                    </button>
                    <button
                      onClick={() => addcard(item)}
                      class="  p-1 m-auto w-[90px] bg-gray-100 hover:bg-red-500 text-red-700 font-semibold hover:text-white border border-red-500 hover:border-transparent rounded"
                    >
                     Add card
                    </button>
                  </div>
                  <br />
                </div>,
              ])
            : ""}
        </div>
      </div>
    </>
  );
};

export default Cards;
