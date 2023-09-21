import React from "react";
import { getMonths } from "../../helper/calendar";
import CalendarNav from "../CalendarNav";

const Months = ({ selected, onSelectDate, date, changeView}) => {
  const [currentYear, setCurrentYear] = React.useState(date)

  const prevYear = () => {
    const previousYear = currentYear.getFullYear() - 1;
    setCurrentYear(new Date(previousYear, 0))
  }
  const nextYear = () => {
    const incomingYear = currentYear.getFullYear() + 1;
    setCurrentYear(new Date(incomingYear, 0))
  }

  return (
    <>
      <CalendarNav
        date={`${currentYear.getFullYear()}`}
        prevArrow={prevYear}
        nextArrow={nextYear}
        handleView={changeView}
      />
      <table className="calendar-table">
        <tbody className="calendar-grid">
          {getMonths().map(({ month, currentMonth}, index) => (
            <tr key={index}>
              <td
                className={`${currentMonth ? "current" : ""} ${
                  selected === month ? "selected" : ""
                } table-item`}
                onClick={() => onSelectDate(index)}
              >
                {month}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Months;
