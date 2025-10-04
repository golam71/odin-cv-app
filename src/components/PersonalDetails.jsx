import "../css/cvDataCards.css";

export function PersonalDetails({ personalDetails, setPersonalDetails }) {
  function handleChange(e) {
    setPersonalDetails({
      ...personalDetails,
      [e.target.name]: e.target.value,
    });
  }

  let data = ["Full Name", "Email", "Address", "Phone Number"];
  return (
    <div className="personal-details">
      <h2>Personal Details</h2>
      {data.map((item) => {
        return (
          <label htmlFor={item} key={item}>
            <br />
            {item}
            <br />
            <input
              type="text"
              name={item}
              id={item}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </label>
        );
      })}
    </div>
  );
}
