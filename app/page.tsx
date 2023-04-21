import Image from 'next/image';
import { Inter, Noto_Sans } from 'next/font/google';
import CalendarContainer from '@/components/calendar/calendar-container';

const inter = Inter({ subsets: ['latin'] });
const notoSans = Noto_Sans({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: 'normal',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main className={`flex flex-col h-screen w-screen ${notoSans.className}`}>
      <CalendarContainer />
    </main>
  );
}
