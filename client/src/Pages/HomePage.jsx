import React from 'react'
import { Link } from 'react-router-dom'
import Main from "../assets/Main.jpg"
const HomePage = () => {
  return (
    <div>
       <section className="bg-white dark:bg-gray-900">
  <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
    <img className="w-full dark:hidden" src="main.jpg" alt="dashboard image" />
    <img className="w-full hidden dark:block" src={Main} alt="dashboard image" />
    <div className="mt-4 md:mt-0">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
TimeVista: Journey Through Digital Memories.</h2>
      <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Embark on an enchanting expedition through the corridors of time with TimeVista, where the past, present, and future converge in a digital tapestry of memories. This innovative platform transcends the boundaries of traditional storytelling, offering a captivating journey through the heart of your most cherished moments.</p>
      <Link to="/Upload" className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
        Get started
        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
      </Link>
    </div>
  </div>
</section>

    </div>
  )
}

export default HomePage