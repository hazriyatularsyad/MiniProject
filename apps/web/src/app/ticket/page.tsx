    import Link from 'next/link'

export default function Ticket() {
  return (
    <div className="">
      <div className="flex flex-row gap-10 bg-white w-full lg:w-[75vh] mb-2 rounded-lg">
        <div className="px-5">
          <div className="flex flex-col"></div>
          <p className='font-bold text-black'>Aug 28</p>
          <p className='text-black'>WED</p>
          <p className='text-black'>7:00 PM</p>
        </div>
        <div className="px-5 border">
          <div className="flex flex-col"></div>
          <p>Oslo Spektrum, Oslo,</p>
          <p className='text-black font-bold'>Norway</p>
        </div>
        <div className="px-5 flex justify-center items-center">
          <Link href='/detailTicket'>
          <button className="text-black border py-2 px-2 border-green-400 rounded-xl">
            See Ticket
          </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-row gap-10 bg-white w-full lg:w-[75vh] rounded-lg">
        <div className="px-5">
          <div className="flex flex-col "></div>
          <p className='text-black font-bold'>Aug 28</p>
          <p className='text-black'>WED</p>
          <p className='text-black'>7:00 PM</p>
        </div>
        <div className="px-5">
          <div className="flex flex-col"></div>
          <p>Oslo Spektrum, Oslo,</p>
          <p className='text-black font-bold'>Norway</p>
        </div>
        <div className="px-5 flex justify-center items-center">
          <button className="text-black border py-2 px-2 border-green-400 rounded-xl">
            See Ticket
          </button>
        </div>
      </div>
    </div>
    
  );
}
