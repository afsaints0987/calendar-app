import React from "react";
import { getMonths } from "../../helper/calendar";

const Months = ({ selected, onSelectDate }) => {
  return (
    <>
      <tbody className="calendar-months">
        {getMonths().map(({ month, currentMonth }, index) => (
          <tr key={index}>
            <td
              className={`${currentMonth ? "today" : ""} ${
                selected === month ? "selected" : ""
              } table-item`}
              onClick={() => onSelectDate(month)}
            >
              {month}
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default Months;
