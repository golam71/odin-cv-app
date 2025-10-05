import "../css/cv.css";

export default function CV({ personalDetails, eduData, expData }) {
  return (
    <div className="cv">
      <Personal personalDetails={personalDetails} />
      <div className="edu">
        <h2>Education</h2>
        <Education eduData={eduData} />
      </div>
    </div>
  );
}

function Personal({ personalDetails }) {
  return (
    <div className="personal">
      <h1>{personalDetails["Full Name"]}</h1>
      <div className="flex">
        <p>{personalDetails["Email"]}</p>
        <p>{personalDetails["Phone Number"]}</p>
        <p>{personalDetails["Address"]}</p>
      </div>
    </div>
  );
}

function Education({ eduData }) {
  return eduData.map((item) => {
    return (
      <div className="between">
        <div>
          <p>
            {item["Start Time"]} - {item["End Time"]}
          </p>
          <p>{item["Location"]}</p>
        </div>
        <div>
          <b>{item["Name"]}</b>
          <p>{item["Degree"]}</p>
        </div>
      </div>
    );
  });
}
