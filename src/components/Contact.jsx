export const Contact = () => {
  return (
    <div>
      <section
        name="contact"
        id="contact"
        className="bg-white dark:bg-gray-900 py-16"
      >
        <div className="container mx-auto md:max-w-3xl px-6 border border-gray-200 dark:border-white/30 p-6 shadow-2xl dark:bg-gray-800 rounded-lg">
          <h3 className="text-4xl font-bold mb-6 text-center">Contact</h3>
          <form className="max-w-2xl mx-auto space-y-4">
            <div className="grid md:grid-cols-2 gap-6 ">
              <div>
                <label
                  for="first_name"
                  className="block text-md mb-1 font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 transform hover:scale-105 transition border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  for="email"
                  className="block text-md mb-1 font-medium text-gray-900 dark:text-white"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 transform hover:scale-105 transition border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@company.com"
                  required
                />
              </div>
            </div>

            <label
              for="message"
              className="block text-md font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2 transform hover:scale-105 transition w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            >
            </textarea>
            <div className="flex justify-center">
                <button 
                  type="button" 
                  className="text-white transform hover:scale-105 transition bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    Submit
                </button>
            </div>
            
          </form>
        </div>
      </section>
    </div>
  );
};
