import { useState } from "react";

export function Education() {
  const [isEditing, setIsEditing] = useState(true);
  const [EducationData, setEducationData] = useState({
    "Instuition Name": "",
    Degree: "",
    "Start Date": "",
    "End Date": "",
    Location: "",
  });

  function handleChange(e) {
    setEducationData({ ...EducationData, [e.target.name]: e.target.value });
  }

  function Inputs() {
    let data = [
      "Instuition Name",
      "Degree",
      "Start Date",
      "End Date",
      "Location",
    ];

    return data.map((d) => (
      <label htmlFor={d} key={d}>
        <br />
        {d}
        <br />
        <input type="text" name={d} onChange={(e) => handleChange(e)} />
      </label>
    ));
  }

  return (
    <div className="education">
      <h2>Education</h2>
      {!isEditing && (
        <button
          onClick={() => {
            setIsEditing(!isEditing);
          }}
        >
          + Add
        </button>
      )}
      {isEditing && <Inputs />}
      {isEditing && (
        <button
          onClick={() => {
            setIsEditing(!isEditing);
          }}
        >
          Sumbit
        </button>
      )}
    </div>
  );
}
