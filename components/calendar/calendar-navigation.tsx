'use client';
import { useEffect, useState } from 'react';
import {
  MdChevronLeft as MdArrowBackIos,
  MdArrowBackIosNew,
  MdArrowForwardIos,
  MdChevronRight,
} from 'react-icons/md';
import './calendar-navigation.css';
import { getPreviousMonth } from '@/utils/calendar';

interface CalendarNavigationProps {
  onChangedDate: (newDate: Date) => void;
}

const CalendarNavigation = ({ onChangedDate }: CalendarNavigationProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const currentMonthString = currentDate.toLocaleString('default', {
    month: 'long',
  });
  const currentYear = currentDate.getUTCFullYear().toString();

  const handlePreviousMonth = () =>
    handleChangedMonth(currentDate.getUTCMonth());

  const handleNextMonth = () =>
    handleChangedMonth(currentDate.getUTCMonth() + 2);

  const handleChangedMonth = (month: number) => {
    const newDate = new Date(currentDate.getFullYear(), month, 1);
    setCurrentDate(newDate);
    onChangedDate(newDate);
  };

  return (
    <div className="p-4 w-screen flex items-end">
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
      <div className={` font-black text-4xl mr-4 cube `}>
        <div className="top">{currentMonthString}</div>
      </div>
      <span className="text-4xl font-light">{currentYear}</span>
    </div>
  );
};

export default CalendarNavigation;
