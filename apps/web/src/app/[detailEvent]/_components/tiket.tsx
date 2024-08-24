import { useState } from 'react';

interface TicketInfoProps {
  eventTitle: string;
  price: number;
}

export default function TicketInfo () {
  const [quantity, setQuantity] = useState<number>(0);
  const [quantity2, setQuantity2] = useState<number>(0);
  const [quantity3, setQuantity3] = useState<number>(0);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  };
  const handleIncrease2 = () => {
    setQuantity2((prev) => prev + 1);
  };
  const handleDecrease2 = () => {
    if (quantity2 > 0) {
      setQuantity2((prev) => prev - 1);
    }
  };
  const handleIncrease3 = () => {
    setQuantity3((prev) => prev + 1);
  };
  const handleDecrease3 = () => {
    if (quantity3 > 0) {
      setQuantity3((prev) => prev - 1);
    }
  };

    return (
      <div className="gap-5">
        <div className="flex bg-gray-100 items-center justify-between p-4 px-6 border rounded-box text-base mb-5">
          <div className="">
            <h2 className="text-xl border-b font-semibold">REGULER</h2>
            <p className=" mt-5">Price: Rp.150.000</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <button
                onClick={handleDecrease}
                className="bg-gray-300 text-gray-700 px-3 py-2 rounded-l-lg hover:bg-gray-400 focus:outline-none"
              >
                -
              </button>
              <input
                type="text"
                readOnly
                value={quantity}
                className="w-12 text-center bg-gray-200 border-t border-b focus:outline-none"
              />
              <button
                onClick={handleIncrease}
                className="bg-gray-300 text-gray-700 px-3 py-2 rounded-r-lg hover:bg-gray-400 focus:outline-none"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex bg-gray-100 items-center justify-between p-4 px-6 border rounded-box text-base mb-5">
          <div className="">
            <h2 className="text-xl border-b font-semibold">EARLY BIRD</h2>
            <p className=" mt-5">Price: Rp.300.000</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <button
                onClick={handleDecrease2}
                className="bg-gray-300 text-gray-700 px-3 py-2 rounded-l-lg hover:bg-gray-400 focus:outline-none"
              >
                -
              </button>
              <input
                type="text"
                readOnly
                value={quantity2}
                className="w-12 text-center bg-gray-200 border-t border-b focus:outline-none"
              />
              <button
                onClick={handleIncrease2}
                className="bg-gray-300 text-gray-700 px-3 py-2 rounded-r-lg hover:bg-gray-400 focus:outline-none"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex bg-gray-100 items-center justify-between p-4 px-6 border rounded-box text-base mb-5">
          <div className="">
            <h2 className="text-xl border-b font-semibold">VIP TIKET</h2>
            <p className=" mt-5">Price: Rp.150.000</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <button
                onClick={handleDecrease3}
                className="bg-gray-300 text-gray-700 px-3 py-2 rounded-l-lg hover:bg-gray-400 focus:outline-none"
              >
                -
              </button>
              <input
                type="text"
                readOnly
                value={quantity3}
                className="w-12 text-center bg-gray-200 border-t border-b focus:outline-none"
              />
              <button
                onClick={handleIncrease3}
                className="bg-gray-300 text-gray-700 px-3 py-2 rounded-r-lg hover:bg-gray-400 focus:outline-none"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};


