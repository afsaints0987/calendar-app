import React from 'react'
import * as FcIcons from 'react-icons/fc'
import '../DatePicker/DatePicker.css'

const DatePicker = ({ date , handleShowCalendar }) => {
  const handleDateChange = () => {
    console.log(this);
  };

  return (
    <div className="datepicker">
      <div className="input-container">
        <FcIcons.FcCalendar
          id="calendar"
          className="calendar-icon"
          onClick={handleShowCalendar}
        />
        <input
          type="text"
          id="date"
          value={date}
          onChange={handleDateChange}
          onClick={handleShowCalendar}
        />
      </div>
    </div>
  );
};

export default DatePicker