import React, { Component } from 'react';
import Calendar from './Calendar';
import {RoutineList} from "./RoutineList";

interface IProps {
}

interface IState {
  date: Date;
}

export class Home extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {date: new Date()};
  }

  onDateChange = (value: Date) => {
    this.setState({date: value});
  }

  render () {
    return (
      <div>
        <Calendar onChange={this.onDateChange} value={this.state.date} />
        <p>{this.state.date.toDateString()}</p>
        <RoutineList />
      </div>
    );
  }
}
