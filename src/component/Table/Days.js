import React from "react";
import { calendarDays, calendarMonths, getDays } from "../../helper/calendar";
import CalendarNav from "../Calendar/CalendarNav";

const Days = ({ selected, onSelectDate, date, changeView }) => {
  const [currentDate, setCurrentDate] = React.useState(date);

  // Get the previous month's date
  const prevDate = () => {
    const previousMonth = currentDate.getMonth() - 1;
    const newDate = new Date(currentDate.getFullYear(), previousMonth);
    setCurrentDate(newDate);
  };

  // Get the next month's date
  const nextDate = () => {
    const nextMonth = currentDate.getMonth() + 1;
    const newDate = new Date(currentDate.getFullYear(), nextMonth);
    setCurrentDate(newDate);
  };

  return (
    <>
      <CalendarNav
        date={`${
          calendarMonths[currentDate.getMonth()]
        } ${currentDate.getFullYear()}`}
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
          {getDays().map(({ day, isCurrent, isToday }, index) => (
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
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Days;
