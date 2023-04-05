import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const splitToSpans = (text: string, className: string) => {
    return text.split("").map((char, index) =>
      char === " " ? (
        <span key={index}>&nbsp;</span>
      ) : (
        <span key={index} className={className}>
          {char}
        </span>
      )
    );
  };
  const name = "Mustafa Marzouk";
  const jobTitle = "Frontend Engineer & Manim Animator";

  const nameSpans = splitToSpans(name, "hover-effect");
  const jobTitleSpans = splitToSpans(jobTitle, "hover-effect");

  return (
    <>
      <Head>
        <title>Mustafa Marzouk 👽</title>
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
        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6  ">
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
              <button className="bg-gray-700 text-white px-3 py-1 md:px-4 md:py-2 rounded-md ">
                Portfolio
              </button>
            </Link>
            <button className="bg-indigo-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-md">
              Hire Me
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
