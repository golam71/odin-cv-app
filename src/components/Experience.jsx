let expdata = {
  "Company Name": "",
  "Position Title": "",
  "Start Date": "",
  "End Date": "",
  Location: "",
  Description: "",
};

export function Experience({
  expEditMode,
  setExpEditMode,
  expFormData,
  setExpFormData,
  expData,
  setExpData,
}) {
  return (
    <div className="experience">
      <h2>Experience</h2>
      {expEditMode ? (
        <Form
          expFormData={expFormData}
          setExpFormData={setExpFormData}
          setExpEditMode={setExpEditMode}
          expData={expData}
          setExpData={setExpData}
        />
      ) : (
        <ShowExpData
          setExpFormData={setExpFormData}
          expData={expData}
          setExpEditMode={setExpEditMode}
          setFormData={setExpFormData}
        />
      )}
    </div>
  );
}

function Form({
  expFormData,
  setExpFormData,
  setExpData,
  expData,
  setExpEditMode,
}) {
  function handleForm() {
    let name = expFormData["Company Name"];
    let exists = expData.some((item) => item["Company Name"] === name);

    const newArr = exists
      ? expData.map((item) =>
          item["Company Name"] === name ? expFormData : item
        )
      : [...expData, expFormData];

    setExpData(newArr);
    setExpFormData(expdata);
    setExpEditMode(false);
  }

  function handleDelete() {
    let name = expFormData["Company Name"];
    let newArr = expData.filter((item) => item["Company Name"] !== name);
    setExpData(newArr);
    setExpFormData(expdata);
    setExpEditMode(false);
  }

  return (
    <>
      {Object.keys(expdata).map((input) => (
        <label htmlFor={input} key={input}>
          {input}
          <input
            type="text"
            id={input}
            name={input}
            value={expFormData[input]}
            onChange={(e) =>
              setExpFormData({
                ...expFormData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </label>
      ))}
      <button onClick={handleForm}>Submit</button>
      <button onClick={handleDelete}>
        {expData.some((i) => i["Company Name"] === expFormData["Company Name"])
          ? "Delete"
          : "Cancel"}
      </button>
    </>
  );
}

function ShowExpData({ expData, setExpEditMode, setExpFormData }) {
  function handleShowData(name) {
    const item = expData.find((i) => i["Company Name"] === name);
    if (item) {
      setExpFormData(item);
      setExpEditMode(true);
    }
  }

  return (
    <>
      {expData
        .filter((item) => item["Company Name"])
        .map((item) => (
          <p
            className="exp-item"
            name={item["Company Name"]}
            key={item["Company Name"]}
            onClick={() => handleShowData(item["Company Name"])}
          >
            {item["Company Name"]}
          </p>
        ))}
      <button onClick={() => setExpEditMode(true)}>+ Add</button>
    </>
  );
}
