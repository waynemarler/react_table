import logo from "./logo.svg";
import "./App.css";
import data from "./data.json";
import { Fragment, useState } from "react";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import { ReactFragment } from "react";
function App() {
  const [teams, setTeams] = useState(data);
  const [addFormData, setaddFormData] = useState({
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
  return (
    <div className="App">
      <div className="app-container">
        <h1>Predictor</h1>
        <form>
          <table>
            <thead>
              <tr>
                <th>Home Team</th>
                <th>Away Team</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((teams) => (
                <Fragment>
                  {editTeamId === teams.id ? (
                    <EditableRow />
                  ) : (
                    <ReadOnlyRow teams={teams} />
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
