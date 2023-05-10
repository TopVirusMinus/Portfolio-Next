import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
const splitToSpans = (text: string, className: string) => {
  const textArray = text.split("");

  return textArray.map((char, index) => {
    if (char === " ") {
      return <span key={index}>&nbsp;</span>;
    }

    const initialX = Math.random() * 1000 - 500; // random x position between -500 and 500
    const initialY = Math.random() * 1000 - 500; // random y position between -500 and 500

    return (
      <motion.span
        key={index}
        className={className}
        initial={{ x: initialX, y: initialY, opacity: 0 }} // initial position and hidden
        animate={{ x: 0, y: 0, opacity: 1 }} // animate to origin and show
        whileHover={{ scale: 1.3, color: "#32CD32" }} // Cool hover effect
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 100,
          delay: index * 0.05, // delay based on index to unscramble one character at a time
        }}
      >
        {char}
      </motion.span>
    );
  });
};


  const name = "Mustafa Marzouk";
  const jobTitle = "Frontend Engineer & Manim Animator";

  const nameSpans = splitToSpans(name, "hover-effect");
  const jobTitleSpans = splitToSpans(jobTitle, "hover-effect");

  return (
    <>
      <Head>
        <title>Mustafa 👽 Marzouk</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center h-screen-80 w-full mx-auto"
      >
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 md:space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-48 h-48 md:w-60 md:h-60 mb-6 rounded-full overflow-hidden">
            <Image
              alt="img"
              src="/profile.png"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-2">{nameSpans}</h2>
          <p className="text-xl md:text-2xl font-semibold">{jobTitleSpans}</p>
          <div className="flex space-x-2 md:space-x-4">
            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-gray-700 text-white px-3 py-1 md:px-4 md:py-2 rounded-md "
              >
                Portfolio
              </motion.button>
            </Link>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1BUW8DSMN6Y6LjppqQHURY36GFl1bBmzC/view?usp=share_link"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-indigo-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-md"
              >
                Resume
              </motion.button>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
