import { useState } from "react";

let data = {
  Name: "",
  Degree: "",
  "Start Time": "",
  "End Time": "",
  Location: "",
};

export function Education() {
  const [eduData, setEduData] = useState([]);
  const [formData, setFormData] = useState({ ...data });
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="education">
      <h2>Education</h2>
      {editMode ? (
        <Form
          formData={formData}
          setFormData={setFormData}
          eduData={eduData}
          setEduData={setEduData}
          setEditMode={setEditMode}
        />
      ) : (
        <ShowEduData
          eduData={eduData}
          setEditMode={setEditMode}
          setFormData={setFormData}
        />
      )}
    </div>
  );
}

function Form({ eduData, setEduData, setEditMode, formData, setFormData }) {
  const handleSubmit = () => {
    const exists = eduData.some((item) => item.Name === formData.Name);

    const newArr = exists
      ? eduData.map((item) => (item.Name === formData.Name ? formData : item))
      : [...eduData, formData];

    setEduData(newArr);
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

function ShowEduData({ eduData, setEditMode, setFormData }) {
  const handleShowData = (name) => {
    const item = eduData.find((i) => i.Name === name);
    if (item) {
      setFormData(item);
      setEditMode(true);
    }
  };

  return (
    <>
      {eduData
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
