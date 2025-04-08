import React, { useEffect } from 'react';
import '../assets/css/Home.css';

function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const content = [
    'Welcome to Parallax',
    'Explore the View',
    'Scroll for Magic',
    'Feel the Depth',
    'Parallax in Action',
    'Thanks for Visiting'
  ];

  return (
    <>
      {content.map((text, index) => (
        <div
          key={index}
          className={`section section-${index + 1} flex items-center shadow-lg font-extrabold justify-center text-white text-5xl font-serif  text-center px-4`}
        >
          <h1 >{text}</h1>
        </div>
      ))}
    </>
  );
}

export default Home;
