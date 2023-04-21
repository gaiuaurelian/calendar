import Image from 'next/image';
import { Inter } from 'next/font/google';
import CalendarContainer from '@/components/calendar/calendar-container';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <CalendarContainer />
    </>
  );
}
