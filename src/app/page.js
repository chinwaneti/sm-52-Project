import React from 'react';
import './styles/style.css';
import { MdNavigateNext } from 'react-icons/md';

export default function Page() {
  return (
    <div className="bg-purple-400 h-screen">
      <div className="bg-purple-400 h-[45vh]"></div>
      <div className="flex md:ml-[28%] ml-8">
        <div className="bg-purple-950 md:w-[30%] w-[30%]  h-[40vh] text-white p-5 rounded-l-2xl shadow-lg">
          <p className="font-extralight">COURSE</p>
          <p className="font-bold md:text-4xl mt-4">JavaScript Fundamentals</p>
          <p className="mt-20 text-gray-100 font-extralight flex items-center">
            view all chapters
            <div>
              <MdNavigateNext style={{ color: 'wheat' }} size={25} />
            </div>
          </p>
        </div>
        <div className="bg-white md:w-[60%] w-[60%] h-[40vh] p-5 rounded-r-2xl shadow-lg">
          <div>
            <p className=''>CHAPTER 4</p>
            <div className="float-right">
              <div className="line-loading">
                <p className="ml-20">6/9 Challenges</p>
              </div>
            </div>
            <div className="mt-10 font-bold md:text-4xl text-xl">
              <p>Callbacks & Closures</p>
            </div>
          </div>
          <div className="rounded-full shadow-lg cursor-pointer hover:bg-purple-600 mt-20 bg-purple-950 p-3 text-center md:ml-[80%] ml-[60%] text-white w-28 h-12">
            <p>Continue</p>
          </div>
        </div>
      </div>
    </div>
  );
}
