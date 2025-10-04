import { useState } from "react";

let data = {
  Name: "",
  Degree: "",
  "Start Time": "",
  "End Time": "",
  Location: "",
};

export function Education() {
  const [expData, setexpData] = useState([]);
  const [formData, setFormData] = useState({ ...data });
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="education">
      <h2>Education</h2>
      {editMode ? (
        <Form
          formData={formData}
          setFormData={setFormData}
          expData={expData}
          setexpData={setexpData}
          setEditMode={setEditMode}
        />
      ) : (
        <ShowexpData
          expData={expData}
          setEditMode={setEditMode}
          setFormData={setFormData}
        />
      )}
    </div>
  );
}

function Form({ expData, setexpData, setEditMode, formData, setFormData }) {
  const handleSubmit = () => {
    const exists = expData.some((item) => item.Name === formData.Name);

    const newArr = exists
      ? expData.map((item) => (item.Name === formData.Name ? formData : item))
      : [...expData, formData];

    setexpData(newArr);
    setFormData({ ...data });
    setEditMode(false);
  };

  return (
    <>
      {Object.keys(data).map((key) => (
        <label htmlFor={key} key={key}>
          {key}
          <input
            type="text"
            name={key}
            id={key}
            value={formData[key]}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </label>
      ))}

      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

function ShowexpData({ expData, setEditMode, setFormData }) {
  const handleShowData = (name) => {
    const item = expData.find((i) => i.Name === name);
    if (item) {
      setFormData(item);
      setEditMode(true);
    }
  };

  return (
    <>
      {expData
        .filter((item) => item.Name)
        .map((item) => (
          <p
            className="edu-item"
            key={item.Name}
            onClick={() => handleShowData(item.Name)}
          >
            {item.Name}
          </p>
        ))}
      <button onClick={() => setEditMode(true)}>+Add</button>
    </>
  );
}
