import React from "react";

const EditableRow = () => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="hometeam"
          required="required"
          placeholder="Add home team"
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="awayteam"
          required="required"
          placeholder="Add away team"
        ></input>
      </td>
    </tr>
  );
};

export default EditableRow;
