import React, { useMemo } from "react";

const World = () => {
  const articles = useMemo(
    () => [
      {
        title: "Global Climate Summit Reaches Historic Agreement",
        excerpt:
          "Nations unite to accelerate emissions reductions with new binding targets...",
        category: "Climate Policy",
        date: "March 15, 2024",
        image:
          "https://images.unsplash.com/photo-1552799446-159ba9523315?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Breakthrough in Renewable Energy Storage",
        excerpt:
          "New battery technology promises to revolutionize solar energy storage...",
        category: "Energy",
        date: "March 14, 2024",
        image:
          "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D",
      },
      {
        title: "UN Report Warns of Accelerating Biodiversity Loss",
        excerpt:
          "Latest assessment shows 1 million species at risk of extinction...",
        category: "Ecology",
        date: "March 13, 2024",
        image:
          "https://images.unsplash.com/photo-1605464574145-6971d5254afe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Advancements in Global Water Purification Tech",
        excerpt:
          "Innovative filters provide clean drinking water to remote communities...",
        category: "Technology",
        date: "March 12, 2024",
        image:
          "https://images.unsplash.com/photo-1617155093730-a8bf47be792d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Space Exploration: New Frontiers Unveiled",
        excerpt:
          "Recent missions shed light on distant galaxies and planetary formation...",
        category: "Space",
        date: "March 11, 2024",
        image:
          "https://images.unsplash.com/photo-1654263391025-4c4809a37f5c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    []
  );

  return (
    <div id="world" className="h-auto bg-slate-100 py-8 sm:py-12 scroll-mt-19">
      <div className="w-full mx-auto pb-5 px-4 sm:px-8 lg:px-25 mb-8 sm:mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 text-start sm:text-left">
          World News
        </h1>
        <p className="mt-2 text-lg text-slate-600 text-start sm:text-left">
          Latest global developments and analysis
        </p>
      </div>

      <div className="w-full mx-auto px-4 sm:px-8 lg:px-25">
        <div className="flex gap-15 overflow-x-auto space-x-4 sm:space-x-6 py-4 px-1 hide-scrollbar">
          {articles.map((article, index) => (
            <article
              key={index}
              className="flex-shrink-0 w-full sm:w-72 md:w-80 rounded-xl shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
                draggable="false"
              />
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wide text-purple-600">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-500">{article.date}</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900 leading-tight">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-700 mb-4 flex-grow">
                  {article.excerpt}
                </p>
                <button className="mt-auto self-start text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors duration-200">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default World;
