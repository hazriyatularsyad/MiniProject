import React from 'react';
import Cardtes from './cardtes';
import { getEvent } from '@/libs/action/event';
import Link from 'next/link';

export default async function ListEvent() {
  const { ressult } = await getEvent();
  // console.log(ressult.event);
  const data = ressult.event;

  return (
    <div className="bg-black pt-2 pb-8">
      {data.map((resp) => (
        <div key={resp.id} className="mx-auto w-3/4">
          <div className="">
            <Link href={`/detailEvent/${resp.id}`}>
            <Cardtes name={resp} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
