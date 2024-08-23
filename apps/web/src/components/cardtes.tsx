import Image from 'next/image';
import Link from 'next/link';

export default function Cardtes() {
  return (
    <div className=" mt-4">
      <div className="bg-white w-[40vh] rounded-xl  h-full overflow-hidden pb-3">
        <Image
          src="/jjf3.jpg"
          className="w-full hover:scale-110 duration-300"
          width={400}
          height={400}
          alt="tes"
        />
        <div className="flex flex-col text-black py-2 ml-4">
          <p>MackleMore</p>
          <p>28-08-2024</p>
          <p>Bandung</p>
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
