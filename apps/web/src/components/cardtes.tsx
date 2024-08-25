import { formatDate } from '@/app/utils/formatDate';
import { getEvent } from '@/libs/action/event';
import Image from 'next/image';
import Link from 'next/link';

export interface IEvent {
  id?: string;
  name: string;
  price: string;
  date: string;
  location: string;
  description: string;
  seats: string;
  ticked_types: string;
  EoId?: string;
  image?: string;
  category: string;
}
export default async function Cardtes({ name }: { name: IEvent }) {
  // const { resp } = await getEvent()
  // console.log(name);

  return (
    <div className=" mt-4">
      <div className="bg-white w-[35vh] h-full rounded-xl overflow-hidden ">
        <Image
          src='/hmrsn.jpg'
          className="w-full hover:scale-110 duration-300"
          width={400}
          height={400}
          alt="tes"
        />
        <div className="flex flex-col text-black py-4 ml-4">
          <p className='font-bold text-xl'>{name.name}</p>
          <p>{formatDate(name.date)}</p>
          <p>{name.location}</p>
        </div>
      </div>
    </div>
  );
}

// <div>
//   <div>
//     <div className="carousel-item flex flex-col lg:h-[35vh] w-full h-auto pb-2 rounded-xl bg-white overflow-hidden">
//       <Link href="">
//         <Image
//           src="/jjf3.jpg"
//           className="w-full hover:scale-110 duration-300"
//           alt="java jazz"
//           width={400}
//           height={400}
//         />
//       </Link>
//       <div className="ml-4 mt-3 flex flex-col">
//         <h1 className="font-bold text-black text-xl">gfdgsfgsf</h1>
//         <div className="flex flex-col text-black">
//           fdsfddfsd <br />
//           dawdsawd
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
