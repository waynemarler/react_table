import React from "react";

const EditableRow = ({ editFormData, handleEditFormChange }) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="hometeam"
          required="required"
          placeholder="Add home team"
          value={editFormData.hometeam}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="awayteam"
          required="required"
          placeholder="Add away team"
          value={editFormData.awayteam}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit" class="btn btn-primary">
          Save
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
