import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiFillHtml5, AiFillApi, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiReact } from "react-icons/di";
import { SiNodedotjs, SiFirebase } from "react-icons/si";
import Select from "react-select";

type Props = {};

const projects = [
  {
    title: "React Weather App",
    description:
      "A weather app built using React and the OpenWeather API. Users can search for weather conditions by city name and view temperature, wind speed, and humidity.",
    imageUrl: "http://source.unsplash.com/800x600/?weather",
    url: "https://github.com/yourusername/react-weather-app",
    techStack: ["React", "HTML", "CSS", "API"],
    category: "webdev",
  },
  {
    title: "Node.js Todo List",
    description:
      "A simple todo list application built using Node.js and Express. Users can add, edit, and delete tasks, and the data is stored in a MongoDB database.",
    imageUrl: "http://source.unsplash.com/800x600/?tasks",
    url: "https://github.com/yourusername/node-todo-list",
    techStack: ["Node.js", "Express", "MongoDB"],
    category: "webdev",
  },
  {
    title: "React Native Chat App",
    description:
      "A mobile chat application built using React Native and Firebase. Users can sign in with their Google account, create new chat rooms, and send messages in real-time.",
    imageUrl: "http://source.unsplash.com/800x600/?chat",
    url: "https://github.com/yourusername/react-native-chat-app",
    techStack: ["React Native", "Firebase"],
    category: "animation",
  },
  {
    title: "React Native Chat App",
    description:
      "A mobile chat application built using React Native and Firebase. Users can sign in with their Google account, create new chat rooms, and send messages in real-time.",
    imageUrl: "http://source.unsplash.com/800x600/?chat",
    url: "https://github.com/yourusername/react-native-chat-app",
    techStack: ["React Native", "Firebase"],
    category: "animation",
  },
  {
    title: "React Native Chat App",
    description:
      "A mobile chat application built using React Native and Firebase. Users can sign in with their Google account, create new chat rooms, and send messages in real-time.",
    imageUrl: "http://source.unsplash.com/800x600/?chat",
    url: "https://github.com/yourusername/react-native-chat-app",
    techStack: ["React Native", "Firebase"],
    category: "animation",
  },
  {
    title: "React Native Chat App",
    description:
      "A mobile chat application built using React Native and Firebase. Users can sign in with their Google account, create new chat rooms, and send messages in real-time.",
    imageUrl: "http://source.unsplash.com/800x600/?chat",
    url: "https://github.com/yourusername/react-native-chat-app",
    techStack: ["React Native", "Firebase"],
    category: "animation",
  },
  {
    title: "React Native Chat App",
    description:
      "A mobile chat application built using React Native and Firebase. Users can sign in with their Google account, create new chat rooms, and send messages in real-time.",
    imageUrl: "http://source.unsplash.com/800x600/?chat",
    url: "https://github.com/yourusername/react-native-chat-app",
    techStack: ["React Native", "Firebase"],
    category: "animation",
  },
  {
    title: "React Native Chat App",
    description:
      "A mobile chat application built using React Native and Firebase. Users can sign in with their Google account, create new chat rooms, and send messages in real-time.",
    imageUrl: "http://source.unsplash.com/800x600/?chat",
    url: "https://github.com/yourusername/react-native-chat-app",
    techStack: ["React Native", "Firebase"],
    category: "animation",
  },
];

const getIconByTech = (tech: string) => {
  switch (tech) {
    case "React":
      return <DiReact />;
    case "HTML":
      return <AiFillHtml5 />;
    case "CSS":
      return <DiCss3 />;
    case "API":
      return <AiFillApi />;
    case "Node.js":
      return <SiNodedotjs />;
    case "Express":
      return <SiNodedotjs />;
    case "MongoDB":
      return <SiNodedotjs />;
    case "Firebase":
      return <SiFirebase />;
    default:
      return null;
  }
};

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("webdev");
  const filteredProjects = projects.filter((project) => {
    return selectedCategory === "all" || project.category === selectedCategory;
  });

  const options = [
    { label: "All Projects", value: "all" },
    { label: "Web Development", value: "webdev" },
    { label: "Animation", value: "animation" },
  ];

  return (
    <motion.div
      className="mt-10 flex flex-col items-center w-full mx-auto"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Select
        options={options}
        value={options.find((option) => option.value === selectedCategory)}
        onChange={(option: any) => setSelectedCategory(option.value)}
        className="w-full max-w-sm text-slate-900 mb-8"
        styles={{
          control: (provided) => ({
            ...provided,
            boxShadow: "none",
          }),
        }}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: "#333",
            primary25: "#aaa",
            primary50: "#aaa",
            primary75: "#aaa",
          },
        })}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project, index) => (
          <div
            className="relative bg-white rounded-lg shadow-lg overflow-hidden"
            key={index}
          >
            <Image
              className="w-full h-56 object-cover object-center"
              src={project.imageUrl}
              alt={project.title}
              width={800}
              height={600}
            />
            <div className="absolute inset-0 bg-gray-900 opacity-0 hover:opacity-80 transition-opacity duration-300">
              <div className="flex items-center justify-center h-full">
                <a
                  href={project.url}
                  className="text-white text-lg font-bold hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            </div>
            <div className="p-4">
              <h2 className="font-bold text-xl text-black mb-2">
                {project.title}
              </h2>
              <p className="text-gray-700 leading-tight">
                {project.description}
              </p>
              <div className="flex mt-4">
                {project.techStack.map((tech, index) => (
                  <div
                    className="flex items-center justify-center bg-gray-200 text-gray-800 rounded-full w-8 h-8 mr-2"
                    key={index}
                  >
                    {getIconByTech(tech)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;
