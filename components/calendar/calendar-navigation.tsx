'use client';
import {
  MdChevronLeft as MdArrowBackIos,
  MdArrowBackIosNew,
  MdArrowForwardIos,
  MdChevronRight,
} from 'react-icons/md';

interface CalendarNavigationProps {
  currentDate: Date;
  onChangedDate: (newDate: Date) => void;
}

const CalendarNavigation = ({
  currentDate,
  onChangedDate,
}: CalendarNavigationProps) => {
  const currentMonthString = currentDate.toLocaleString('default', {
    month: 'long',
  });
  const currentYear = currentDate.getUTCFullYear().toString();

  const handlePreviousMonth = () => {
    const month = currentDate.getUTCMonth();
    const newDate = new Date(currentDate.getFullYear(), month, 0);
    onChangedDate(newDate);
  };

  const handleNextMonth = () => {
    const month = currentDate.getUTCMonth();
    const newDate = new Date(currentDate.getFullYear(), month + 2, 0);
    onChangedDate(newDate);
  };

  return (
    <div className="p-4 w-screen flex items-center">
      <button
        className="mr-4 p-4 border border-slate-300 border-solid rounded-full"
        onClick={handlePreviousMonth}
      >
        <MdArrowBackIosNew />
      </button>
      <button
        className="mr-4 p-4 border border-slate-300 border-solid rounded-full"
        onClick={handleNextMonth}
      >
        <MdArrowForwardIos />
      </button>
      <span className="mr-4 text-4xl font-black">{currentMonthString}</span>
      <span className="text-4xl font-light">{currentYear}</span>
    </div>
  );
};

export default CalendarNavigation;
