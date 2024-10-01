'use client'
import React, { useEffect, useState } from 'react'
const DateFormater = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
      const timer = setInterval(() => {
        setDateTime(new Date());
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    const formatDate = (date: Date) => {
      return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
    };
  
    const formatTime = (date: Date) => {
      return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    };
  
    return (
      <div className="date-time-display">
        <p>{formatDate(dateTime)} {formatTime(dateTime)}</p>
      </div>
    );
}

export default DateFormater