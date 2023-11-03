import { render } from "react-dom";
import React, { useState } from "react";
import Calendar from "react-calendar";

const UserPage = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const onChange = (date) => {
    setDate(date);
  };

  const handleDateClick = (value) => {
    setSelectedDate(value);
  };

  return (
    <div className="user-page-container">
      <h1 className="header-register">Choose a Date</h1>
      <div className="form-div-register-page">
        <Calendar
          onChange={onChange}
          value={date}
          onClickDay={handleDateClick}
          calendarType="US"
          locale="en-US"
          minDate={new Date()}
          className="calendar-custom-style"
        />
        {selectedDate && (
          <div className="selected-date-info">
            <h2>Selected Date:</h2>
            <p>{selectedDate.toDateString()}</p>
            {/* Additional details or actions related to the selected date */}
          </div>
        )}
      </div>
    </div>
  );
};

render(<UserPage />, document.querySelector("#root"));

export default UserPage;
