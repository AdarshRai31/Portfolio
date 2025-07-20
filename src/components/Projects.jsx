import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      image: "/payment.jpg", // Place your image in public/images/
      tools: "React, Tailwind, Mongodb, express-js",
      github: "https://github.com/AdarshRai31/Portfolio",
    },
    {
      title: "Project 2",
      image: "/payment.jpg",
      tools: "React, Tailwind, Mongodb, express-js",
      github: "https://github.com/AdarshRai31/Portfolio",
    },
    {
      title: "Project 3",
      image: "/payment.jpg",
      tools: "React, Tailwind, Mongodb, express-js",
      github: "https://github.com/AdarshRai31/Portfolio",
    },
  ];

  return (
    <div>
      <section
        name="projects"
        id="projects"
        className=" dark:bg-gray-900 py-16 bg-[#F7F9FC]"
      >
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-8 text-center">Projects</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 display-flex justify-center items-center">
            {projects.map((project, num) => (
              <div
                key={num}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm transform hover:scale-105 transition dark:bg-gray-800 dark:border-gray-700"
              >
                <a href={project.github}>
                  <img
                    class="rounded-t-lg"
                    src={project.image}
                    alt={project.title}
                  />
                </a>
                <div className="p-5">
                  <a href="https://github.com/AdarshRai31/Portfolio">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Project {num}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Brief tools used: {project.tools}
                  </p>
                  <a
                    href="https://github.com/AdarshRai31/Portfolio"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg  me-2 mb-2"
                  >
                    <FaGithub className="text-xl dark:hover:text-white pr-2" />
                    GitHub
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
