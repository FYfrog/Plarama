import React, { Component, useState } from 'react';
import ReactCalendar from 'react-calendar';

interface CalendarProps {
    value: Date;
    onChange: (newValue: Date) => void;
}

export default function Calendar(props: CalendarProps) {
    /*const [value, setValue] = useState(new Date());

    function onChange(nextValue: Date) {
        setValue(nextValue);
    }*/

    return <ReactCalendar
            onChange={props.onChange}
            value={props.value}
        />;
}