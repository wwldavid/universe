import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/images/logo.png";

function Welcome() {
  return (
    <div className="flex flex-col items-center justify-between h-screen bg-[#5A3E9C] overflow-hidden">
      {/* Header section with logo and tagline */}
      <div className="flex flex-col items-center justify-between">
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img src={logo} alt="Logo" className="w-56 h-auto drop-shadow-lg" />
        </motion.div>

        <motion.div
          className="mt-8 text-4xl font-semibold text-center italic"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="text-[#c3d825]">Make the</p>
          <p className="text-[#c3d825]">first move</p>
        </motion.div>
      </div>

      {/* Buttons and info section */}
      <motion.div
        className="flex flex-col items-center gap-8 mb-12 w-full px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.6 }}
      >
        <div className="flex flex-col gap-4 w-full max-w-xs">
          <a
            href="https://www.figma.com/proto/4wYsRjUyMtqiQefOZjacCq/Mockups---Design-Studio-1?page-id=988%3A1781&node-id=1482-813&viewport=558%2C-870%2C0.21&t=GsHxB01ojY8G79af-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1070%3A3756&show-proto-sidebar=1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl border border-purple-300 text-purple-100 font-medium tracking-wide bg-purple-700 hover:border-[#cee4ae] hover:shadow-lg text-center"
          >
            View Our Design
          </a>

          <Link
            to="/home"
            className="w-full py-3 rounded-xl border border-purple-00 text-purple-100 font-medium tracking-wide transition-all hover:bg-purple-700 hover:border-[#cee4ae] hover:shadow-lg text-center"
          >
            Explore Events as a Guest
          </Link>

          <button className="w-full py-3 rounded-xl border border-purple-300 text-purple-100 font-medium tracking-wide transition-all hover:bg-purple-700 hover:border-[#cee4ae] hover:shadow-lg">
            Sign In
          </button>

          <button className="w-full py-3 rounded-xl border border-purple-300 text-purple-100 font-medium tracking-wide transition-all hover:bg-purple-700 hover:border-[#cee4ae] hover:shadow-lg">
            Sign Up
          </button>
        </div>

        <motion.div
          className="px-4 text-center text-xs text-purple-200 opacity-80 max-w-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.4 }}
        >
          <p>
            By signing up, you agree to our Terms. See how we use your data in
            our Privacy Policy. We never post to Facebook.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Welcome;
