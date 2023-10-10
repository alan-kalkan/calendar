import React, { useState } from "react";
import "../Scss-Style/Calendar.css";
import ModalEvent from "./ModalEvent";

function Calendar(props) {
  const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const maxDays = 5 * 7;
  const leftArrow = (
    <svg
      width="20"
      height="38"
      viewBox="0 0 20 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 1L1 19L19 37"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  const rightArrow = (
    <svg
      width="20"
      height="38"
      viewBox="0 0 20 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L19 19L1 37"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  const addVector = (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.3125 8.59375H13.2812V1.5625C13.2812 0.699707 12.5815 0 11.7188 0H10.1562C9.29346 0 8.59375 0.699707 8.59375 1.5625V8.59375H1.5625C0.699707 8.59375 0 9.29346 0 10.1562V11.7188C0 12.5815 0.699707 13.2812 1.5625 13.2812H8.59375V20.3125C8.59375 21.1753 9.29346 21.875 10.1562 21.875H11.7188C12.5815 21.875 13.2812 21.1753 13.2812 20.3125V13.2812H20.3125C21.1753 13.2812 21.875 12.5815 21.875 11.7188V10.1562C21.875 9.29346 21.1753 8.59375 20.3125 8.59375Z"
        fill="white"
      />
    </svg>
  );
  const currentDate = new Date();
  const [displayedDate, setDisplayedDate] = useState(currentDate);
  const [clickedDay, setClickedDay] = useState(currentDate.getDate());
  const [clickedMonth, setClickedMonth] = useState(
    monthNames[displayedDate.getMonth()]
  );
  

  const goToPreviousMonth = () => {
    const newDate = new Date(
      displayedDate.getFullYear(),
      displayedDate.getMonth() - 1,
      1
    );
    setDisplayedDate(newDate);
  };


  const goToNextMonth = () => {
    const newDate = new Date(
      displayedDate.getFullYear(),
      displayedDate.getMonth() + 1,
      1
    );
    setDisplayedDate(newDate);
  };

  const daysInMonth = new Date(
    displayedDate.getFullYear(),
    displayedDate.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    displayedDate.getFullYear(),
    displayedDate.getMonth(),
    1
  ).getDay();
  const days = [];

  const daysInPreviousMonth = new Date(
    displayedDate.getFullYear(),
    displayedDate.getMonth(),
    0
  ).getDate();

  for (let i = 3; i <= firstDayOfMonth && days.length < maxDays; i++) {
    days.push(
      <div key={`previous-month-${i}`} className="calendar-day-previous-month">
        {daysInPreviousMonth - firstDayOfMonth + i}
      </div>
    );
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const isCurrentDay =
      day === currentDate.getDate() &&
      displayedDate.getMonth() === currentDate.getMonth() &&
      displayedDate.getFullYear() === currentDate.getFullYear();
    days.push(
      <div
        key={`day-${day}`}
        className={`calendar-day ${isCurrentDay ? "current-day" : ""}`}
        onClick={() => {
          setClickedDay(day);
          setClickedMonth(monthNames[displayedDate.getMonth()]);
        }}
      >
        {day}
      </div>
    );
  }
  const nextMonthStartDay = (firstDayOfMonth + daysInMonth) % 7;

  for (let i = 1; i <= 6 - nextMonthStartDay && days.length < maxDays; i++) {
    days.push(
      <div key={`next-month-${i}`} className="calendar-day-next-month">
        {i}
      </div>
    );
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveEvent = (formData) => {
    console.log("Nouvel événement:", formData);
    closeModal();
    if (props.onAddEvent) {
      props.onAddEvent(formData);
    }
  };

  return (
    <div className="calendar-container">
      <div className="events-main">
        <h2 className="clicked-day">
          {clickedDay} {clickedMonth}
        </h2>
        <span className="shadow"></span>
        <div className="rightPanel">
          <div className="calendar">
            <div className="calendar-header">
              <button onClick={goToPreviousMonth} className="leftSvg">
                {leftArrow}
              </button>
              <div className="fineLine"></div>
              <h1 className="month">{`${
                monthNames[displayedDate.getMonth()]
              } ${displayedDate.getFullYear()}`}</h1>
              <button onClick={goToNextMonth} className="rightSvg">
                {rightArrow}
              </button>
            </div>
            <div className="calendar-body">
              <div className="days-of-week">
                {daysOfWeek.map((day, index) => (
                  <div key={index} className="day-of-week">
                    {day}
                  </div>
                ))}
              </div>
              <div className="days">{days}</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="open-modal" onClick={openModal}>
          {addVector}
        </span>
        <ModalEvent
          isOpen={isModalOpen}
          onClose={closeModal}
          onSave={handleSaveEvent}
        />
      </div>
    </div>
  );
}

export default Calendar;
