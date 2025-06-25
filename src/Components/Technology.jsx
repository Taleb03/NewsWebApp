import React, { useMemo } from "react";

const Technology = () => {
  const articles = useMemo(
    () => [
      {
        title:
          "Quantum Entanglement Achieves Record Distance, Paving Way for Unhackable Internet",
        excerpt:
          "Researchers have successfully entangled quantum particles over hundreds of kilometers, a critical step towards building a global quantum internet with inherently secure communication.",
        category: "Quantum Computing",
        date: "April 10, 2024",
        image:
          "https://images.unsplash.com/photo-1666112835145-d79fc3f2e008?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Dr. Anya Sharma",
        isFeatured: true,
      },
      {
        title: "AI-Powered Drug Discovery Accelerates New Cancer Treatments",
        excerpt:
          "Machine learning algorithms are now sifting through vast biological datasets to identify potential drug candidates at an unprecedented speed.",
        category: "AI & Healthcare",
        date: "April 9, 2024",
        image:
          "https://images.unsplash.com/photo-1569396116180-210c182bedb8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Kenji Tanaka",
      },
      {
        title:
          "Next-Gen Wearables: Beyond Fitness Tracking to Real-time Health Monitoring",
        excerpt:
          "New sensor technology in wearable devices promises continuous, clinical-grade monitoring of vital signs, potentially revolutionizing preventative healthcare.",
        category: "Wearable Tech",
        date: "April 8, 2024",
        image:
          "https://images.unsplash.com/photo-1733570890170-49be2550189b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Maria Rossi",
      },
      {
        title:
          "The Race for Sustainable Batteries: Innovations in Energy Storage",
        excerpt:
          "As demand for electric vehicles and renewable energy soars, scientists are exploring new materials and designs for longer-lasting, eco-friendly batteries.",
        category: "Energy Tech",
        date: "April 7, 2024",
        image:
          "https://images.unsplash.com/photo-1639195046198-a73b6d2d9606?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Chinedu Okoro",
      },
    ],
    []
  );

  const featuredArticle = articles.find((article) => article.isFeatured);
  const regularArticles = articles.filter((article) => !article.isFeatured);

  return (
    <div
      id="technology"
      className="min-h-screen bg-gray-50 py-8 sm:py-12 scroll-mt-19"
    >
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-25">
        <div className="pb-5 mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 text-start sm:text-left tracking-tight mb-2">
            Tech Frontiers
          </h1>
          <p className="mt-2 text-lg text-slate-600 text-start sm:text-left leading-relaxed">
            Exploring the innovations and breakthroughs shaping our digital
            future.
          </p>
        </div>

        {featuredArticle && (
          <section className="mb-10 sm:mb-12 group py-5">
            <a href="#" className="block">
              <div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-5 sm:p-6 md:p-8 w-full">
                  <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 bg-white/10 backdrop-blur-sm px-2 py-0.5 rounded mb-1.5 inline-block">
                    {featuredArticle.category}
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight mb-1.5">
                    {featuredArticle.title}
                  </h2>
                  <p className="hidden sm:block text-sm md:text-base text-white/80 mb-2 leading-relaxed max-w-3xl">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="text-xs pt-4 text-white/70 flex items-center gap-x-2">
                    <span>By {featuredArticle.author}</span>
                    <span>·</span>
                    <span>{featuredArticle.date}</span>
                  </div>
                </div>
              </div>
            </a>
          </section>
        )}

        {regularArticles.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {regularArticles.map((article) => (
              <article
                key={article.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-md"
              >
                <a href="#" className="block overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-44 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    draggable="false"
                  />
                </a>
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <div className="mb-1.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="mb-2 text-md sm:text-lg font-semibold text-slate-800 leading-tight">
                    <a
                      href="#"
                      className="hover:text-sky-700 transition-colors"
                    >
                      {article.title}
                    </a>
                  </h3>
                  <p className="text-slate-700 text-xs sm:text-sm mb-3 flex-grow leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto flex justify-between items-center text-xs text-slate-500 pt-2 border-t border-slate-100">
                    <span>{article.date}</span>
                    <a
                      href="#"
                      className="font-medium text-sky-600 hover:text-sky-700 transition-colors text-xs group-hover:underline"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Technology;
