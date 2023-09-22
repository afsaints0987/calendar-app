# Calendar APP

Welcome to my Calendar Aoo! This README provides step-by-step instructions on how to set up and start the application.

## Getting Started

### Step 1: Clone the Repository

1. Open a terminal on your local machine.

2. Navigate to the directory where you want to store your project.

3. Clone the GitHub repository:

   <code>git clone https://github.com/afsaints0987/calendar-app.git</code>

### Step 2: Install the Dependencies

1. Navigate to the project directory

    <code>cd calendar-app</code>

2. Install the dependencies. Use one of the following commands based on your package manager:

    For npm:
    <code>npm install</code>

    For yarn:
    <code>yarn install</code>

### Step 3: Start the Application

1. To start the application, use the appopriate command:

    For npm:
    <code>npm run start</code> -- For production
    <code>npm run dev</code> -- For development

    For yarn:
    <code>yarn start</code> -- For production
    <code>yarn dev</code> -- For development

2. The application should now be running, currently running to 

    http://localhost:7700



Have Fun with my App!!



# API Documentation

| **Name**         | **Type**         | **Default**                                       | **Description**                                                                                                         |
|------------------|------------------|---------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| `date`           | Date Object      | Current date and time                            | This variable holds the current date and time.                                                                           |
| `calendarDays`   | Array of Strings | `["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]`    | An array containing the abbreviated names of days of the week.                                                            |
| `calendarMonths` | Array of Strings | `['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']` | An array containing the abbreviated names of calendar months.                                                      |
| `getDays(month, year)` | Function  | N/A                                               | A function that returns an array of objects representing the days of the specified month and year. It takes two optional parameters: `month` (default is the current month) and `year` (default is the current year). |
| `getMonths()`    | Function         | N/A                                               | A function that returns an array of objects representing the months of the year. Each object contains the name of the month and a flag indicating if it's the current month.      |
| `getYears(startYear, endYear)` | Function | N/A                                        | A function that returns an array of objects representing a range of years, from `startYear` to `endYear`, inclusive. Each object contains the year and a flag indicating if it's the current year.                 |
| `calendarView(mode, setViewMode)` | Function | N/A                                   | A function that sets the calendar view mode based on the `mode` parameter ('days', 'months', or 'years') using the `setViewMode` function.                                  |

You can copy and paste this table directly into your README.md file to provide clear documentation for each API, including its name, type, default value, and description.
