
export const AboutMe = () => {
    const skills = [
        "HTML", "CSS", "JavaScript",
        "React", "Tailwind CSS", "Node.js", "MongoDB"
    ];

    const skillColumns = [];
    for (let i = 0; i < skills.length; i += 3) {
        skillColumns.push(skills.slice(i, i + 3));
    }

    return <div>
        <section name="about" id="about" className="py-16 bg-[#F7F9FC] dark:bg-gray-900">
          <div className="container  mx-auto px-4 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 text-center bg-white dark:bg-white/10 backdrop-blur-md shadow-lg border border-gray-200 dark:border-white/30 p-6 rounded-xl transform hover:scale-105 transition">
              <h3 className="text-4xl font-bold mb-4">About Me</h3>
              <p className="mb-4">
                I learn introduction to web development, a passion for creating interactive experiences while
                constantly striving toward career growth.
              </p>
              <p className="mb-4">
                I’m a passionate and dedicated developer with a strong foundation in web technologies and a keen eye for design. I enjoy building clean, responsive, and user-friendly applications that solve real-world problems. With a growth mindset and curiosity for learning, I’m always exploring new tools and best practices to improve both my code and user experience.
              </p>
              <p>
                My passion for career growth in web development and solving meaningful problems.
              </p>
            </div>
            <div>
              <div className=" dark:bg-white/10 backdrop-blur-md shadow-xl px-4 py-2 mb-6 rounded border border-gray-200 dark:border-white/30 transform hover:scale-105 transition">
                <h4 className="font-semibold mb-2 text-4xl">Skills</h4>
                <div className="grid grid-cols-2">
                                {skillColumns.map((col, idx) => (
                                    <ul key={idx} className="list-disc list-inside">
                                        {col.map((skill, i) => (
                                            <li key={i}>{skill}</li>
                                        ))}
                                    </ul>
                                ))}
                            </div>
                
              </div>
              <div className=" dark:bg-white/10 backdrop-blur-md shadow-xl px-4 py-2 rounded border border-gray-200 dark:border-white/30 transform hover:scale-105 transition">
                <h4 className="font-semibold mb-2 text-4xl">Education</h4>
                <div className="">
                  <p>G.L. Bajaj Institue of Technology and Management <br />2023–continue</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
}