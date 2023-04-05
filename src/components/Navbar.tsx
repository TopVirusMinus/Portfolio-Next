import { FaEnvelope, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 border-slate-200 w-full">
      <div className="flex items-center">
        {/* Mail */}
        <a href="mailto:youremail@example.com" className="mr-6">
          <FaEnvelope className="text-xl text-gray-700" />
        </a>

        {/* Logo */}
        <h1 className="text-sm ">mwmma5000@gmail.com</h1>
      </div>

      {/* Alien Emoji */}
      <Link href="/">
        <h1 className="items-center text-3xl cursor-pointer">👽</h1>
      </Link>
      <div className="flex items-center">
        {/* Social icons */}
        <a
          href="https://github.com/TopVirusMinus"
          className="mr-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-xl text-gray-100 hover:text-gray-900" />
        </a>
        <a
          href="https://www.linkedin.com/in/mustafa-walid-273b951a9/"
          className="mr-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-xl text-gray-100 hover:text-gray-900" />
        </a>
        <a
          href="https://www.youtube.com/channel/UC8giOecbRtB_szJMiVu_mAQ"
          className="mr-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="text-xl text-gray-100 hover:text-gray-900" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
