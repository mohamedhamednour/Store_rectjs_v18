import React from "react";
import sv from "./asset/img/ccc.svg";
import Store_context from "./UseContext";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const { addcards, delateitem, currentUser, logout ,setCurrentUser } =
    React.useContext(Store_context);
    const navigate = useNavigate();
    async function handleLogout() {
  
      try {
        await logout()
        setCurrentUser('')
        navigate("sign_in")
      } catch(e){
        console.error(e)
      }
    }
 
  return (
    <>
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <a href="/" class="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              STORE
            </span>
          </a>
          <div class="flex items-center">
            {currentUser ? (
              currentUser
            ) : (
              <Link
                class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                to="sign_in"
              >
                login
              </Link>
            )}

            <button className="bg-blue-500 p-1 rounded text-white" onClick={handleLogout}>log_out</button>
           
          </div>
        </div>
      </nav>
      <nav class="bg-gray-50 dark:bg-gray-700">
        <div class="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
          <div class="flex items-center">
            <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <Link to="/">Home</Link>
              </li>

             
              <li
                data-toggle="modal"
                data-target="#exampleModal"
                className="flex gap-1 cursor-pointer "
              >
                <img className="w-6 " src={sv} alt="" />
                {addcards.length}
              </li>
              <h1></h1>
            </ul>
          </div>
        </div>
      </nav>

  

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                cards
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              {addcards
                ? addcards.map((item) => [
                    <div className="  w-full mb-[10px] flex gap-1 ">
                      <p className="text-blue-500 w-[-webkit-fill-available]">
                        {item.title}
                      </p>
                      <img
                        className="w-[90px]  h-[90px]  m-auto"
                        key={item.id}
                        src={item.image}
                      />
                      <p className="text-blue-500">{item.price}$</p>
                      <button class=" h-[30px] w-[90px]  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded">
                        <Link to={`/photo/${item.id}`}>Detils</Link>
                      </button>
                      <button
                        onClick={() => delateitem(item.id)}
                        className="text-white bg-red-500 rounded w-6 h-6"
                      >
                        X
                      </button>
                    </div>,
                  ])
                : ""}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
