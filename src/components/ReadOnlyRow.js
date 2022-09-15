import React from "react";

const ReadOnlyRow = ({ teams, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{teams.hometeam}</td>
      <td>{teams.awayteam}</td>
      <td>
        <button type="button" onClick={(e) => handleEditClick(e, teams)}>
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(teams.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
