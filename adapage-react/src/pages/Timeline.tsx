import { TimeLineItem } from "../components/TimelineItem";
import { timelineData } from "../data";
import '../App.css'
import { Link } from "react-router";
import { useEffect } from "react";


export default function Timeline() {
  useEffect(() => {
    // Intersection Observer para el efecto fade-in
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1, // Se activa cuando el 10% del elemento es visible
        rootMargin: '0px 0px -50px 0px' // Pequeño offset para mejor timing
      }
    );

    // Observar todos los items de la timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    // Cleanup
    return () => {
      timelineItems.forEach((item) => observer.unobserve(item));
    };
  }, [timelineData]);

  return (
    <>
    <body>
      <header>
        <nav>
          <button><Link to='/'>Home</Link></button>
          <button><Link to="/quotes">Citations</Link></button>
          <button><Link to="/timeline">Timeline</Link></button>
        </nav>
      </header>

      <main>
        <div>
          <h1>Timeline</h1>
          {timelineData.length > 0 && (
            <div className="timeline-container">
              {timelineData.map((data, idx) => <TimeLineItem data={data} key={idx} />
              )}
            </div>
          )}
        </div>
      </main>

      <footer className="bg-[#533532] text-white py-6 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2026 - Projet Sofia Coppola - Gabriel Hono & Emilie Gainon
          </p>
        </div>
      </footer>
    </body>
    </>
  );
}