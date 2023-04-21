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

export const getCurrentWeekDays = (currentDate: Date) => {
  // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const currentDayOfWeek = currentDate.getDay();

  // Calculate the start and end dates of the current week
  const startDate = new Date(currentDate);
  startDate.setDate(startDate.getDate() - currentDayOfWeek);
  const endDate = new Date(currentDate);
  endDate.setDate(endDate.getDate() + (6 - currentDayOfWeek));

  // Extract the days of the current week
  const daysOfWeek = [];
  const day = new Date(startDate);
  while (day <= endDate) {
    daysOfWeek.push(new Date(day));
    day.setDate(day.getDate() + 1);
  }

  return daysOfWeek;
};
