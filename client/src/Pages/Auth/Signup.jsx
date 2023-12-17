// Import necessary libraries and components
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// RegistrationForm component
function RegistrationForm() {
  // Define your initial form values
  const initialValues = {
    name: '',
    email: '',
    timeTravelerID: '', // New field for Time Traveler ID
  };

  // Define the validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    timeTravelerID: Yup.string().required('Time Traveler ID is required'), // New validation
  });

  // Formik configuration
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        // Include the new field in the API request
        const response = await axios.post(`http://localhost:3000/api/auth/register`, values);

        if (response) {
          console.log(response.data);
          if (response.data.success) {
            toast.success('Registered Successfully');
          } else {
            toast.info('Already Registered. Please login.');
          }
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  // Return the form JSX
  return (
  
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up for Time Capsule</h2>
          </div>
          <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
            <div className="mb-4">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="given-name"
                placeholder="Your Name"
                {...formik.getFieldProps('name')}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="mt-2 text-sm text-red-600">{formik.errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="Your Email"
                {...formik.getFieldProps('email')}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="mt-2 text-sm text-red-600">{formik.errors.email}</p>
              )}
            </div>
            <div className="mb-4">
      <label htmlFor="password" className="sr-only">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        autoComplete="new-password"
        placeholder="Password"
        {...formik.getFieldProps('password')}
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      />
      {formik.touched.password && formik.errors.password && (
        <p className="mt-2 text-sm text-red-600">{formik.errors.password}</p>
      )}
    </div>            <div className="mb-4">
              <label htmlFor="timeTravelerID" className="sr-only">
                Time Traveler ID
              </label>
              <input
                type="text"
                id="timeTravelerID"
                name="timeTravelerID"
                autoComplete="off"
                placeholder="Time Traveler ID (e.g., TARDIS123)"
                {...formik.getFieldProps('timeTravelerID')}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
              {formik.touched.timeTravelerID && formik.errors.timeTravelerID && (
                <p className="mt-2 text-sm text-red-600">{formik.errors.timeTravelerID}</p>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>

  );
}

export default RegistrationForm;
