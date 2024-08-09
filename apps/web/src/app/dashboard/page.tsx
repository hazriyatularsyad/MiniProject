import Image from 'next/image';

export default function Dashboard() {
  return (
    <div className="bg-black py-11 text-white">
      <div className="flex flex-col py-11 items-center justify-center text-center">
        <h1 className="text-5xl font-bold font-positiveForward">ON SHOWING EVENT</h1>

        <p className="mt-6">
          <span className='underline decoration-yellow-500 '>Lorem</span> ipsum dolor sit, amet consectetur adipisicing elit.
          Est beatae in sunt?
        </p>
      </div>
      <div className="flex container mx-auto w-3/4">
        <div className=" row-span-4 w-[70vh]">
          <div className="">
            <p className="text-4xl">
              <span className="text-yellow-500 font-extrabold">I</span> POPULAR
              CATEGORIES
            </p>
          </div>
          <div className="flex p-4">
            <Image src="/b1.jpg" alt="band" width={120} height={80} priority />
            <div className="ml-5">
              <p className="hover:underline hover:cursor-pointer">qwedaada</p>
              <p className="hover:underline hover:cursor-pointer">
                qwedaada msnfmsfsfs snfjsnfjsn
              </p>
            </div>
          </div>
          <div className="flex p-4">
            <Image src="/b2.jpg" alt="band" width={120} height={80} priority />
            <div className="ml-5 ">
              <p className="hover:underline hover:cursor-pointer">qwedaada</p>
              <p className="hover:underline hover:cursor-pointer">
                qwedaada msnfmsfsfs snfjsnfjsn
              </p>
            </div>
          </div>
          <div className="flex p-4">
            <Image src="/b3.jpg" alt="band" width={120} height={80} priority />
            <div className="ml-5">
              <p className="hover:underline hover:cursor-pointer">qwedaada</p>
              <p className="hover:underline hover:cursor-pointer">
                qwedaada msnfmsfsfs snfjsnfjsn
              </p>
            </div>
          </div>
          <div className="flex p-4">
            <Image src="/b1.jpg" alt="band" width={120} height={80} priority />
            <div className="ml-5">
              <p className="hover:underline hover:cursor-pointer">qwedaada</p>
              <p className="hover:underline hover:cursor-pointer">
                qwedaada msnfmsfsfs snfjsnfjsn
              </p>
            </div>
          </div>
          <div className="flex p-4">
            <Image src="/b2.jpg" alt="band" width={120} height={80} priority />
            <div className="ml-5">
              <p className="hover:underline hover:cursor-pointer">qwedaada</p>
              <p className="hover:underline hover:cursor-pointer">
                qwedaada msnfmsfsfs snfjsnfjsn
              </p>
            </div>
          </div>
          <div className="flex p-4">
            <Image src="/b3.jpg" alt="band" width={120} height={80} priority />
            <div className="ml-5">
              <p className="hover:underline hover:cursor-pointer">qwedaada</p>
              <p className="hover:underline hover:cursor-pointer">
                qwedaada msnfmsfsfs snfjsnfjsn
              </p>
            </div>
          </div>
          <div className="flex p-4">
            <Image src="/b3.jpg" alt="band" width={120} height={80} priority />
            <div className="ml-5">
              <p className="hover:underline hover:cursor-pointer">qwedaada</p>
              <p className="hover:underline hover:cursor-pointer">
                qwedaada msnfmsfsfs snfjsnfjsn
              </p>
            </div>
          </div>
          <div className="ml-3 mt-5 ">
            <p className="relative cursor-pointer text-l w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
              see more
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="relative overflow-hidden group">
            <Image
              className="transition duration-300 ease-in-out group-hover:scale-110 cursor-pointer"
              src="/b3.jpg"
              alt="band"
              width={700}
              height={300}
              priority
            />
            <div className="absolute inset-0 flex items-end ml-3 mb-8 overlay">
              <div className="flex-col">
                <p className="text-3xl font-bold">
                  Lorem ipsum dolor sit amet.
                </p>

                <p>Visit</p>
              </div>
            </div>
          </div>
          <div className="flex gap-8 mt-8 ">
            <div className="bg-white w-1/2 overflow-hidden">
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
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
            <div className="bg-white w-1/2 overflow-hidden">
              <Image
                className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                src="/b1.jpg"
                alt="band"
                width={400}
                height={200}
                priority
              />
              <div className="px-6 py-4">
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
    </div>
  );
}
