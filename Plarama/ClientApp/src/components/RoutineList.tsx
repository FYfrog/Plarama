import React, { Component } from 'react';
import { Checkbox } from "@chakra-ui/checkbox"

interface IRoutineListProps {
}

interface IRoutineListState {
  routines : IRoutine[];
  loading: boolean;
}

interface IRoutine{
  id: bigint;
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
    const response = await fetch('Routine');
    const data = await response.json();
    this.setState({ routines: data, loading: false });
  }

  static renderRoutinesTable(routines: IRoutine[]) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
        </thead>
        <tbody>
        {routines.map(routine =>
          <tr key={routine.id.toString()}>
            <td><Checkbox size="md" colorScheme="green" defaultIsChecked>Checkbox</Checkbox></td>
            <td>{routine.description}</td>
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