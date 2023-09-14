import { useParams } from "react-router-dom";
import logo from "../../assets/logominimo.svg";
import Footer from "../Footer/Footer";
import Stepper from "../Stepper";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

// million-ignore
const Register: React.FC = () => {
  const { step = "" } = useParams();
  console.log(step);

  return (
    <div>
      <div className="absolute top-5 left-0 right-0">
        <Stepper step={step} width="" />
      </div>

      <div className=" pt-16 w-full flex md:flex-row flex-col  justify-center items-center  bg-no-repeat bg-cover ">
        {step === "step1" ? (
          <>
            <Step1 />
          </>
        ) : (
          ""
        )}
        {step === "step2" ? (
          <>
            <Step2 />
          </>
        ) : (
          ""
        )}
        {step === "step3" ? (
          <>
            <Step3 />
          </>
        ) : (
          ""
        )}
        {step === "step4" ? (
          <>
            <Step4 />
          </>
        ) : (
          ""
        )}

        <div className="grid justify-items-center content-center">
          <img
            src={logo}
            alt="image logo"
            className={`w-1/2 md:justify-end ${
              step === "step2" ? "ml-36" : ""
            } md:items-end md:mr-32 m-8 hidden md:flex`}
          />
        </div>
      </div>
      <div className={`hidden mt-10 md:block `}>
        <Footer />
      </div>
    </div>
  );
};

export default Register;
