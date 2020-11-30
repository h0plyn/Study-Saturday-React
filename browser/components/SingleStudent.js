import React from 'react';
import axios from 'axios';
import { Details } from './Details';

// import Student from '../../db/models/students';
// import Student from '../../db/models';
// import Test from '../../db/models';

export class SingleStudent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      testResults: [],
      details: false,
    };
    console.log(this.state);
  }

  async componentDidMount() {
    const student = await axios
      .get(`/test`)
      .then((res) => res.data)
      .then((data) => {
        const studentTests = data.filter(
          (test) => test.studentId === this.props.student.id
        );
        this.setState({ testResults: [...studentTests] });
      });
  }

  render() {
    const { id, fullName } = this.props.student;

    return (
      <tr key={id}>
        <td>{fullName}</td>
        <td key={id}>Details</td>
      </tr>
    );
  }
}
