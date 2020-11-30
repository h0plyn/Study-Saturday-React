import React from 'react';

export const Details = (props) => {
  return (
    <div>
      <h1>Name</h1>
      <h3>Average grade: 50%</h3>
      <table>
        <tr>
          <th>Subject</th>
          <th>Grade</th>
        </tr>
        <tr>
          <td>Sub</td>
          <td>Grade%</td>
        </tr>
      </table>
    </div>
  );
};
