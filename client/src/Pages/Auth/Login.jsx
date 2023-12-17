import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useAuth } from "../../Context/Auth";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function EcommerceLoginPage() {
  const navigate=useNavigate();
  const [auth, setAuth] = useAuth();
  const [errMsg, setErrMsg] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    timeTravelerID: '', // Add Time Traveler ID to the form
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:3000/api/auth/login`,
        { ...formData }
      );

      if (response) {
        const { user, token } = response.data;
        setAuth({ ...auth, user, token });
        localStorage.setItem('auth', JSON.stringify(response.data));
        toast.success('Logged In Successfully');
        navigate('/Upload')
        // Redirect to the dashboard or another page
      }
    } catch (err) {
      console.log("Catch", err.response);
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        toast.error('Missing Username or Password');
      } else if (err.response?.status === 401) {
        toast.error(err.response.data.message);
      } else {
        toast.error('Login Failed');
      }
    }

    setFormData({
      email: '',
      password: '',
      timeTravelerID: '', // Reset the Time Traveler ID field
    });
  };

  return (
  
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            {/* <img
              className="mx-auto h-12 w-auto"
              src="online-shop.png"  // Replace with your logo image path
              alt="E-commerce Logo"
            /> */}
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {/* ... other form fields */}
            <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
{<h1 className='text-red-500'>{errMsg}</h1>}
         
            <div>
              <label htmlFor="timeTravelerID" className="sr-only">
                Time Traveler ID
              </label>
              <input
                id="timeTravelerID"
                name="timeTravelerID"
                type="text"
                autoComplete="timeTravelerID"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Time Traveler ID"
                value={formData.timeTravelerID}
                onChange={handleChange}
              />
            </div>
            {/* ... other form fields */}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
  
  );
}

export default EcommerceLoginPage;
