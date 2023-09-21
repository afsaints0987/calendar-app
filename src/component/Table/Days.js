import React from "react";
import { calendarDays, calendarMonths, getDays } from "../../helper/calendar";
import CalendarNav from "../CalendarNav";

const Days = ({selected, onSelectDate, date, changeView}) => {
  const [currentDate, setCurrentDate] = React.useState(date)

  const prevDate = () => {
    // Get the previous month's date
    const prevMonthDate = new Date(currentDate);
    prevMonthDate.setMonth(prevMonthDate.getMonth() - 1);
    setCurrentDate(prevMonthDate);
  };

  const nextDate = () => {
    // Get the next month's date
    const nextMonthDate = new Date(currentDate);
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
    setCurrentDate(nextMonthDate);
  };
  const daysInMonth = getDays(currentDate.getMonth(), currentDate.getFullYear());

  return (
    <>
      <CalendarNav
        date={`${calendarMonths[currentDate.getMonth()]} ${currentDate.getFullYear()}`}
        prevArrow={prevDate}
        nextArrow={nextDate}
        handleView={changeView}
      />
      <table className="calendar-table">
        <thead className="table-header">
          {calendarDays.map((wday, index) => (
            <tr key={index}>
              <th>{wday}</th>
            </tr>
          ))}
        </thead>
        <tbody className="table-body">
          {daysInMonth.map(
            ({ day, isCurrent, isToday }, index) => (
              <tr key={index}>
                <td
                  className={`${!isCurrent ? "disabled" : ""} ${
                    selected === day && isCurrent ? "selected" : ""
                  } ${isToday ? "today" : ""} table-item`}
                  onClick={() => onSelectDate(day)}
                >
                  {day}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
};

export default Days;
