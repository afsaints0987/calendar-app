import React from "react";
import DatePicker from "../DatePicker/DatePicker";
import "../Calendar/Calendar.css";
import { date, calendarView } from "../../helper/calendar";
import Months from "../Table/Months";
import Days from "../Table/Days";
import Years from "../Table/Years";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = React.useState(date);
  const [editDate, setEditDate] = React.useState("");
  const [viewMode, setViewMode] = React.useState("days");
  const [showCalendar, setShowCalendar] = React.useState(false);

  const handleShowCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleViewMode = (mode) => {
    calendarView(mode, setViewMode);
  };

  const handleDateChange = (inputDate) => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    setEditDate(inputDate);
    if (dateRegex.test(inputDate)) {
      // Valid date format, you can handle it here
      console.log("Valid date:", inputDate);
      // Assuming you want to set the selected date in the Calendar component
      const newDate = new Date(inputDate);
      setSelectedDate(newDate);
      setShowCalendar(false);
    } else {
      // Invalid date format, you can handle it here
      console.log("Invalid date format");
    }
  };

  const onSelectDate = (day, month) => {
    // Create a new Date object based on the current selectedDate
    const newDate = new Date(selectedDate);

    // Set the day of the month to the selected day
    newDate.setDate(day);

    // Set a new month if the user selected a day from the previous or next month
    newDate.setMonth(month);

    // Update the selectedDate
    setSelectedDate(newDate);

    // Close the calendar if needed
    setShowCalendar(false);
  };

  const onSelectMonth = (indexMonth) => {
    const newDate = new Date(selectedDate); // Create a new Date object
    newDate.setMonth(indexMonth); // Set the month
    setSelectedDate(newDate); // Update the selected date
    handleViewMode("days");
  };

  const onSelectYear = (year) => {
    const newDate = new Date(selectedDate); // Create a new Date object
    newDate.setFullYear(year); // Set the year
    setSelectedDate(newDate); // Update the selected date
    handleViewMode("months");
  };

  const calendarDate = new Date(selectedDate);
  const dateInfo = calendarDate.toISOString().slice(0, 10);

  return (
    <>
      <DatePicker
        handleShowCalendar={handleShowCalendar}
        date={showCalendar ? editDate : dateInfo}
        handleDateChange={handleDateChange}
        showCalendar={showCalendar}
      />
      <div className="calendar-wrapper">
        {showCalendar ? (
          <div className="calendar">
            {viewMode !== "days" ? null : (
              <Days
                onSelectDate={onSelectDate}
                date={selectedDate}
                changeView={() => handleViewMode("months")}
              />
            )}

            {viewMode === "months" && (
              <Months
                selected={selectedDate}
                onSelectDate={onSelectMonth}
                date={selectedDate}
                changeView={() => handleViewMode("years")}
                setSelectedDate={setSelectedDate}
              />
            )}
            {viewMode === "years" && (
              <Years date={date} onSelectDate={onSelectYear} />
            )}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Calendar;
