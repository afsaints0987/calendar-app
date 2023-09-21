import React from 'react'
import * as FaIcons from 'react-icons/fa'

const CalendarNav = ({prevArrow, nextArrow, handleView ,date}) => {
  return (
    <div className="calendar-header">
      <button className="caret left" onClick={prevArrow}>
        <FaIcons.FaChevronLeft />
      </button>
      <span className="month-year" onClick={() => handleView()}>
        {date}
      </span>
      <button className="caret right" onClick={nextArrow}>
        <FaIcons.FaChevronRight />
      </button>
    </div>
  );
}

export default CalendarNav