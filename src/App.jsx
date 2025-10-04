import CvData from "./components/CvData";
import CV from "./components/CV";
import { useState } from "react";

export default function App() {
  // personal
  const [personalDetails, setPersonalDetails] = useState({
    "Full Name": "",
    Email: "",
    Address: "",
  });

  // education
  let educationdata = {
    Name: "",
    Degree: "",
    "Start Time": "",
    "End Time": "",
    Location: "",
  };
  const [eduData, setEduData] = useState([]);
  const [eduFormData, setEduFormData] = useState({ ...educationdata });
  const [eduEditMode, setEduEditMode] = useState(false);

  // experience
  let expdata = {
    "Company Name": "",
    "Position Title": "",
    "Start Date": "",
    "End Date": "",
    Location: "",
    Description: "",
  };
  const [expEditMode, setExpEditMode] = useState(false);
  const [expFormData, setExpFormData] = useState(expdata);
  const [expData, setExpData] = useState([]);

  return (
    <>
      <CvData
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
        //
        eduData={eduData}
        setEduData={setEduData}
        eduFormData={eduFormData}
        setEduFormData={setEduFormData}
        eduEditMode={eduEditMode}
        setEduEditMode={setEduEditMode}
        //
        expEditMode={expEditMode}
        setExpEditMode={setExpEditMode}
        expFormData={expFormData}
        setExpFormData={setExpFormData}
        expData={expData}
        setExpData={setExpData}
      />
      <CV />
    </>
  );
}
