import React, { useEffect } from "react";
import "../styles/Notification.css";

const Notification = ({ type, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`notification ${type}`}>
      <span className="notification-icon">
        {type === "success" ? "✅" : "❌"}
      </span>
      <span className="notification-message">{message}</span>
    </div>
  );
};

export default Notification;
