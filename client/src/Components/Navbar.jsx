import React,{useState} from 'react'
import { Link,NavLink } from 'react-router-dom';
import {useAuth} from "../Context/Auth"
import {toast } from "react-toastify"
import Profile from "../assets/profile.png"
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
          <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            
           
          <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Gallery</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Memebers</a>
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
                 <li>
                  <Link
                    to="/Dashboard/user/profile"
                    className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    My profile
                  </Link>
                </li>
                <li>
                  <Link
                    to={auth?.user?.role ===1 ? "/Dashboard/admin" :"/Dashboard/user"}
                    className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >
                   Admin Dashboard
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    Account settings
                  </a>
                </li>
              </ul>
              <ul
                className="py-1 font-light text-gray-500 dark:text-gray-400"
                aria-labelledby="dropdown"
              >
                <li>
                  <a
                    href="#"
                    className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="mr-2 w-5 h-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>{" "}
                    My likes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="mr-2 w-5 h-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>{" "}
                    Collections
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex justify-between items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <span className="flex items-center">
                      <svg
                        aria-hidden="true"
                        className="mr-2 w-5 h-5 text-primary-600 dark:text-primary-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                          clipRule="evenodd"
                        />
                      </svg>{" "}
                      Pro version
                    </span>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
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