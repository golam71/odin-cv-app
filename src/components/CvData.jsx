import { PersonalDetails } from "./PersonalDetails";
import { Education } from "./Education";
import { Experience } from "./Experience";

export default function CvData() {
  return (
    <div className="cvdata">
      <PersonalDetails />
      <Education />
      <Experience />
    </div>
  );
}
