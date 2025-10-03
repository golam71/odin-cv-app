import { useState } from "react";

export function Education() {
  let data = {
    Name: "",
    Degree: "",
    "Start Date": "",
    "End Date": "",
    Location: "",
  };

  const [eduData, setEduData] = useState([data]);

  return (
    <div className="education">
      <h2>Education</h2>
      {Object.keys(data).map((element) => {
        return (
          <label htmlFor={element} key={element}>
            {element}
            <input type="text" id={element} />
          </label>
        );
      })}
    </div>
  );
}
