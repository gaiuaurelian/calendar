export const getDaysInMonth = (currentDate: Date) => {
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const numberOfDaysInMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  return Array.from({ length: numberOfDaysInMonth }).map((_, i) => {
    let day = i + 2;
    const newDate = new Date(currentYear, currentMonth, day);
    newDate.setUTCHours(0, 0, 0);
    return newDate;
  });
};
