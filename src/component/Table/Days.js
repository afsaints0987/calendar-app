import React from "react";
import { calendarDays, getDays } from "../../helper/calendar";

const Days = ({selected, onSelectDate, date}) => {
    
  return (
    <>
      <thead className="table-header">
        {calendarDays.map((wday, index) => (
          <tr key={index}>
            <th>{wday}</th>
          </tr>
        ))}
      </thead>
      <tbody className="table-body">
        {getDays(date.getMonth(), date.getFullYear()).map(
          ({ day, isCurrent, isToday }, index) => (
            <tr key={index}>
              <td
                className={`${!isCurrent ? "disabled" : ""} ${
                  selected === day && isCurrent ? "selected" : ""
                } ${isToday ? "today" : ""} table-item`}
                onClick={() => onSelectDate(day)}
              >
                {day}
              </td>
            </tr>
          )
        )}
      </tbody>
    </>
  );
};

export default Days;
