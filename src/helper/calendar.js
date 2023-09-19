export const date = new Date()

export const getDays = (month = date.getMonth(), year = date.getFullYear()) => {
  const daysInMonth = [];
  const calendarCells = 42 - daysInMonth;

  // get the first day of the month
  const firstDateOfMonth = new Date(year, month, 1);

  // get the last day of the month
  const lastDateOfMonth = new Date(year, month + 1, 0);

  // start day of the month
  const startingDayIndex = firstDateOfMonth.getDay();

  // loop the days in the calendar
  for (let i = 0; i < calendarCells; i++) {
    if (i < startingDayIndex) {
      // get the remaining days of the previous month
      const prevMonthLastDays = new Date(year, month, 0).getDate();
      daysInMonth.push({
        day: prevMonthLastDays - (startingDayIndex - i - 1),
        isCurrent: false
      });
    } else if (
      i >= startingDayIndex &&
      i < lastDateOfMonth.getDate() + startingDayIndex
    ) {
      // get the current month's dates
        const currentDay = i - startingDayIndex + 1;

      daysInMonth.push({
        day: i - startingDayIndex + 1,
        isToday: currentDay === date.getDate() && month === date.getMonth() && year === date.getFullYear(),
        isCurrent : true
      });
    } else {
      // get the starting days of the next month
      daysInMonth.push({
        day: i - (lastDateOfMonth.getDate() + startingDayIndex) + 1,
        isCurrent : false
      });
    }
  }

  return(daysInMonth);
}

export const getMonths = () => {
    
}