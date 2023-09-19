import React from "react";
import DatePicker from "../DatePicker/DatePicker";
import * as FaIcons from 'react-icons/fa'
import "../Calendar/Calendar.css";
import { getDays } from "../../helper/calendar";

const Calendar = () => {
  const [date, setDate] = React.useState(new Date());
  const [selectedDay, setSelectedDay] = React.useState(null);
  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];


  // Get the previous month of the year
  const prevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1));
  };

  // Get the next month of the year
  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1));
  };

  // Function to select a specific date
  const onSelectDate = (day) => {
    if(day){
      setSelectedDay(day)
    }
  };

  return (
    <>
      <DatePicker date={new Date}/>
      <div className="calendar">
        <div className="calendar-header">
          <button className="caret left" onClick={prevMonth}>
            <FaIcons.FaChevronLeft />
          </button>
          <span className="month-year">
            {date.toLocaleString("en-us", { month: "short", year: "numeric" })}
          </span>
          <button className="caret right" onClick={nextMonth}>
            <FaIcons.FaChevronRight/>
          </button>
        </div>
        <table className="calendar-table">
          <thead className="table-header">
            {weekDays.map((wday, index) => (
              <tr key={index}>
                <th>{wday}</th>
              </tr>
            ))}
          </thead>
          <tbody className="table-body">
            {getDays(date.getMonth(), date.getFullYear()).map(({ day, isCurrent, isToday }, index) => (
              <tr key={index}>
                <td
                  className={`${!isCurrent ? "disabled" : ""} ${
                    selectedDay === day && isCurrent ? "selected" : ""
                  } ${isToday ? "today" : ""} table-item`}
                  onClick={() => onSelectDate(day)}
                >
                  {day}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Calendar;
