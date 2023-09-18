import React from 'react'
import '../Calendar/Calendar.css'


const Calendar = () => {
  const [date, setDate] = React.useState(new Date())
  const [days, setDays] = React.useState([])
  const wdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

  // Get the previous month of the year
  const prevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1));
  };

  // Get the next month of the year
  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1))
  }

  // Get the days of the month this year
  const getDays = () => {
    const firstDay = new Date(date.getFullYear(), (date.getMonth() + 1 )- 1, 1)
    const lastDay = new Date(date.getFullYear(), (date.getMonth() + 1), 0)

    const daysInMonth = []
    let currentDay = firstDay;

    while(currentDay <= lastDay) {
      daysInMonth.push(currentDay.getDate());
      currentDay.setDate(currentDay.getDate() + 1)
    }

    setDays(daysInMonth)
  }

  React.useEffect(() => {
    getDays()

    return () => {
      setDays([])
    }
  },[date])

  console.log(days)

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button className="caret left" onClick={prevMonth}>&#60;</button>
        <h5>
          {date.toLocaleString("en-us", { month: "long", year: "numeric" })}
        </h5>
        <button className="caret right" onClick={nextMonth}>&#62;</button>
      </div>
      <table className="calendar-table">
        <thead className="table-header">
          {wdays.map((wday, index) => (
            <tr key={index}>
              <th>{wday}</th>
            </tr>
          ))}
        </thead>
        <tbody className="table-body">
            {days.map((day, index) => (
              <tr key={index}>
                <td>{day}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar