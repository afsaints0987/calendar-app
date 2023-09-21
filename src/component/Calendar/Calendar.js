import React from "react";
import DatePicker from "../DatePicker/DatePicker";
import "../Calendar/Calendar.css";
import { date, calendarView } from "../../helper/calendar";
import Months from "../Table/Months";
import Days from "../Table/Days";
import Years from "../Table/Years";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = React.useState(date)
  const [viewMode, setViewMode] = React.useState("days")

  const handleViewMode = (mode) => {
    calendarView(mode, setViewMode)
  };

  const onSelectDate = (day) => {
    setSelectedDate(day);
    console.log(day);
  };

  const onSelectMonth = (indexMonth) => {
    console.log(indexMonth)
  };


  return (
    <>
    <DatePicker/>
    <div className="calendar">
      {viewMode !== "days" ? null : <Days
        selected={selectedDate}
        onSelectDate={onSelectDate}
        date={date}
        changeView={() => handleViewMode("months")}
      />}

      {viewMode === "months" && 
        <Months
          selected={selectedDate}
          onSelectDate={onSelectMonth}
          date={date}
          changeView={() => handleViewMode("years")}
        />
      }
      {viewMode === "years" && <Years date={date}/>}
    </div>
    </>
  );
};

export default Calendar;
