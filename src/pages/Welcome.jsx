import { Link } from "react-router-dom";
import logo from "@/assets/images/logo.png";

function Welcome() {
  return (
    <div className="flex flex-col items-center justify-between h-screen bg-white">
      <div className="flex flex-col items-center justify-between">
        <div className="mt-40">
          <img src={logo} alt="Logo" className="w-44 h-auto" />
        </div>

        <div className="text-5xl font-extrabold text-green-100 text-center skew-x-[-10deg] drop-shadow-[3px_3px_10px_rgba(0,0,0,1)]">
          <p>Make the</p>
          <p>first move</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-10 mb-10">
        <div className="flex flex-col gap-3">
          <button className="w-80 h-10 rounded-lg border border-[#5A3E9C]  text-[#5A3E9C] text-lg hover:bg-[#5A3E9C]">
            <a
              href="https://www.figma.com/proto/4wYsRjUyMtqiQefOZjacCq/Mockups---Design-Studio-1?page-id=988%3A1781&node-id=1482-813&viewport=558%2C-870%2C0.21&t=GsHxB01ojY8G79af-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1070%3A3756&show-proto-sidebar=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to our design
            </a>
          </button>
          <button className="w-80 h-10 rounded-lg border border-[#5A3E9C] text-[#5A3E9C] text-lg hover:bg-[#5A3E9C]">
            Sign Up
          </button>
          <Link
            to="/home"
            className="w-80 h-10 rounded-lg bg-[#5A3E9C] text-white text-lg text-center leading-10 hover:bg-[#c1d8ac]"
          >
            Explore Events as a Guest
          </Link>
        </div>
        <div className="px-8 text-center text-sm text-gray-700">
          <p>
            By signing up, you agree to our Terms. See how we use your data in
            our Privacy Policy. We never post to Facebook.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
