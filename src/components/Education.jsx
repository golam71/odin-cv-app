let educationdata = {
  Name: "",
  Degree: "",
  "Start Time": "",
  "End Time": "",
  Location: "",
};

export function Education({
  eduData,
  setEduData,
  eduFormData,
  setEduFormData,
  eduEditMode,
  setEduEditMode,
}) {
  return (
    <div className="education">
      <h2>Education</h2>
      {eduEditMode ? (
        <Form
          eduFormData={eduFormData}
          setEduFormData={setEduFormData}
          eduData={eduData}
          setEduData={setEduData}
          setEditMode={setEduEditMode}
        />
      ) : (
        <ShowEduData
          eduData={eduData}
          setEditMode={setEduEditMode}
          setEduFormData={setEduFormData}
        />
      )}
    </div>
  );
}

function Form({
  eduData,
  setEduData,
  setEditMode,
  eduFormData,
  setEduFormData,
}) {
  const handleSubmit = () => {
    const exists = eduData.some((item) => item.Name === eduFormData.Name);

    const newArr = exists
      ? eduData.map((item) =>
          item.Name === eduFormData.Name ? eduFormData : item
        )
      : [...eduData, eduFormData];

    setEduData(newArr);
    setEduFormData({ ...educationdata });
    setEditMode(false);
  };

  const handleDelete = () => {
    const name = eduFormData["Name"];
    const newArr = eduData.filter((item) => item["Name"] !== name);
    setEduFormData({ ...educationdata });
    setEduData(newArr);
    setEditMode(false);
  };

  return (
    <>
      {Object.keys(educationdata).map((key) => (
        <label htmlFor={key} key={key}>
          {key}
          <input
            type="text"
            name={key}
            id={key}
            value={eduFormData[key]}
            onChange={(e) =>
              setEduFormData({
                ...eduFormData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </label>
      ))}

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleDelete}>
        {eduData.some((i) => i["Name"] === eduFormData["Name"])
          ? "Delete"
          : "Cancel"}
      </button>
    </>
  );
}

function ShowEduData({ eduData, setEditMode, setEduFormData }) {
  const handleShowData = (name) => {
    const item = eduData.find((i) => i.Name === name);
    if (item) {
      setEduFormData(item);
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
