import React from "react";

const ReadOnlyRow = ({ teams }) => {
  return (
    <tr>
      <td>{teams.hometeam}</td>
      <td>{teams.awayteam}</td>
    </tr>
  );
};

export default ReadOnlyRow;
