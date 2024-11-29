import React from 'react';
import Navbar from '../../components/Navbar.jsx';
import Swiper from '../../components/Swiper.jsx';
import DaysWithCards from '../../components/Cards.jsx';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Swiper />    

      <div className="my-10 flex flex-col items-center space-y-4">
  <h1 className="text-center text-3xl sm:text-4xl font-bold text-black">
    Our <span className="text-yellow-500">Schedule</span>
  </h1>
  <p className="text-gray-600 text-base sm:text-lg text-center max-w-2xl">
    Découvrez nos jours de travail !
  </p>
  <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
</div>
      <div className='w-[90%] m-auto'>
      <DaysWithCards/>
      </div>
    </div>
  );
};

export default Home;
