'use client';
import { getCurrentWeekDays, getDaysInMonth } from '@/utils/calendar';
import { useState } from 'react';
import CalendarNavigation from './calendar-navigation';
import CalendarDate from './calendar-date';

const CalendarContainer = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  // const daysInCurrentMonth = getDaysInMonth(currentDate);
  const daysInCurrentWeek = getCurrentWeekDays(currentDate);

  const daysSections = daysInCurrentWeek.map((day, index) => {
    return <CalendarDate day={day} key={index} />;
  });

  const updateCurrentDate = (newDate: Date) => {
    setCurrentDate(newDate);
  };

  return (
    <>
      <CalendarNavigation
        currentDate={currentDate}
        onChangedDate={updateCurrentDate}
      />
      <div className="flex h-full mt-9">
        <div className="grid grid-cols-7 w-full">{daysSections}</div>
      </div>
      {/* <span>{currentDate.toDateString()}</span>
      <button onClick={handleNextMonth}>Next</button>
      <ul>{calendarItems}</ul> */}
    </>
  );
};

export default CalendarContainer;
