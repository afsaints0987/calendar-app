import React from "react";
import * as FcIcons from "react-icons/fc";
import "../DatePicker/DatePicker.css";

const DatePicker = ({
  date,
  handleShowCalendar,
  handleDateChange,
}) => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    handleDateChange(value);
  };

  return (
    <div className="datepicker">
      <div className="input-container">
        <FcIcons.FcCalendar
          id="calendar"
          className="calendar-icon"
          onClick={() => {
            handleShowCalendar();
          }}
        />
        <input
          type="text"
          id="date"
          name="date"
          value={date}
          onChange={handleInputChange}
          onClick={() => {
            handleShowCalendar();
          }}
          placeholder="YYYY-MM-DD"
        />
      </div>
    </div>
  );
};

export default DatePicker;
