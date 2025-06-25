import React, { useMemo } from "react";

const Sports = () => {
  const articles = useMemo(
    () => [
      {
        title: "Olympic Committee Announces Breakthrough in Doping Detection",
        excerpt: "New AI-driven testing methods will be deployed for the upcoming games...",
        category: "Olympics",
        date: "April 12, 2024",
        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "James Wilson"
      },
      {
        title: "The Rise of eSports: Traditional Leagues Invest in Digital Arenas",
        excerpt: "NBA and Premier League teams acquire top eSports franchises as viewership surges...",
        category: "eSports",
        date: "April 11, 2024",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Sophie Martinez"
      },
      {
        title: "Biomechanics Revolutionize Athletic Training Programs",
        excerpt: "Real-time motion capture provides instant feedback to elite athletes...",
        category: "Science",
        date: "April 10, 2024",
        image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Dr. Robert Chen"
      },
      {
        title: "Sustainable Stadiums: The New Frontier in Sports Architecture",
        excerpt: "Carbon-neutral venues with renewable energy systems set new standards...",
        category: "Innovation",
        date: "April 9, 2024",
        image: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Emma Thompson"
      },
      {
        title: "Mental Health Takes Center Stage in Professional Athletics",
        excerpt: "Leagues implement mandatory wellness programs for all athletes...",
        category: "Wellness",
        date: "April 8, 2024",
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Dr. Lisa Reynolds"
      },
      {
        title: "The Data Revolution: How Analytics Are Changing Game Strategies",
        excerpt: "Teams leverage real-time statistics for in-game decision making...",
        category: "Analytics",
        date: "April 7, 2024",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Michael Zhang"
      }
    ],
    []
  );

  return (
    <div 
      id="sports" 
      className="min-h-screen bg-gray-50 py-8 sm:py-12 scroll-mt-19"
    >
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-25">
        <div className="pb-5 mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 text-start sm:text-left tracking-tight mb-2">
            Sports Dynamics
          </h1>
          <p className="mt-2 text-lg text-slate-600 text-start sm:text-left leading-relaxed">
            Where athleticism meets innovation and human potential
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article, index) => (
            <article 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  draggable="false"
                />
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white bg-emerald-600 px-2 py-1 rounded">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-semibold text-slate-800 mb-2 leading-tight">
                  {article.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  {article.excerpt}
                </p>
                
                <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                  <div>
                    <span className="text-xs text-slate-500 block">{article.date}</span>
                    <span className="text-xs text-slate-600 font-medium">By {article.author}</span>
                  </div>
                  <a 
                    href="#" 
                    className="text-xs font-medium text-emerald-600 hover:text-emerald-800 transition-colors group-hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sports;