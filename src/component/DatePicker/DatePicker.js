import React from 'react'
import * as FcIcons from 'react-icons/fc'
import '../DatePicker/DatePicker.css'

const DatePicker = ({ date , handleShowCalendar }) => {
  const [dateValue, setDateValue] = React.useState("")

  React.useEffect(() => {
    setDateValue(date)
  },[date])

  const handleDateChange = (e) => {
    const {value} = e.target
    
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
          name="date"
          value={date}
          onChange={handleDateChange}
          onClick={handleShowCalendar}
        />
      </div>
    </div>
  );
};

export default DatePicker