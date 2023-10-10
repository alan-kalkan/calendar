import React, { useState } from "react";

function Events() {
  const [events, setEvents] = useState([]); 
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    timeStart: "",
    timeEnd: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const addEvent = () => {
    const { title, date, timeStart, timeEnd } = formData;
    if (title && date && timeStart && timeEnd) {
      const newEvent = {
        title,
        date,
        timeStart,
        timeEnd,
      };
      setEvents([...events, newEvent]);
      setFormData({
        title: "",
        date: "",
        timeStart: "",
        timeEnd: "",
      });
    }
  };

  return (
    <div>
      <div>
        <h3>Ajouter un événement</h3>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <div className="row-specific">
          <input
            type="time"
            name="timeStart"
            value={formData.time}
            onChange={handleChange}
          />
          <input
            type="time"
            name="timeEnd"
            value={formData.time}
            onChange={handleChange}
          />
          <button onClick={addEvent}>Ajouter</button>
        </div>
      </div>
    </div>
  );
}

export default Events;
