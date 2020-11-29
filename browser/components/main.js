import React from 'react';
import axios from 'axios';

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      students: [],
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    const res = await axios
      .get('/student')
      .then((res) => this.setState({ students: [...res.data] }));
    console.log(this.state.students);
  }

  render() {
    const { students } = this.state;
    return (
      <div>
        <h1>Students</h1>

        <table>
          <tr>
            <th>Name</th>
          </tr>
          {students.map((student) => (
            <tr key={student.id}>{student.fullName}</tr>
          ))}
        </table>
      </div>
    );
  }
}

export default Main;
