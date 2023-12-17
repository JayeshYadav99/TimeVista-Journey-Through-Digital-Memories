import React,{useState} from 'react'
import { Link,NavLink } from 'react-router-dom';
import {useAuth} from "../Context/Auth"
import {toast } from "react-toastify"
import Profile from "../assets/profile.png"
import Main from "../assets/Main.jpg"
const Navbar = () => {
   const [auth,SetAuth]=useAuth();
  const [dropdowns, setDropdowns] = useState({
    appsDropdown: false,

    profileDropdown: false,
    notificationDropdown: false,
  });
  const toggleDropdown = (dropdownName) => {
    setDropdowns((prevDropdowns) => {
      const updatedDropdowns = {};

      // Close all other dropdowns
      for (const name in prevDropdowns) {
        updatedDropdowns[name] = false;
      }

      // Toggle the selected dropdown
      updatedDropdowns[dropdownName] = !prevDropdowns[dropdownName];

      return updatedDropdowns;
    });
  };

//Logout functionality
const handleLogout=()=>{
  SetAuth({
    ... auth,
    user:null,
    token:''
  });
  localStorage.removeItem("auth");
  toast.success("Logged Out Successfully");
}
  return (
    <div>
       <nav className="bg-gray-800">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* Mobile menu button*/}
   
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <img className="h-8 w-auto" src={Main} alt="Your Company" />
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            
           
          <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
            <Link to="/Gallery" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Gallery</Link>
            <Link to="/Upcoming" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Upcoming</Link>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Time Capsule Calendar</a>
            {!auth.user ? (   <>
        <li>
        <NavLink
          to="/login"
          activeClassName="text-indigo-500" // Apply active styling here
          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
        >
          Login
        </NavLink>
      </li>
            <li>
            <NavLink
              to="/signup"
              activeClassName="text-indigo-500" // Apply active styling here
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              Register
            </NavLink>
          </li></>  ):( <li>
            <NavLink
              to="/"
              activeClassName="text-indigo-500" // Apply active styling here
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              onClick={handleLogout}
            >
              Logout
            </NavLink>
          </li>)}
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">View notifications</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </button>
        
        {/* Profile dropdown */}
        <button
              type="button"
              className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              onClick={() => toggleDropdown('profileDropdown')}
              data-dropdown-toggle="dropdown"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src={Profile}
                alt="user photo"
              />
            </button>
            {/* Dropdown menu */}
            <div
              className={` z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 ${dropdowns.profileDropdown ? "block" : "hidden"
                }`}
              id="dropdown"
              style={{ position: "absolute", right: "1rem", top: "3.5rem" }}

            >
              <div className="py-3 px-4">
                <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                  {auth?.user?.name}
                </span>
                <span className="block text-sm font-light text-gray-500 truncate dark:text-gray-400">
                {auth?.user?.name}
                </span>
              </div>
              <ul
                className="py-1 font-light text-gray-500 dark:text-gray-400"
                aria-labelledby="dropdown"
              >
               
               
              
              </ul>
           
              <ul
                className="py-1 font-light text-gray-500 dark:text-gray-400"
                aria-labelledby="dropdown"
              >
                <li>
                  <Link
                    to="/"
                    onClick={handleLogout}
                    className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
      </div>
    </div>
  </div>
  {/* Mobile menu, show/hide based on menu state. */}
  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
      <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
    </div>
  </div>
</nav>

  </div>
  )
}

export default Navbar