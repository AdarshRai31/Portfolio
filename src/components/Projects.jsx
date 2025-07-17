
export const Projects = () => {
    const projects = [
    {
      title: "Project 1",
      image: "/payment.jpg", // Place your image in public/images/
      tools: "React, Tailwind, Mongodb, express-js",
      github: "#"
    },
    {
      title: "Project 2",
      image: "/payment.jpg",
      tools: "React, Tailwind, Mongodb, express-js",
      github: "#"
    },
    {
      title: "Project 3",
      image: "/payment.jpg",
      tools: "React, Tailwind, Mongodb, express-js",
      github: "#"
    }
  ];


    return <div>
        <section name="projects" id="projects" className="bg-gray-100 dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold mb-8 text-center">Projects</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {projects.map((project, num) => (
                <div
                  key={num}
                  className="relative bg-white dark:bg-white/10 backdrop-blur-md p-2 rounded shadow hover:shadow-xl transform hover:scale-105 transition group"
                >
                    <img
                    src={project.image}
                    alt={project.title}
                    className="h-49 w-full md:h-68 object-cover rounded mb-auto group-hover:opacity-10 transition"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition text-center">
                        <h4 className="font-semibold text-lg">Project {num}</h4>
                        <p className=" text-md  px-2">Brief tools used: {project.tools}</p>
                        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-md mt-1">GitHub</a>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </div>
}