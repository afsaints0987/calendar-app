import React from "react";
import { getYears } from "../../helper/calendar";
import CalendarNav from "../Calendar/CalendarNav";

const Years = ({ onSelectDate, date }) => {
  const [yearDate, setYearDate] = React.useState(date);

  const currentYear = yearDate.getFullYear(); 
  const startYear = currentYear - 11;
  const endYear = currentYear;

  // Get the previous range of years
  const prevYearRange = () => {
    setYearDate(new Date(yearDate.getFullYear() - 1, 1));
    console.log(yearDate);
  };


  // Get the next range of years
  const nextYearRange = () => {
    setYearDate(new Date(yearDate.getFullYear() + 1, 0));
    console.log(yearDate);
  };


  const yearsArray = getYears(startYear, endYear);

  return (
    <>
      <CalendarNav
        date={`${startYear + 1}-${endYear}`}
        prevArrow={prevYearRange}
        nextArrow={nextYearRange}
        handleView={null}
      />
      <table className="calendar-table">
        <tbody className="calendar-grid">
          {yearsArray.map(({ yearToDate, isCurrent }, index) => (
            <tr key={index}>
              <td
                className={`table-item ${isCurrent ? "current" : ""} ${
                  index === 0 || index === 11 ? "disabled" : ""
                }`}
                onClick={() => onSelectDate(yearToDate)}
              >
                {yearToDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Years;
