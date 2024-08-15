import BottomNav from '@/app/BottomNav/page';
import CarouselComponent from '@/components/carousel';
import Navbar from '@/components/navbar';
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
        <div className=" w-full lg:w-[70vh]">
          <p className="text-4xl">
            <span className="text-yellow-500 font-extrabold">I</span> POPULAR
            CATEGORIES
          </p>

          <div className="flex p-4 sm:h-[10vh] sm:w-full lg:mt-4">
            <Image
              className=""
              src="/b1.jpg"
              alt="band"
              width={120}
              height={80}
              priority
            />
            <div className="ml-5">
              <p className="hover:underline hover:cursor-pointer">qwedaada</p>
              <p className="hover:underline hover:cursor-pointer">
                qwedaada msnfmsfsfs snfjsnfjsn
              </p>
            </div>
          </div>
          <div className="flex p-4 sm:h-[10vh] sm:w-full lg:mt-4">
            <Image src="/b2.jpg" alt="band" width={120} height={80} priority />
            <div className="ml-5 ">
              <p className="hover:underline hover:cursor-pointer">qwedaada</p>
              <p className="hover:underline hover:cursor-pointer">
                qwedaada msnfmsfsfs snfjsnfjsn
              </p>
            </div>
          </div>
          <div className="flex p-4 sm:h-[10vh] sm:w-full lg:mt-4">
            <Image src="/b3.jpg" alt="band" width={120} height={80} priority />
            <div className="ml-5 ">
              <p className="hover:underline hover:cursor-pointer">qwedaada</p>
              <p className="hover:underline hover:cursor-pointer">
                qwedaada msnfmsfsfs snfjsnfjsn
              </p>
            </div>
          </div>
          <div className="flex p-4 sm:h-[10vh] sm:w-full lg:mt-4">
            <Image src="/b1.jpg" alt="band" width={120} height={80} priority />
            <div className="ml-5 ">
              <p className="hover:underline hover:cursor-pointer">qwedaada</p>
              <p className="hover:underline hover:cursor-pointer">
                qwedaada msnfmsfsfs snfjsnfjsn
              </p>
            </div>
          </div>
          <div className="flex p-4 sm:h-[10vh] sm:w-full lg:mt-4">
            <Image src="/b2.jpg" alt="band" width={120} height={80} priority />
            <div className="ml-5 ">
              <p className="hover:underline hover:cursor-pointer">qwedaada</p>
              <p className="hover:underline hover:cursor-pointer">
                qwedaada msnfmsfsfs snfjsnfjsn
              </p>
            </div>
          </div>
          <div className="flex p-4 sm:h-[10vh] sm:w-full lg:mt-4">
            <Image src="/b3.jpg" alt="band" width={120} height={80} priority />
            <div className="ml-5 ">
              <p className="hover:underline hover:cursor-pointer">qwedaada</p>
              <p className="hover:underline hover:cursor-pointer">
                qwedaada msnfmsfsfs snfjsnfjsn
              </p>
            </div>
          </div>
          <div className="flex p-4 sm:h-[10vh] sm:w-full lg:mt-4">
            <Image src="/b3.jpg" alt="band" width={120} height={80} priority />
            <div className="ml-5 ">
              <p className="hover:underline hover:cursor-pointer">qwedaada</p>
              <p className="hover:underline hover:cursor-pointer">
                qwedaada msnfmsfsfs snfjsnfjsn
              </p>
            </div>
          </div>
          <div className="ml-3 mt-5">
            <p className="relative cursor-pointer text-l w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
              see more
            </p>
          </div>
        </div>
        <div className="w-full ">
          <div className="overflow-hidden lg:h-[50vh] relative group w-full sm:h-[33vh] sm:mt-10">
            <Image
              className=" transition duration-300 ease-in-out group-hover:scale-110 cursor-pointer"
              src="/b3.jpg"
              alt="band"
              width={700}
              height={300}
              priority
            />
            <div className="absolute inset-0 overlay flex items-end ml-3 sm:mb-5 mb-8">
              <div className="flex flex-col  sm:mt-2">
                <p className="text-3xl font-bold">
                  Lorem ipsum dolor sit amet.
                </p>
                <p>Visit</p>
              </div>
            </div>
          </div>
          <div className="flex gap-8 mt-8 flex-col lg:flex-row lg:h-[53vh]">
            <div className="bg-white lg:w-1/2 w-full overflow-hidden ">
              <Image
                className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                src="/b2.jpg"
                alt="band"
                width={400}
                height={200}
                priority
              />
              <div className="px-6 py-4">
                <div className="font-bold text-black text-xl mb-2">
                  One Republic
                </div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium
                </p>
              </div>
            </div>
            <div className="bg-white lg:w-1/2 sm:w-full overflow-hidden ">
              <Image
                className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                src="/b1.jpg"
                alt="band"
                width={400}
                height={200}
                priority
              />
              <div className="px-6 py-4 flex flex-col">
                <div className="font-bold text-black text-xl mb-2">
                  One Ok Rock
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
        <BottomNav/>
      </div>
    </div>
  );
}
