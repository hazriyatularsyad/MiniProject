'use client'

import Navbar from '@/components/navbar';
import Image from 'next/image';
import { MdOutlineDateRange } from 'react-icons/md';
import { MdOutlineTimer } from 'react-icons/md';
import { SiGooglemaps } from 'react-icons/si';
import { useState } from 'react';
import TicketCard from './_components/tiket';
import TicketInfo from './_components/tiket';
import BottomNav from '../BottomNav/page';

export default function DetailTicket() {

const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className=" px-7 container mx-auto py-5">
        <div className="lg:p-5 flex justify-center items-center">
          <Image
            className="rounded-xl"
            src="/b3.jpg"
            alt="detail"
            width={700}
            height={400}
            priority
          />
        </div>

        <div className="lg:flex lg:flex-row-reverse lg:px-5 lg:w-full lg:h-[30vh] lg:mx-auto">
          <div className="flex flex-col p-4 mt-12 bg-base-100 border-base-100 rounded-box ml-7 ">
            <p className=" font-bold">ROMANSA PROJECT</p>
            <div className="inline-flex gap-2 mt-3">
              <MdOutlineDateRange />
              <p className="text-xs lg:text-base">20 - Oktober - 2024</p>
            </div>
            <div className="inline-flex gap-2 mt-3">
              <MdOutlineTimer />
              <p className="text-xs lg:text-base">15:00 WIB</p>
            </div>
            <div className="inline-flex gap-2 mt-3">
              <SiGooglemaps />
              <p className="text-xs lg:text-base">
                Halaman Angel Wings Lampung | Jl. Raden Intan No.107, Enggal,
                Kota Bandar Lampung, Lampung, Indonesia
              </p>
            </div>
          </div>

          <div className="flex flex-col mt-5 shadow-xl lg:w-full ">
            <div role="tablist" className="tabs tabs-lifted">
              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab text-base"
                aria-label="Deskripsi"
                checked={activeTab === 1}
                onChange={() => setActiveTab(1)}
              />
              <div
                role="tabpanel"
                className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${activeTab === 1 ? 'block' : 'hidden'}`}
              >
                <p className="mt-5 text-balance">
                  Explosive Fest merupakan festival musik yang diselenggarakan
                  oleh jurusan Ilmu Administrasi Bisnis Universitas Lampung.
                  Informasi selengkapnya langsung cek instagram
                  @explosivefest2024. Barcode pada E-ticket ini bersifat
                  rahasia. Pemegang e-ticket wajib menjaga kerahasiaan Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
                  impedit. Nam, cumque maxime. Repellat sequi placeat porro
                  adipisci? Ad, similique?
                </p>
              </div>

              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab text-base"
                aria-label="Tiket"
                checked={activeTab === 2}
                onChange={() => setActiveTab(2)}
              />
              <div
                role="tabpanel"
                className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${activeTab === 2 ? 'block' : 'hidden'}`}
              >
                <TicketInfo />

                <button className="bg-blue-500 mt-4 w-full text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
                  Beli Sekarang
                </button>
              </div>

              {/* <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab"
                aria-label="Tab 3"
                checked={activeTab === 3}
                onChange={() => setActiveTab(3)}
              />
              <div
                role="tabpanel"
                className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${activeTab === 3 ? 'block' : 'hidden'}`}
              >
                Tab content 3
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <BottomNav/>
    </div>
  );
}
