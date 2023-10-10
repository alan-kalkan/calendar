import React, { useState } from "react";
import "../Scss-Style/Modal.css";

function ModalEvent({ isOpen, onClose, onSave }) {
  const calendarSvg = (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.7501 3.4H24.6502V0.85C24.6502 0.380591 24.2696 0 23.8002 0C23.3309 0 22.9503 0.380591 22.9503 0.85V3.4H11.0506V0.85C11.0506 0.380591 10.67 0 10.2006 0C9.73118 0 9.3506 0.380591 9.3506 0.85V3.4H4.2499C1.90374 3.40249 0.0024901 5.30378 0 7.65V29.75C0.0024901 32.0962 1.90374 33.9975 4.2499 34H29.7501C32.0964 33.9978 33.9978 32.0963 34 29.75V7.65C33.9978 5.30368 32.0964 3.40218 29.7501 3.4ZM32.3 29.75C32.2985 31.1577 31.1578 32.2984 29.7501 32.3H4.2499C2.84222 32.2984 1.70151 31.1577 1.69996 29.75V15.3H32.3V29.75ZM32.3 13.6H1.69996V7.65C1.70151 6.24229 2.84222 5.10156 4.2499 5.1H9.3506V7.65C9.3506 7.65031 9.3506 7.65062 9.3506 7.65104C9.35091 8.12014 9.73139 8.50031 10.2006 8.5C10.2009 8.5 10.2012 8.5 10.2016 8.5C10.6707 8.49969 11.0509 8.1192 11.0506 7.65V5.1H22.9503V7.65C22.9503 7.65031 22.9503 7.65062 22.9503 7.65104C22.9506 8.12014 23.3311 8.50031 23.8002 8.5C23.8006 8.5 23.8009 8.5 23.8013 8.5C24.2704 8.49969 24.6505 8.1192 24.6502 7.65V5.1H29.7501C31.1578 5.10156 32.2985 6.24229 32.3 7.65V13.6Z"
        fill="black"
      />
    </svg>
  );
  const timeSvg = (
    <svg
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5 0C8.28304 0 0 8.28304 0 18.5C0 28.717 8.28304 37 18.5 37C28.717 37 37 28.717 37 18.5C37 8.28304 28.717 0 18.5 0ZM18.5 35.2485C9.26825 35.2485 1.75148 27.7318 1.75148 18.5C1.75148 9.26825 9.26825 1.75148 18.5 1.75148C27.7318 1.75148 35.2485 9.26825 35.2485 18.5C35.2485 27.7318 27.7318 35.2485 18.5 35.2485Z"
        fill="black"
      />
      <path
        d="M19.3757 18.1351V7.9181C19.3757 7.44374 18.9744 7.04236 18.5 7.04236C18.0256 7.04236 17.6243 7.44374 17.6243 7.9181V18.5C17.6243 18.7189 17.7337 18.9743 17.8797 19.1203L24.9221 26.1627C25.1045 26.3451 25.3235 26.4181 25.5424 26.4181C25.7614 26.4181 25.9803 26.3451 26.1627 26.1627C26.4911 25.8343 26.4911 25.2504 26.1627 24.922L19.3757 18.1351Z"
        fill="black"
      />
    </svg>
  );
  const closeModal = () => {
    onClose();
  };
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    timeStart: "",
    timeEnd: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
    setFormData({
      title: "",
      date: "",
      timeStart: "",
      timeEnd: "",
      description: "",
    });
  };
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("modal-backdrop")) {
      closeModal();
    }
    return;
  };

  return (
    isOpen && (
      <div className="modal-backdrop" onClick={handleBackdropClick}>
        <div className={`modal-${isOpen ? "open" : ""}`}>
          <div className="modal-content">
            <input
              className="title-input"
              type="text"
              name="title"
              placeholder="Add title"
              value={formData.title}
              onChange={handleChange}
            />
            <div style={{ display: "flex", gap: "10px" }}>
              <span>{calendarSvg}</span>
              <input
                className="date-input"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <span>{timeSvg}</span>
              <input
                className="start-input"
                type="time"
                name="timeStart"
                value={formData.timeStart}
                onChange={handleChange}
              />
              <input
                className="end-input"
                type="time"
                name="timeEnd"
                value={formData.timeEnd}
                onChange={handleChange}
              />
            </div>
            <div className="specific-row">
              <input
                className="description-input"
                type="text"
                name="description"
                placeholder="Comment"
                value={formData.description}
                onChange={handleChange}
              />
              <div
                onClick={handleSave}
                className="adding-button"
                style={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "row-reverse",
                }}
              >
                <span className="inside-adding">Add</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ModalEvent;
