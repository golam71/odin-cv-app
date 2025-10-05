import CvData from "./components/CvData";
import CV from "./components/CV";
import { useState } from "react";

export default function App() {
  // // personal
  // const [personalDetails, setPersonalDetails] = useState({
  //   "Full Name": "",
  //   Email: "",
  //   Address: "",
  //   "Phone Number": "",
  // });

  // // education
  // let educationdata = {
  //   Name: "",
  //   Degree: "",
  //   "Start Time": "",
  //   "End Time": "",
  //   Location: "",
  // };
  // const [eduData, setEduData] = useState([]);
  // const [eduFormData, setEduFormData] = useState({ ...educationdata });
  // const [eduEditMode, setEduEditMode] = useState(false);

  // // experience
  // let expdata = {
  //   "Company Name": "",
  //   "Position Title": "",
  //   "Start Date": "",
  //   "End Date": "",
  //   Location: "",
  //   Description: "",
  // };
  // const [expEditMode, setExpEditMode] = useState(false);
  // const [expFormData, setExpFormData] = useState(expdata);
  // const [expData, setExpData] = useState([]);

  // personal
  const [personalDetails, setPersonalDetails] = useState({
    "Full Name": "Johnathan R. Miller",
    Email: "john.miller@example.com",
    Address: "42 Greenfield Ave, Boston, MA, USA",
    "Phone Number": "+1 617-555-9842",
  });

  // education
  let educationdata = {
    Name: "",
    Degree: "",
    "Start Time": "",
    "End Time": "",
    Location: "",
  };
  const [eduData, setEduData] = useState([
    {
      Name: "Massachusetts Institute of Technology (MIT)",
      Degree: "Bachelor of Science in Computer Science",
      "Start Time": "2014",
      "End Time": "2018",
      Location: "Cambridge, MA",
    },
    {
      Name: "Boston University",
      Degree: "Master of Science in Software Engineering",
      "Start Time": "2019",
      "End Time": "2021",
      Location: "Boston, MA",
    },
    {
      Name: "Harvard Extension School",
      Degree: "Certificate in Data Science",
      "Start Time": "2022",
      "End Time": "2023",
      Location: "Cambridge, MA",
    },
    {
      Name: "Stanford Online",
      Degree: "Advanced React & Frontend Development",
      "Start Time": "2023",
      "End Time": "2024",
      Location: "Online",
    },
  ]);
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
  const [expData, setExpData] = useState([
    {
      "Company Name": "Innovatech Solutions",
      "Position Title": "Frontend Developer",
      "Start Date": "Jun 2021",
      "End Date": "Present",
      Location: "New York, NY",
      Description:
        "Led development of interactive UI components using React, TypeScript, and Tailwind. Collaborated with backend team to optimize API integrations.",
    },
    {
      "Company Name": "Digital Forge",
      "Position Title": "Junior Web Developer",
      "Start Date": "Jul 2018",
      "End Date": "May 2021",
      Location: "Boston, MA",
      Description:
        "Built responsive websites for clients using HTML, CSS, and JavaScript. Assisted in migrating legacy systems to React-based frontends.",
    },
    {
      "Company Name": "NextGen Labs",
      "Position Title": "Software Engineering Intern",
      "Start Date": "Jan 2017",
      "End Date": "Dec 2017",
      Location: "Cambridge, MA",
      Description:
        "Supported backend development with Node.js and MongoDB, conducted code reviews, and contributed to project documentation.",
    },
    {
      "Company Name": "Freelance / Personal Projects",
      "Position Title": "Full Stack Developer",
      "Start Date": "2016",
      "End Date": "Present",
      Location: "Remote",
      Description:
        "Developed and deployed multiple personal and client web applications using React, Node.js, and PostgreSQL. Focused on responsive and accessible design.",
    },
  ]);
  const [expFormData, setExpFormData] = useState({ ...expdata });
  const [expEditMode, setExpEditMode] = useState(false);

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
        expData={expData}
        setExpData={setExpData}
        expFormData={expFormData}
        setExpFormData={setExpFormData}
        expEditMode={expEditMode}
        setExpEditMode={setExpEditMode}
      />
      <CV
        personalDetails={personalDetails}
        eduData={eduData}
        expData={expData}
      />
    </>
  );
}
