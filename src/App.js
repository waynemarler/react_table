import logo from "./logo.svg";
import "./App.css";
import data from "./data.json";
import { Fragment, useState } from "react";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

function App() {
  const [teams, setTeams] = useState(data);
  const [addFormData, setaddFormData] = useState({
    hometeam: "",
    awayteam: "",
  });

  const [editFormData, setEditFormData] = useState({
    hometeam: "",
    awayteam: "",
  });
  const [editTeamId, seteditTeamId] = useState(null);
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setaddFormData(newFormData);
  };
  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newTeam = {
      id: nanoid(),
      hometeam: addFormData.hometeam,
      awayteam: addFormData.awayteam,
    };
    const newTeams = [...teams, newTeam];
    setTeams(newTeams);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editTeams = {
      id: editTeamId,
      hometeam: editFormData.hometeam,
      awayteam: editFormData.awayteam,
    };
    const newTeams = [...teams];
    const index = teams.findIndex((teams) => teams.id === editTeamId);
    newTeams[index] = editTeams;
    setTeams(newTeams);
    seteditTeamId(null);
  };

  const handleEditClick = (event, teams) => {
    event.preventDefault();
    seteditTeamId(teams.id);
    const formValues = {
      hometeam: teams.hometeam,
      awayteam: teams.awayteam,
    };
    setEditFormData(formValues);
    console.log(setEditFormData(formValues));
  };
  const handleCancelClick = () => {
    seteditTeamId(null);
  };
  const handleDeleteClick = (teamsId) => {
    const newTeams = [...teams];
    const index = teams.findIndex((teams) => teams.id === teamsId);
    newTeams.splice(index, 1);
    setTeams(newTeams);
    console.log(teamsId);
    console.log(index);
    console.log(newTeams);
  };
  return (
    <div className="App">
      <div className="app-container">
        <h1>Predictor</h1>
        <form onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th>Home Team</th>
                <th>Away Team</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((teams) => (
                <Fragment>
                  {editTeamId === teams.id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      teams={teams}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
        <h2>Add Fixture</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            name="hometeam"
            required="required"
            placeholder="Add home team"
            onChange={handleAddFormChange}
          ></input>
          <input
            type="text"
            name="awayteam"
            required="required"
            placeholder="Add away team"
            onChange={handleAddFormChange}
          ></input>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

export default App;
