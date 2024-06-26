import './App.css';
import { Icon } from '@iconify/react';
import Polo from './Polo';
import img1 from "./logo192.png"

function App() {
  return (
    <div className="App">
      <div>


        <nav className="flex justify-between items-center p-5 px-20 border-b-2 border-gray-100 ">
          <h1 className="italic text-3xl font-bold">Company</h1>
          <div >
            <button className="text-3xl bg-cart p-2 rounded-full">
              <Icon icon="uil:cart" className="text-icon" />
            </button>
          </div>
        </nav>


        {/* <div className="mt-10 p-10 flex justify-evenly"> */}
        <div className="mt-10 p-10 px-60 grid grid-cols-2">

          <div className>


            <div className="border-4 border-gray-100 p-20 w-full rounded mb-10 justify-center flex">
              {/* <img src={img1} alt="" className='w-img h-img' /> */}
              <img src={img1} alt="" className='' />
            </div>

            {/* Other Variants */}
            <div className="flex w-full justify-between">
              <button><Icon icon="fe:arrow-left" /></button>
              <img src={img1} alt="" className='w-20 h-20' />
              <img src={img1} alt="" className='w-20 h-20' />
              <img src={img1} alt="" className='w-20 h-20' />
              <img src={img1} alt="" className='w-20 h-20' />
              <button><Icon icon="fe:arrow-right" /></button>
            </div>
          </div>




          <div className=" p-10 col-span-1 md:w-text">


            <div className="flex pb-10 border-b-2 border-gray-200 justify-between ">
              <div className="text-start">
                <h1 className='font-bold text-2xl'>Polo Shirt</h1>
                <p className='text-gray-300 text-sm'>Teixeira Design Studio</p>
              </div>
              <div className='flex gap-2 h-fit'>
                <button className='bg-heart py-1 px-3 rounded-lg flex items-center gap-1'>
                  <Icon icon="mdi:heart-outline" className='text-heart-text text-md ' />
                  <p className='text-heart-text font-semibold'>109</p>
                </button>
                <button className='bg-save-bg py-1 px-2 rounded-lg flex items-center gap-1'>
                  <Icon icon="material-symbols:bookmark-outline" className='text-save text-md ' />
                </button>
                <button className='bg-save-bg py-1 px-2 rounded-lg flex items-center gap-1'>
                  <Icon icon="material-symbols:share" className='text-save text-md ' />
                </button>
              </div>
            </div>


            <div className="flex py-5 border-b-2 border-gray-200 gap-10 items-center w-full">
              <p className='font-bold text-3xl ml-2'>$71.56</p>
              <p className='text-gray-300 line-through text-xl'>$89.95</p>
            </div>


            <div className="py-5 flex flex-col justify-start items-start gap-3 border-b-2 border-gray-200 w-full">
              <p className='text-gray-300  text-md'>Choose a Color</p>
              <div className='flex gap-12'>
                <button className='w-10 h-10 bg-black rounded-full ml-2'></button>
                <button className='w-10 h-10 bg-gradient-to-b from-white to-white-circle rounded-full ml-2'></button>
                <button className='w-10 h-10 bg-orange rounded-full ml-2'></button>
                <button className='w-10 h-10 bg-cyan rounded-full ml-2'></button>
                <button className='w-10 h-10 bg-red-700 rounded-full ml-2'></button>
                <button className='w-10 h-10 bg-purple-700 rounded-full ml-2'></button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
