import React, { Component } from 'react';
import { Checkbox } from "@chakra-ui/checkbox"

interface IRoutineListProps {
}

interface IRoutineListState {
  routines : IRoutine[];
  loading: boolean;
}

interface IRoutine {
  id: bigint;
  state: number;
  description: string;
}

export class RoutineList extends Component<IRoutineListProps, IRoutineListState> {
  constructor(props: IRoutineListProps) {
    super(props);
    this.state = { routines: [], loading: true };
  }

  componentDidMount() {
    this.populateRoutineData();
  }

  populateRoutineData = async () => {
    const response = await fetch(`Routine?date=${encodeURIComponent(new Intl.DateTimeFormat('en-US').format(new Date()))}`);
    //const response = await fetch(`Routine`);
    const data = await response.json();
    this.setState({ routines: data, loading: false });
  }

  static renderRoutinesTable(routines: IRoutine[]) {
    return (
      <table className="table table-sm" aria-labelledby="tabelLabel">
        <thead>
        </thead>
        <tbody>
        {routines.map(routine =>
          <tr key={routine.id.toString()}>
            <td><Checkbox defaultIsChecked={routine.state == 1}>{routine.description}</Checkbox></td>
          </tr>
        )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : RoutineList.renderRoutinesTable(this.state.routines);

    return (
      <div>
        <h1>Routine list</h1>
        {contents}
      </div>
    );
  }
}