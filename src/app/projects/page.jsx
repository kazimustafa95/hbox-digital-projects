"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectTag from "../components/ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Full Stack React.js | Next.js web Application",
    description: "Avanar | All-in-one Finance App Boosting your Money, Life ...",
    image: "/images/nextjs/1.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.avanar.com/",
  },
  {
    id: 2,
    title: "Full Stack Solar Investment Tax Credits (ITCS) Application with custom CMS",
    description: "Trading of solar Investment Tax Credits (ITCS) and provide our clients with a seamless and secure experience.",
    image: "/images/php/1.png",
    tag: ["All", "Web" ,"PHP"],
    previewUrl: "https://www.claimyoursolarcredit.com/",
  },
  {
    id: 3,
    title: "NtSuites Office and Salon suite Rental Application",
    description: "E-commerce Application",
    image: "/images/wordpress/1.png",
    tag: ["All", "Wordpress"],
    previewUrl: "https://ntsuites.com/",
  },
  {
    id: 4,
    title: "software development Application",
    description: " software development consulting services for businesses.",
    image: "/images/projects/9.png",
    tag: ["All", "Next.js"],
    previewUrl: "https://fitcodding.netlify.app/",
  },
  {
    id: 5,
    title: "Full-stack Applicaton",
    description: "Next js CarHab full stack application",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    previewUrl: "https://carhub-coral.vercel.app/",
  },
  {
    id: 6,
    title: "Full-stack Applicaton",
    description: "Next js Movies full stack application",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    previewUrl: "https://nextjs-movies-web.vercel.app/",
  },
  {
    id: 7,
    title: "Full-stack Applicaton",
    description: "Trading of solar Investment Tax Credits (ITCS) and provide our clients with a seamless and secure experience.",
    image: "/images/projects/8.png",
    tag: ["All", "Web" ,"React.js"],
    previewUrl: "https://nextjs-movies-web.vercel.app/",
  },
  {
    id: 8,
    title: "Full-stack Applicaton",
    description: "Trading of solar Investment Tax Credits (ITCS) and provide our clients with a seamless and secure experience.",
    image: "/images/projects/8.png",
    tag: ["All", "Web" ,"PHP"],
    previewUrl: "https://nextjs-movies-web.vercel.app/",
  },
  {
    id: 9,
    title: "Full-stack Applicaton",
    description: "Trading of solar Investment Tax Credits (ITCS) and provide our clients with a seamless and secure experience.",
    image: "/images/projects/8.png",
    tag: ["All", "Web" ,"Wordpress"],
    previewUrl: "https://nextjs-movies-web.vercel.app/",
  },
 
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    
    <div id="projects" className="bg-black h-full  m-auto">
      <h2 className="text-center text-4xl font-bold text-white pt-10 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Next.js"
          isSelected={tag === "Next.js"}
        />
         <ProjectTag
          onClick={handleTagChange}
          name="React.js"
          isSelected={tag === "React.js"}
        />
         <ProjectTag
          onClick={handleTagChange}
          name="PHP"
          isSelected={tag === "PHP"}
        />
          <ProjectTag
          onClick={handleTagChange}
          name="Wordpress"
          isSelected={tag === "Wordpress"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-12 px-10">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsSection;