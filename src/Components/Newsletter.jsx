import React from "react";

const Newsletter = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with email:", event.target.email.value);
    alert("Thank you for subscribing!");
    event.target.reset();
  };

  return (
    <div
      id="newsletter"
      className="w-full bg-gradient-to-r from-indigo-900/5 to-purple-900/5 py-16 sm:py-20"
    >
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-25">
        <div className="w-full mx-auto flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 sm:mb-6">
            Subscribe To Our Newsletter
          </h2>

          <p className="text-lg text-slate-600 mx-auto mb-8 sm:mb-10">
            Get exclusive insights and updates delivered directly to your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-xl mx-auto py-5"
          >
            <div className="w-full flex-grow">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full px-5 py-3.5 text-slate-700 bg-white rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all shadow-sm appearance-none"
                required
              />
            </div>

            <button
              type="submit"
              className="px-7 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg whitespace-nowrap w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>

          <p className="text-xs text-slate-500 mt-6 sm:mt-8">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
