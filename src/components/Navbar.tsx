import { FaEnvelope, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 border-slate-200 w-full">
      <div className="flex items-center">
        {/* Mail */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="mailto:youremail@example.com"
          className="mr-6"
        >
          <FaEnvelope className="text-xl text-gray-700" />
        </motion.a>
        {/* Logo */}
        <h1 className="text-sm ">mwmma5000@gmail.com</h1>
      </div>
      {/* Alien Emoji */}
      <Link href="/">
        <motion.h1
          whileHover={{ scale: 1.1, rotate: 360 }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          className="items-center text-3xl cursor-pointer"
        >
          👽
        </motion.h1>
      </Link>
      <div className="flex items-center">
        {/* Social icons */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://github.com/TopVirusMinus"
          className="mr-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-xl text-gray-100 hover:text-gray-900" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://www.linkedin.com/in/mustafa-walid-273b951a9/"
          className="mr-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-xl text-gray-100 hover:text-gray-900" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://www.youtube.com/channel/UC8giOecbRtB_szJMiVu_mAQ"
          className="mr-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="text-xl text-gray-100 hover:text-gray-900" />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
