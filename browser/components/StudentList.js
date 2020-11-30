import React from 'react';
import { SingleStudent } from './SingleStudent';

export const StudentList = (props) => {
  return (
    <tr>
      {props.students.map((student) => (
        <SingleStudent key={student.id} student={student} />
      ))}
    </tr>
  );
};
