import React from 'react';
import axios from 'axios';
import { StudentList } from './StudentList';
import { SingleStudent } from './SingleStudent';
import { Details } from './Details';

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
  }

  render() {
    const { students } = this.state;
    return (
      <div>
        <h1>Students</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Tests</th>
          </tr>
          <tr>
            <StudentList students={students} />
          </tr>
        </table>
        <Details />
      </div>
    );
  }
}

export default Main;
