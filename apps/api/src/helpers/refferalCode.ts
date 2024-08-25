import { v4 as uuidv4 } from 'uuid';

export default function referralCode(): string {
  const uuid = uuidv4(); 
  return uuid.slice(0, 6).toUpperCase();
//   const lettersOnly = uuid.replace(/[^a-zA-Z]/g, ''); 
}
