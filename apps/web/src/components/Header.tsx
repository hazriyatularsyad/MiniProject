import BottomNav from '@/app/BottomNav/page';
import CarouselComponent from '@/components/carousel';
import Navbar from '@/components/navbar';
import { Footer } from 'flowbite-react';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="flex flex-col py-11 items-center justify-center text-center">
        <h1 className="text-5xl font-bold font-positiveForward">
          ON SHOWING EVENT
        </h1>

        <p className="mt-6">
          <span className="underline decoration-yellow-500 ">Lorem</span> ipsum
          dolor sit, amet consectetur adipisicing elit. Est beatae in sunt?
        </p>
      </div>
      <div className="lg:flex container mx-auto w-3/4 ">
        <div className="w-full lg:w-[70vh]">
          <p className="text-4xl">
            <span className="text-yellow-500 font-extrabold">I</span> POPULAR
            CATEGORIES
          </p>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 lg:mt-4">
            <div className="flex flex-col gap-4">
              <div className="flex p-4 sm:h-[10vh] lg:h-[15vh] sm:w-full">
                <Image
                  src="/Hammersonic.jpg"
                  alt="Hammerson"
                  width={120}
                  height={80}
                  priority
                />
                <div className="ml-5">
                  <p className="hover:underline hover:cursor-pointer font-bold">
                    HAMMERSONIC
                  </p>
                  <p className="hover:underline hover:cursor-pointer">
                    International Metal Festival
                  </p>
                </div>
              </div>
              <div className="flex p-4 sm:h-[10vh] lg:h-[15vh] sm:w-full">
                <Image
                  src="/wtflogo.png"
                  alt="we the fest"
                  width={120}
                  height={80}
                  priority
                />
                <div className="ml-5">
                  <p className="hover:underline hover:cursor-pointer font-bold">
                    WE THE FEST
                  </p>
                  <p className="hover:underline hover:cursor-pointer">
                    Festival musik, seni, mode dan makanan
                  </p>
                </div>
              </div>
              <div className="flex p-4 sm:h-[10vh] lg:h-[15vh] sm:w-full">
                <Image
                  src="/jrcklnd.jpg"
                  alt="Java Rockin Land"
                  width={120}
                  height={80}
                  priority
                />
                <div className="ml-5">
                  <p className="hover:underline hover:cursor-pointer font-bold">
                    JAVA ROCKINLAND
                  </p>
                  <p className="hover:underline hover:cursor-pointer">
                    Festival rock tahunan
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex p-4 sm:h-[10vh] lg:h-[15vh] sm:w-full">
                <Image
                  src="/tsp.jpg"
                  alt="The Sound Project"
                  width={120}
                  height={80}
                  priority
                />
                <div className="ml-5">
                  <p className="hover:underline hover:cursor-pointer font-bold">
                    The Sound Project
                  </p>
                  <p className="hover:underline hover:cursor-pointer">
                    Platform musik berbasis kampus-komunitas
                  </p>
                </div>
              </div>
              <div className="flex p-4 sm:h-[10vh] lg:h-[15vh] sm:w-full">
                <Image
                  src="/lalalogo.jpg"
                  alt="Lalala Fest"
                  width={120}
                  height={80}
                  priority
                />
                <div className="ml-5">
                  <p className="hover:underline hover:cursor-pointer font-bold">
                    Lalala Fest
                  </p>
                  <p className="hover:underline hover:cursor-pointer">
                    Annual Celebration of Music and Arts Festival
                  </p>
                </div>
              </div>
              <div className="flex p-4 sm:h-[10vh] lg:h-[15vh] sm:w-full">
                <Image
                  src="/jjflogo.jpg"
                  alt="Java Jazz Festival"
                  width={120}
                  height={80}
                  priority
                />
                <div className="ml-5">
                  <p className="hover:underline hover:cursor-pointer font-bold">
                    Java Jazz Festival
                  </p>
                  <p className="hover:underline hover:cursor-pointer">
                    The largest jazz music festival held every year
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-3 mt-5">
            <p className="relative cursor-pointer text-l w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
              see more
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="relative pt-2">
            <input
              type="search"
              className="relative md:block m-0 block w-full rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <div className="overflow-hidden lg:h-[50vh] relative group  lg:w-full sm:h-[33vh] sm:mt-10">
            <Image
              className=" transition duration-300 ease-in-out group-hover:scale-110 object-cover cursor-pointer"
              src="/jjf3.jpg"
              alt="javajazz"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 overlay flex items-end ml-3 sm:mb-5 mb-8">
              <div className="flex flex-col  sm:mt-2">
                <p className="text-3xl font-bold">JAVA JAZZ FESTIVAL</p>
                <p>Visit</p>
              </div>
            </div>
          </div>
          <div className="flex gap-8 mt-8 flex-col lg:flex-row md:flex-row ">
            <div className="bg-white lg:w-1/2 sm:w-full md:w-1/2 overflow-hidden ">
              <Image
                className="transition duration-300 w-full  ease-in-out hover:scale-110 cursor-pointer"
                src="/Hmrsn2.jpg"
                alt="Hammersonic"
                width={400}
                height={200}
                priority
              />
              <div className="px-6 py-4">
                <div className="font-bold text-black text-xl mb-2">
                  HAMMERSONIC
                </div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium
                </p>
              </div>
            </div>
            <div className="bg-white lg:w-1/2 sm:w-full md:w-1/2 overflow-hidden ">
              <Image
                className="transition duration-300 w-full ease-in-out hover:scale-110 cursor-pointer"
                src="/wtf2.jpg"
                alt="wtf"
                width={400}
                height={200}
                priority
              />
              <div className="px-6 py-4 flex flex-col">
                <div className="font-bold text-black text-xl mb-2">
                  WE THE FEST
                </div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <BottomNav />
      </div>
    </div>
  );
}
