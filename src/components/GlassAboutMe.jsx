// The main BubbleGlassCard component
export const GlassAboutMe = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
  ];

  const skillColumns = [];
  for (let i = 0; i < skills.length; i += 3) {
    skillColumns.push(skills.slice(i, i + 3));
  }
  return (
    <section name="about" id="about" className="py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 text-center dark:bg-white/10 backdrop-blur-md shadow-lg border border-gray-200 dark:border-white/30 p-6 rounded-xl transform hover:scale-105 transition">
          {/* Decorative Bubbles */}
          <div className="absolute -top-10 -left-10 h-32 w-32 animate-blob rounded-full bg-purple-500 opacity-30 mix-blend-color-dodge blur-2xl filter"></div>
          <div className="animation-delay-2000 absolute -bottom-8 -right-4 h-40 w-40 animate-blob rounded-full bg-blue-400 opacity-30 mix-blend-color-dodge blur-2xl filter"></div>
          <div className="animation-delay-4000 absolute -bottom-8 -left-20 h-28 w-28 animate-blob rounded-full bg-pink-400 opacity-30 mix-blend-color-dodge blur-2xl filter"></div>

          {/* Card Content */}
          <div className="relative z-10 flex flex-col items-middle">
            <h3 className="text-4xl font-bold mb-4">About Me</h3>
            <p className="mb-4">
              I learn introduction to web development, a passion for creating
              interactive experiences while constantly striving toward career
              growth.
            </p>
            <p className="mb-4">
              I'm a passionate and dedicated developer with a strong foundation
              in web technologies and a keen eye for design. I enjoy building
              clean, responsive, and user-friendly applications that solve
              real-world problems. With a growth mindset and curiosity for
              learning, I’m always exploring new tools and best practices to
              improve both my code and user experience.
            </p>
            <p>
              My passion for career growth in web development and solving
              meaningful problems.
            </p>
          </div>
        </div>
        <div>
          <div className=" dark:bg-white/10 backdrop-blur-md shadow-xl px-4 py-2 mb-6 rounded border border-gray-200 dark:border-white/30 transform hover:scale-105 transition">
          <div className="absolute -top-10 -left-10 h-32 w-32 animate-blob rounded-full bg-purple-500 opacity-30 mix-blend-color-dodge blur-2xl filter"></div>
          <div className="animation-delay-2000 absolute -bottom-8 -right-4 h-40 w-40 animate-blob rounded-full bg-blue-400 opacity-30 mix-blend-color-dodge blur-2xl filter"></div>
          <div className="animation-delay-4000 absolute -bottom-8 -left-20 h-28 w-28 animate-blob rounded-full bg-pink-400 opacity-30 mix-blend-color-dodge blur-2xl filter"></div>

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
          <div className="absolute -top-10 -left-10 h-32 w-32 animate-blob rounded-full bg-purple-500 opacity-30 mix-blend-color-dodge blur-2xl filter"></div>
          <div className="animation-delay-2000 absolute -bottom-8 -right-4 h-40 w-40 animate-blob rounded-full bg-blue-400 opacity-30 mix-blend-color-dodge blur-2xl filter"></div>
          <div className="animation-delay-4000 absolute -bottom-8 -left-20 h-28 w-28 animate-blob rounded-full bg-pink-400 opacity-30 mix-blend-color-dodge blur-2xl filter"></div>

            <h4 className="font-semibold mb-2 text-4xl">Education</h4>
            <div className="">
              <p>
                G.L. Bajaj Institue of Technology and Management <br />
                2022–continue
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};