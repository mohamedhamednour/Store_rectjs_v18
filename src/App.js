import './App.css';
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom';
import Store_context from "./components/UseContext";
import { useContext } from "react";



function App() {
    const { currentUser } =
useContext(Store_context);
  return (
    <div className="App bg-gray-200">
   
{currentUser ?   <NavBar /> : '' }
<div className='main'>
{/* Outlet this chage page by route dom   */}
<Outlet />
<hr />
{/* //footer */}
<footer class="p-4 bg-white  text-blue-500 rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
    <div class="sm:flex sm:items-center sm:justify-between text-blue-500">
        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
            <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-8" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">STORE</span>
        </a>
        <ul class="flex flex-wrap items-center mb-2 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
           
            <li>
                <a href="#" class="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr  className='bt-[5px]'/>
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:underline">STORE</a>.com
    </span>
</footer>

</div>




    </div>
  );
}

export default App;
