import React from 'react';
import Navbar from '../../components/Navbar.jsx';
import Swiper from '../../components/Swiper.jsx';
import DaysWithCards from '../../components/Cards.jsx';
import Menu from '../../components/Menu.jsx';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Swiper />

      {/* Notre Menu Section */}
      <div className=" py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col items-center space-y-4">
            <h1 className="text-center text-3xl sm:text-4xl font-bold text-black">
              Notre <span className="text-yellow-500">Menu</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg text-center max-w-2xl">
              Découvrez nos délicieuses options !
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
          </div>
          <div className="bg-amber-50 rounded-xl p-8 ">
            <div className='w-[90%] m -auto'>
            <Menu />
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Section */}
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
        <DaysWithCards />
      </div>
    </div>
  );
};

export default Home;

