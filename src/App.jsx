import React, { useEffect } from "react";
import "./style.css"; // bg1, bg2, etc. + new animation

const sections = [
  { className: "bg1", title: "Hello Bhumi", showLoading: true, showWave: true },
  { className: "bg2", title: "Kese Ho !" },
  { className: "bg3", title: "Apke liye Surprise Hai " },
  { className: "bg4", title: "Mere Pass !" },
  { className: "bg5", title: "Lets Ready !" },
  { className: "bg6", title: "Love Birds...", showHeart: true },
];

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full scroll-smooth">
      {sections.map((section, index) => (
        <section
          key={index}
          className={`relative flex flex-col items-center justify-center min-h-screen bg-fixed bg-center bg-cover ${section.className}`}
        >
          <div className="text-center px-4">
            <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold px-6 py-4 rounded-2xl bg-black/40 backdrop-blur-md shadow-xl ring-1 ring-white/20 transition duration-500 ease-in-out">
              {section.title}
              {section.showWave && <span className="ml-2 animate-bounce">👋</span>}
              {section.showHeart && <span className="ml-2 animate-pulse">❤️</span>}
              {section.showLoading && (
                <span className="block text-lg sm:text-xl md:text-2xl mt-2 loading-wave">
                  Loading...
                </span>
              )}
            </h1>
          </div>
        </section>
      ))}
    </div>
  );
}

export default App;
