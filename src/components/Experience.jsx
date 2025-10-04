import { useState } from "react";

let data = {
  "Company Name": "",
  "Position Title": "",
  "Start Date": "",
  "End Date": "",
  Location: "",
  Description: "",
};

export function Experience() {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(data);
  const [expData, setExpData] = useState([]);

  return (
    <div className="experience">
      <h2>Experience</h2>
      {editMode ? (
        <Form
          formData={formData}
          setFormData={setFormData}
          setEditMode={setEditMode}
          expData={expData}
          setExpData={setExpData}
        />
      ) : (
        <ShowExpData
          expData={expData}
          setEditMode={setEditMode}
          setFormData={setFormData}
        />
      )}
    </div>
  );
}

function Form({ formData, setFormData, setExpData, expData, setEditMode }) {
  function handleForm() {
    let name = formData["Company Name"];
    let exists = expData.some((item) => item["Company Name"] == name);

    const newArr = exists
      ? expData.map((item) => (item["Company Name"] === name ? formData : item))
      : [...expData, formData];

    setExpData(newArr);
    setFormData(data);
    setEditMode(false);
  }

  function handleDelete() {
    let name = formData["Company Name"];
    let newArr = expData.filter((item) => item["Company Name"] !== name);
    setExpData(newArr);
    setFormData(data);
    setEditMode(false);
  }
  return (
    <>
      {Object.keys(data).map((input) => (
        <label htmlFor={input} key={input}>
          {input}
          <input
            type="text"
            id={input}
            name={input}
            value={formData[input]}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </label>
      ))}
      <button onClick={() => handleForm()}>Submit</button>
      <button onClick={() => handleDelete()}>Delete</button>
    </>
  );
}

function ShowExpData({ expData, setEditMode, setFormData }) {
  function handleShowData(name) {
    const item = expData.find((i) => i["Company Name"] == name);
    if (item) {
      setFormData(item);
      setEditMode(true);
    }
  }

  return (
    <>
      {expData.map((item) => {
        if (item["Company Name"].length >= 1) {
          return (
            <p
              className="exp-item"
              name={item["Company Name"]}
              key={item["Company Name"]}
              onClick={() => {
                handleShowData(item["Company Name"]);
              }}
            >
              {item["Company Name"]}
            </p>
          );
        }
      })}
      <button
        onClick={() => {
          setEditMode(true);
        }}
      >
        + Add
      </button>
    </>
  );
}
