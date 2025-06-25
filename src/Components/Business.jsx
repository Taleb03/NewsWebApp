import React, { useMemo } from "react";

const Business = () => {
  const articles = useMemo(
    () => [
      {
        title: "The Ethical Imperative of AI in Business Decision-Making",
        excerpt:
          "As AI algorithms increasingly influence corporate strategies, the ethical considerations and potential biases demand careful scrutiny and proactive governance.",
        category: "Ethics & Governance",
        date: "April 8, 2024",
        image:
          "https://images.unsplash.com/photo-1558889381-5955bd6d1bc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Dr. Eleanor Vance",
      },
      {
        title: "Redefining Value: The Rise of Purpose-Driven Corporations",
        excerpt:
          "Beyond profit, companies are now being evaluated on their societal impact and commitment to sustainability, reshaping investor and consumer expectations.",
        category: "Corporate Social Responsibility",
        date: "April 7, 2024",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Marcus Bellwether",
      },
      {
        title: "Navigating the Metaverse: Opportunities for Business Expansion",
        excerpt:
          "The metaverse presents a new frontier for brands to engage with customers, create immersive experiences, and explore innovative revenue streams.",
        category: "Digital Transformation",
        date: "April 6, 2024",
        image:
          "https://images.unsplash.com/photo-1644325349124-d1756b79dd42?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Aisha Khan",
      },
      {
        title:
          "The Talent Economy: Attracting and Retaining Top Skills in 2024",
        excerpt:
          "In a competitive job market, businesses must adopt agile talent strategies, focusing on culture, development, and employee well-being to thrive.",
        category: "Human Resources",
        date: "April 5, 2024",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Samuel Green",
      },
    ],
    []
  );

  return (
    <div
      id="business"
      className="min-h-screen bg-slate-100 sm:py-12 scroll-mt-19"
    >
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-25">
        <div className="mb-12 pb-5 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 text-start sm:text-left tracking-tight mb-2">
            Business Narratives
          </h1>
          <p className="mt-2 text-lg text-slate-600 text-start sm:text-left leading-relaxed">
            In-depth perspectives on the forces shaping modern commerce.
          </p>
        </div>

        <div className="xl:flex xl:gap-10">
          <div className="w-full">
            <div className="space-y-12 md:space-y-16 flex flex-col">
              {articles.map((article, index) => (
                <article
                  key={index}
                  className="group flex flex-col sm:flex-row items-start gap-6 sm:gap-8 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-full sm:w-1/3 lg:w-1/4 flex-shrink-0">
                    <a href="#" className="block overflow-hidden rounded-lg">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-auto object-cover aspect-[4/3] sm:aspect-square transition-transform duration-300 ease-in-out group-hover:scale-105"
                        draggable="false"
                      />
                    </a>
                  </div>

                  <div className="flex-grow flex flex-col justify-center h-full gap-4 py-1 sm:py-2">
                    <div className="space-y-2">
                      <div>
                        <span className="text-xs font-medium uppercase tracking-wider text-purple-600">
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 leading-snug">
                        <a
                          href="#"
                          className="hover:text-purple-700 transition-colors duration-200"
                        >
                          {article.title}
                        </a>
                      </h3>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs text-slate-500 flex items-center gap-1.5">
                        <span>By {article.author}</span>
                        <span className="mx-2">·</span>
                        <span>{article.date}</span>
                      </div>

                      <a
                        href="#"
                        className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors duration-200"
                      >
                        Read Article
                        <span className="ml-1.5 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <aside className="hidden xl:block w-full max-w-xs flex-shrink-0">
            <div className="sticky top-25 rounded-xl shadow-lg p-6">
              <h2 className="text-lg font-semibold text-slate-800 mb-4 border-b pb-2">
                Top News
              </h2>
              <ul className="space-y-4">
                {[
                  "AI Disrupts Traditional Retail Models",
                  "ESG Metrics Drive Investor Strategy",
                  "Tech Startups Embrace Hybrid Work Models",
                  "Blockchain in Supply Chain Gains Traction",
                ].map((headline, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-sm text-purple-700 hover:text-purple-900 transition-colors"
                    >
                      {headline}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Business;
