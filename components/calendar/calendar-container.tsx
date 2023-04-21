'use client';

import { getDaysInMonth } from '@/utils/calendar';
import { useState } from 'react';

const CalendarContainer = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const currentMonthString = currentDate.toLocaleString('default', {
    month: 'long',
  });

  const handlePreviousMonth = () => {
    const month = currentDate.getUTCMonth();
    const newDate = new Date(currentDate.getFullYear(), month, 0);
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const month = currentDate.getUTCMonth();
    const newDate = new Date(currentDate.getFullYear(), month + 2, 0);
    setCurrentDate(newDate);
  };

  return (
    <>
      <div className="p-4 w-screen flex flex-column justify-evenly items-center">
        <button
          className="p-1 px-4 border border-slate-300 border-solid rounded"
          onClick={handlePreviousMonth}
        >
          Prev
        </button>
        <span>{currentMonthString}</span>
        <button
          className="p-1 px-4 border border-slate-300 border-solid rounded"
          onClick={handleNextMonth}
        >
          Next
        </button>
      </div>
      {/* <span>{currentDate.toDateString()}</span>
      <button onClick={handleNextMonth}>Next</button>
      <ul>{calendarItems}</ul> */}
    </>
  );
};

export default CalendarContainer;
