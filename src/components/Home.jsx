
export const Home = () => {
    return <div>
        <section name="home" id="home" className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20 text-center">
          <img
            src="/profile.jpeg"
            alt="Profile"
            className="w-48 h-48 object-cover bg-white rounded-full mx-auto mb-4 border-4 border-white"
          />
          <h2 className="text-3xl font-bold">Hi, I'm Adarsh Rai</h2>
          <p className="text-xl mt-2">I'm a &lt;Web Developer&gt;</p>
          <p className="mt-2 italic">Building the future</p>
          <a
            href="/resume.pdf"
            download
            className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-full hover:scale-105 transition"
          >
            Download Resume
          </a>
        </section>
    </div>
}