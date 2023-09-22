import React from "react";
import { getMonths } from "../../helper/calendar";
import CalendarNav from "../Calendar/CalendarNav";

const Months = ({
  selected,
  onSelectDate,
  date,
  changeView,
  setSelectedDate,
}) => {
  const [currentYear, setCurrentYear] = React.useState(
    new Date(date.getFullYear(), 0)
  );

  const prevYear = () => {
    const previousYear = currentYear.getFullYear() - 1;
    setCurrentYear(new Date(previousYear, 0));
    // Update the selected date with the new year
    const newSelectedDate = new Date(
      selected.getFullYear() - 1,
      selected.getMonth()
    );
    setSelectedDate(newSelectedDate);
  };
  const nextYear = () => {
    const incomingYear = currentYear.getFullYear() + 1;
    setCurrentYear(new Date(incomingYear, 0));
    // Update the selected date with the new year
    const newSelectedDate = new Date(
      selected.getFullYear() + 1,
      selected.getMonth()
    );
    setSelectedDate(newSelectedDate);
  };

  console.log(getMonths());

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
          {getMonths().map(({ month, currentMonth }, index) => (
            <tr key={index}>
              <td
                className={`${currentMonth ? "current" : ""} ${
                  selected === index ? "selected" : ""
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
