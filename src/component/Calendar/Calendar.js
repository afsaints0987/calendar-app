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

  React.useEffect(() => {
    setSelectedDate(new Date(date))
  },[])
  

  const handleViewMode = (mode) => {
    calendarView(mode, setViewMode)
  };

  const onSelectDate = (day) => {
    console.log(day);
    setSelectedDate(day);
  };

  const onSelectMonth = (indexMonth) => {
    console.log(indexMonth)
    if(indexMonth){
      setSelectedDate(date.setMonth(indexMonth))
    }
  };

  const onSelectYear = (year) => {
    console.log(year)
    setSelectedDate(date.setFullYear(year))
    handleViewMode("months")
  }

  console.log(selectedDate)

  return (
    <>
    <DatePicker/>
    <div className="calendar">
      {viewMode !== "days" ? null : <Days
        selected={selectedDate}
        onSelectDate={onSelectDate}
        date={selectedDate}
        changeView={() => handleViewMode("months")}
      />}

      {viewMode === "months" && 
        <Months
          selected={selectedDate}
          onSelectDate={onSelectMonth}
          date={date}
          changeView={() => handleViewMode("years")}
          setSelectedDate={setSelectedDate}
        />
      }
      {viewMode === "years" && <Years date={date} onSelectDate={onSelectYear}/>}
    </div>
    </>
  );
};

export default Calendar;
