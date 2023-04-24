import React from 'react';
import "../components/Alarm.css";

function AlarmItem({ alarm }) {
  const { type, message, timestamp } = alarm;

  return (
    <div className={`alarm-item alarm-${type}`}>
      <div className="alarm-type">{type.toUpperCase()}</div>
      <div className="alarm-message">{message}</div>
      <div className="alarm-timestamp">{timestamp.toLocaleString()}</div>
    </div>
  );
}

export default AlarmItem;
