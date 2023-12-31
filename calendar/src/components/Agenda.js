import React from "react";
import "../Scss-Style/Agenda.css";
const Agenda = ({ events, setEvents }) => {
  const closingCrossSvg = (
    <svg
      width="25"
      height="23"
      viewBox="0 0 25 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.6562 0.5625H2.34375C1.0498 0.5625 0 1.6123 0 2.90625V20.0938C0 21.3877 1.0498 22.4375 2.34375 22.4375H22.6562C23.9502 22.4375 25 21.3877 25 20.0938V2.90625C25 1.6123 23.9502 0.5625 22.6562 0.5625ZM18.5742 14.7471C18.8086 14.9814 18.8086 15.3623 18.5742 15.5967L16.5967 17.5742C16.3623 17.8086 15.9814 17.8086 15.7471 17.5742L12.5 14.2979L9.25293 17.5742C9.01855 17.8086 8.6377 17.8086 8.40332 17.5742L6.42578 15.5967C6.19141 15.3623 6.19141 14.9814 6.42578 14.7471L9.70215 11.5L6.42578 8.25293C6.19141 8.01855 6.19141 7.6377 6.42578 7.40332L8.40332 5.42578C8.6377 5.19141 9.01855 5.19141 9.25293 5.42578L12.5 8.70215L15.7471 5.42578C15.9814 5.19141 16.3623 5.19141 16.5967 5.42578L18.5742 7.40332C18.8086 7.6377 18.8086 8.01855 18.5742 8.25293L15.2979 11.5L18.5742 14.7471Z"
        fill="black"
        fill-opacity="0.66"
      />
    </svg>
  );
  const handleDeleteEvent = (eventToDelete) => {
    const updatedEvents = events.filter(
      (event) => event.id !== eventToDelete.id
    );
    setEvents(updatedEvents);

    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  const timeSlots = [];
  for (let hour = 9; hour <= 24; hour++) {
    timeSlots.push(`${hour}:00`);
  }

  return (
    <div className="agenda">
      {timeSlots.map((slot, index) => (
        <div key={index} className="time-slot">
          <span className="time">{`${slot}`}</span>
          <div className="events">
            {events.map((event, eventIndex) => {
              const startTime = event.timeStart.split(":");
              const endTime = event.timeEnd.split(":");
              const eventStartHour = parseInt(startTime[0]);
              const eventEndHour = parseInt(endTime[0]);

              if (eventStartHour <= index + 9 && eventEndHour >= index + 9) {
                return (
                  <div
                    key={eventIndex}
                    className="event"
                    style={{ top: `${(eventStartHour - 9) * 60}px` }}
                  >
                    {event.title}

                    <span
                      onClick={() => handleDeleteEvent(event)} 
                      data-event-id={event.id}
                      className="closing-cross"
                    >
                      {closingCrossSvg}
                    </span>
                  </div>
                );
              }

              return null;
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Agenda;
