import React, { useState, useEffect } from "react";
import Calendar from "./components/Calendar";
import Agenda from "./components/Agenda";

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prevEvents) => [...prevEvents, event]);
    saveEventsToLocal([...events, event]); 
  };

  const saveEventsToLocal = (events) => {
    localStorage.setItem("events", JSON.stringify(events));
  };

  useEffect(() => {
    const storedEvents = getEventsFromLocal();
    if (storedEvents) {
      setEvents(storedEvents);
    }
  }, []);

  const getEventsFromLocal = () => {
    const eventsJSON = localStorage.getItem("events");
    if (eventsJSON) {
      return JSON.parse(eventsJSON);
    } else {
      return [];
    }
  };

  return (
    <>
      <div className="mainApp">
        <Calendar onAddEvent={addEvent} />{" "}
        <Agenda events={events} setEvents={setEvents} />{" "}
      </div>
    </>
  );
}

export default App;
