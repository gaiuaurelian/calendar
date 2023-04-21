'use client';
import { getDayOfWeek, isCurrentDay } from '@/utils/calendar';
import './calendar-date.css';

interface CalendarDateProps {
  day: Date;
}

const CalendarDate = ({ day }: CalendarDateProps) => {

  return (
    <section className="flex flex-col min-h-full border border-slate-300 border-solid date-header">
      <CalendarDateHeader day={day} />
      <div className="section-body flex items-center justify-center h-full">
        {day.toDateString()}
      </div>
    </section>
  );
};

const CalendarDateHeader = ({ day }: CalendarDateProps) => {
  const isCurrentDayClassName = isCurrentDay(day) ? 'current-day-header' : '';
  return (
    <>
      <div className="h-fit-content p-4 border-b border-b-slate-300 border-b-solid">
        <div
          className={`p-2 flex flex-col items-center rounded-md w-full ${isCurrentDayClassName}`}
        >
          <div className="mb-1 text-1md font-black">{day.getDate()}</div>
          <div className="text-1md font-light">{getDayOfWeek(day)}</div>
        </div>
      </div>
    </>
  );
};

export default CalendarDate;
