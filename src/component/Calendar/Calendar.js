import React from "react";
import DatePicker from "../DatePicker/DatePicker";
import * as FaIcons from 'react-icons/fa'
import "../Calendar/Calendar.css";
import { getDays, getMonths, calendarMonths, calendarDays } from "../../helper/calendar";
import Months from "../Table/Months";
import Days from "../Table/Days";

const Calendar = () => {
  const [date, setDate] = React.useState(new Date());
  const [selectedDate, setSelectedDate] = React.useState(false)
  const [selectedMonth, setSelectedMonth] = React.useState(false)
  const [selectedYear, setSelectedYear] = React.useState(false)
  const [selectedDay, setSelectedDay] = React.useState(null);
  

  // Get the previous month of the year
  const prevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1));
  };

  // Get the next month of the year
  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1));
  };

  
  const onSelectDate = (index) => {
    setSelectedDay(index)
  };

  return (
    <>
      <DatePicker />
      <div className="calendar">
        <div className="calendar-header">
          <button className="caret left" onClick={prevMonth}>
            <FaIcons.FaChevronLeft />
          </button>
          <span className="month-year" onClick={getMonths}>
            {`${calendarMonths[date.getMonth()]} ${date.getFullYear()}`}
          </span>
          <button className="caret right" onClick={nextMonth}>
            <FaIcons.FaChevronRight/>
          </button>
        </div>
        <table className="calendar-table">
          <Days selected={selectedDay} onSelectDate={onSelectDate} date={date}/>
        </table>
        <table className="calendar-table">
          <Months selected={selectedDay} onSelectDate={onSelectDate}/>
        </table>
      </div>
    </>
  );
};

export default Calendar;
