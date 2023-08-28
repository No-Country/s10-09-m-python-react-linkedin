import { useParams } from "react-router-dom";
import logo from "../../assets/LOGOHorizontal.png";
import Footer from "../Footer";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
const Register: React.FC = () => {
  const { step } = useParams();

  return (
    <div>
      <div className=" pt-16 w-full flex flex-col md:flex-row justify-center items-center bg-[url('./assets/fondo1.png')] bg-no-repeat bg-cover ">
        {step === "step1" ? <Step1 /> : ""}
        {step === "step2" ? <Step2 /> : ""}
        {step === "step3" ? <Step3 /> : ""}
        {step === "step4" ? <Step4 /> : ""}
        <img src={logo} alt="image logo" />
      </div>
      <Footer />
    </div>
  );
};

export default Register;
