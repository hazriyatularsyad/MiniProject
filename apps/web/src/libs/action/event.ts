import { IEvent } from '@/components/cardtes';

export const getEvent = async () => {
  interface Resp {
    messege: string;
    event: IEvent[];
  }
    
  const res = await fetch('http://localhost:8000/api/event/getEvent', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const resp: Resp = await res.json();
  return { ressult: resp, ok: res.ok };
};
