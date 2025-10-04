import { PersonalDetails } from "./PersonalDetails";
import { Education } from "./Education";
import { Experience } from "./Experience";

export default function CvData({
  personalDetails,
  setPersonalDetails,
  eduData,
  setEduData,
  eduFormData,
  setEduFormData,
  eduEditMode,
  setEduEditMode,
  expEditMode,
  setExpEditMode,
  expFormData,
  setExpFormData,
  expData,
  setExpData,
}) {
  return (
    <div className="cvdata">
      <PersonalDetails
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
      />
      <Education
        eduData={eduData}
        setEduData={setEduData}
        eduFormData={eduFormData}
        setEduFormData={setEduFormData}
        eduEditMode={eduEditMode}
        setEduEditMode={setEduEditMode}
      />
      <Experience
        expEditMode={expEditMode}
        setExpEditMode={setExpEditMode}
        expFormData={expFormData}
        setExpFormData={setExpFormData}
        expData={expData}
        setExpData={setExpData}
      />
    </div>
  );
}
