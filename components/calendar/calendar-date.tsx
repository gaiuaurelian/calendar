'use client';
import './calendar-date.css';

interface CalendarDateProps {
  day: Date;
}

const CalendarDate = ({ day }: CalendarDateProps) => {

  return (
    <section className="flex flex-col min-h-full border border-slate-300 border-solid date-header">
      <div className="section-header h-9 flex flex-col justify-center items-center border-b border-b-slate-300 border-b-solid">
        {day.getDate()}
      </div>
      <div className="section-body flex items-center justify-center h-full">{day.toDateString()}</div>
    </section>
  );
};

export default CalendarDate;
