import React from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface CalendarProps {
    value: Date;
    onChange: (newValue: Date) => void;
}

export default function Calendar(props: CalendarProps) {
    return <ReactCalendar
            onChange={props.onChange}
            value={props.value}
        />;
}