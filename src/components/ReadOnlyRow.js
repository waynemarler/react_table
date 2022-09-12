import React from "react";

const ReadOnlyRow = ({ teams, handleEditClick }) => {
  return (
    <tr>
      <td>{teams.hometeam}</td>
      <td>{teams.awayteam}</td>
      <td>
        {" "}
        <button
          type="button"
          onClick={(e) => handleEditClick(e, teams)}
          class="btn btn-primary"
        >
          Edit
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
