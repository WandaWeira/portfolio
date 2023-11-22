import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="w-full md:pl-16 mt-28 mb-5 flex justify-between">
      <div className="flex flex-col">
        <h1 className="text-2xl font-medium my-4">Call me:</h1>
        <p className="text-2xl font-medium">+256773599715</p>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-medium my-4">Email:</h1>
        <p className="text-2xl font-medium">rashiidahweira@gmail.com</p>
      </div>
      <div className="flex mt-4 md:mt-0 gap-4">
        <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
        <CiLinkedin className="w-5 h-5 md:w-6 md:h-6" />
      </div>
    </div>
  );
};

export default Footer;
