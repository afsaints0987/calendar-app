import React from "react";
import Calendar from "./component/Calendar/Calendar";
import DatePicker from "./component/DatePicker/DatePicker";
import './App.css'

function App(){
    return (
        <div id="app">
            <DatePicker/>
            <Calendar/>
        </div>
    )
}

export default App