import React from "react";
import { calendarDays, calendarMonths, getDays } from "../../helper/calendar";
import CalendarNav from "../Calendar/CalendarNav";

const Days = ({ onSelectDate, changeView, date, month }) => {
  const [currentDate, setCurrentDate] = React.useState(date);

  // Get previous month and year
  const prevDate = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  // Get next month and year
  const nextDate = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const selectedDay = currentDate.getDate();
  // Get the current date components
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentDay = new Date().getDate();

  const todayDate = new Date(currentYear, currentMonth, currentDay);

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
          {getDays(currentDate.getMonth(), currentDate.getFullYear()).map(
            ({ day, isCurrent }, index) => (
              <tr key={index}>
                <td
                  className={`${!isCurrent ? "disabled" : ""} ${
                    selectedDay === day && isCurrent ? "selected" : ""
                  } ${
                    todayDate.toDateString() ===
                    new Date(
                      currentDate.getFullYear(),
                      currentDate.getMonth(),
                      day
                    ).toDateString()
                      ? "today"
                      : ""
                  } table-item `}
                  onClick={() =>
                    onSelectDate(day, (month = currentDate.getMonth()))
                  }
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
