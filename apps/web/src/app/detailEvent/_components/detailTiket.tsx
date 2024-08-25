'use client';

import Navbar from '@/components/navbar';
import Image from 'next/image';
import { MdOutlineDateRange } from 'react-icons/md';
import { MdOutlineTimer } from 'react-icons/md';
import { SiGooglemaps } from 'react-icons/si';
import { useState } from 'react';
import TicketCard from '../_components/tiket';
import TicketInfo from '../_components/tiket';
import BottomNav from '../../BottomNav/page';
import { getEvent } from '@/libs/action/event';
import { IEvent } from '@/components/cardtes';
import { formatDate } from '../../utils/formatDate';

export default function DetailTicket({ name }: { name: IEvent }) {
  const [activeTab, setActiveTab] = useState(1);

  console.log(name.name);

  return (
    <div className=" bg-white ">
      <Navbar />
      <div className=" px-7 container mx-auto py-5">
        <div className="lg:p-5 flex justify-center items-center">
          <Image
            className="rounded-xl lg:w-full lg:h-[50vh]"
            src="/b2.jpg"
            alt="detail"
            width={500}
            height={500}
          />
        </div>

        <div className="lg:flex lg:flex-row-reverse lg:px-5 lg:w-full lg:h-full lg:mx-auto">
          <div className="flex flex-col p-4 mt-12 shadow-2xl lg:h-[28vh] rounded-box lg:ml-7 text-black">
            <p className=" font-bold text-2xl">{name.name}</p>
            <div className="inline-flex gap-2 mt-3">
              <MdOutlineDateRange />
              <p className="text-xs lg:text-base">{formatDate(name.date)}</p>
            </div>
            <div className="inline-flex gap-2 mt-3">
              <MdOutlineTimer />
              <p className="text-xs lg:text-base">{name.seats}</p>
            </div>
            <div className="inline-flex gap-2 mt-3">
              <SiGooglemaps />
              <p className="text-xs lg:text-base">{name.location}</p>
            </div>
          </div>

          <div className="flex bg-white text-black flex-col mt-5 shadow-xl h-full p-4 lg:w-full">
            <div role="tablist" className="tabs tabs-lifted">
              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab"
                aria-label="Deskripsi"
                checked={activeTab === 1}
                onChange={() => setActiveTab(1)}
              />
              <div
                role="tabpanel"
                className={`tab-content rounded-box p-6 ${activeTab === 1 ? 'block' : 'hidden'} `}
              >
                <p className="mt-5 text-balance">{name.description}</p>
              </div>

              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab lg:ml-2"
                aria-label="Tiket"
                checked={activeTab === 2}
                onChange={() => setActiveTab(2)}
              />
              <div
                role="tabpanel"
                className={`tab-content  rounded-box p-6 ${activeTab === 2 ? 'block' : 'hidden'}`}
              >
                <TicketInfo />

                <button className="bg-blue-500 mt-4 w-full text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
                  Beli Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
