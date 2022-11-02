import React from "react";
import Cards from "./Cards";
import Store_context from "./UseContext";
import  Filre_check  from "./Filre_check";
const Home = () => {
  const { changeData } = React.useContext(Store_context);
  return (
    <div className="">
      <section class="container   py-10 max-w-full">
        <div className="row">
        <div class=" col-sm-12 col-md-3 col-xl-3  max-w-[352px]">
          <ul className="ml-[30px] bg-white p-4 ">
            <div className="m-auto">
              <li>
                <button
                  onClick={() => changeData("women's clothing")}
                  class="hover:bg-blue-500 w-[90px] text-blue-700 font-semibold hover:text-white p-2 border border-blue-500 hover:border-transparent rounded"
                >
                  women's
                </button>
              </li>
              <li>
                <button
                  onClick={() => changeData("men's clothing")}
                  class="hover:bg-blue-500 w-[90px] text-blue-700 font-semibold hover:text-white p-2 mt-[10px] border border-blue-500 hover:border-transparent rounded"
                >
                  men's
                </button>
              </li>
              <li>
                <button
                  onClick={() => changeData("electronics")}
                  class="hover:bg-blue-500 w-[90px] text-blue-700 font-semibold hover:text-white p-2 mt-[10px] border border-blue-500 hover:border-transparent rounded"
                >
                  electronic
                </button>
              </li>
              <li>
                <button
                  onClick={() => changeData("jewelery")}
                  class="hover:bg-blue-500 w-[90px] text-blue-700 font-semibold hover:text-white p-2 mt-[10px] border border-blue-500 hover:border-transparent rounded"
                >
                  jewelery
                </button>
              </li>
            </div>
            <hr  className="mt-[10px] h-[3px]"/>
            <Filre_check />
          </ul>
      

        </div>
        <div class="  col-9  max-w-full">
          <Cards />
      
        </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
