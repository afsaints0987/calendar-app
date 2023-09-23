export const date = new Date();

// Days of the week
export const calendarDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

// Calendar Months
export const calendarMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Get the days of the current month
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
        month: calendarMonths[month - 1],
        day: prevMonthLastDays - (startingDayIndex - i - 1),
        isCurrent: false,
      });
    } else if (
      i >= startingDayIndex &&
      i < lastDateOfMonth.getDate() + startingDayIndex
    ) {
      daysInMonth.push({
        month: calendarMonths[month],
        day: i - startingDayIndex + 1,
        isCurrent: true,
      });
    } else {
      // get the starting days of the next month
      daysInMonth.push({
        month: calendarMonths[month + 1],
        day: i - (lastDateOfMonth.getDate() + startingDayIndex) + 1,
        isCurrent: false,
      });
    }
  }

  return daysInMonth;
};

// Get the calendar months of the year
export const getMonths = () => {
  const months = [];

  for (let i = 0; i < calendarMonths.length; i++) {
    let month = calendarMonths[i];
    months.push({ month: month, currentMonth: i === date.getMonth() });
  }

  return months;
};
// Get the years based on the start and end of the year
export const getYears = (startYear, endYear) => {
  const rangeOfYears = [];

  for (let year = startYear; year <= endYear; year++) {
    rangeOfYears.push({
      yearToDate: year,
      isCurrent: year === date.getFullYear(),
    });
  }

  return rangeOfYears;
};

// Set Calendar view to days, months or years
export const calendarView = (mode, setViewMode) => {
  switch (mode) {
    case "days":
      setViewMode("days");
      break;
    case "months":
      setViewMode("months");
      break;
    case "years":
      setViewMode("years");
      break;
    default:
      break;
  }
};
