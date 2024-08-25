import React from 'react'
import DetailTicket from '../_components/detailTiket'
import { getEvent } from '@/libs/action/event'
import { event } from 'cypress/types/jquery';

export default async function Page() {

  const { ressult } = await getEvent()
  // console.log(ressult);
  
  const data = ressult.event[0]
  console.log(data);
  

  return (
    <div>
      <DetailTicket name={data} />
    </div>
  )
}
